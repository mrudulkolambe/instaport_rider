import { View, Text } from 'react-native'
import React from 'react'

const OrderCard = ({order}) => {
	console.dir(order)
	return (
		<View className="w-full p-4 rounded-2xl border-2 border-main bg-main/10 mt-3">
			<View className="flex flex-row justify-between items-center">
				<View className="flex flex-row items-center gap-2">
					<Text className="text-xl font-bold">Rs. 100</Text>
					<Text className="text-sm">({order?.status})</Text>
				</View>
				<Text className="text-sm">#{order?._id?.slice(18)}</Text>
			</View>
			<View className="border-t-2 border-gray-300 py-3">
				<View className="flex flex-row"><Text className="text-base font-bold">Commodity</Text><Text className="text-base"> - {order?.package} ({order?.parcel_weight})</Text></View>
			</View>
		</View>
	)
}

export default OrderCard