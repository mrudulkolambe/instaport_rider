import { View, Text, RefreshControl, ScrollView, } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import OrderCard from '../components/OrderCard'
import { io } from 'socket.io-client'
import axios from 'axios'

const Orders = () => {

	const [data, setData] = useState([])
	useEffect(() => {
		axios("http://192.168.43.19:3000/order/orders", {
			method: "GET",
			headers: {
				Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGJlYTA0ODIyNTU0MmI5NWQ4NDQyYWUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTAyMTgwNDd9.osrLRq5uYJZJj2NAiwpqD3dL_aqIrgFxeGTlJirBiWk"
			}
		})
			.then((res) => {
				setData(res.data.order)
			})
	}, []);
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			axios("http://192.168.43.19:3000/order/orders", {
				method: "GET",
				headers: {
					Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGJlYTA0ODIyNTU0MmI5NWQ4NDQyYWUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTAyMTgwNDd9.osrLRq5uYJZJj2NAiwpqD3dL_aqIrgFxeGTlJirBiWk"
				}
			})
				.then((res) => {
					setData(res.data.order)
					setRefreshing(false);
				})
		}, 2000);
	}, []);
	return (
		<Layout navbar={true} topbar={false} title={"testing"}>
			<ScrollView
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}>

				<View className="bg-white h-full w-full flex items-center bg-white-200 px-5 py-3">
					<View className="w-full text-left">
						<Text className="text-xl font-bold">Orders</Text>
					</View>
					<View className="w-full flex flex-row justify-between mt-2">
						<View className="py-1.5 rounded-full border border-transparent bg-main w-[31%]">
							<Text className="text-center text-white text-sm font-medium">Available</Text>
						</View>
						<View className="py-1.5 rounded-full bg-main w-[31%]">
							<Text className="text-center text-white text-sm font-medium">Active</Text>
						</View>
						<View className="py-1.5 rounded-full bg-main w-[31%]">
							<Text className="text-center text-white text-sm font-medium">Completed</Text>
						</View>
					</View>
					<View className="w-full mt-4">
						{
							data?.map((order, index) => {
								return <OrderCard order={order} key={index} />
							})
						}
					</View>
				</View>
			</ScrollView>
		</Layout>
	)
}

export default Orders