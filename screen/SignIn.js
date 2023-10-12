import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableHighlight } from 'react-native';
import { View, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { io } from 'socket.io-client';

export default function SignIn() {
	const [mobileno, setMobileNo] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [socket, setSocket] = useState()
	const navigation = useNavigation();
	const handleSubmit = () => {
		socket?.emit('send-data', { message: 'Hello from Client A!' });
	}

	useEffect(() => {
		const socket = io("http://192.168.43.19:5000", {
			transports: ["websocket"]
		});
		socket.on("connect", () => {
			console.log("Connected: ", socket.id)
		})
		socket.on("disconnect", (res) => {
			console.log(res)
		})
		socket.on("send-data", (data) => {
			console.log("Connected: ", data)
		})
		setSocket(socket)
		// 192.168.246.148
	}, []);
	return (
		<SafeAreaView>
			{/* <StatusBar /> */}
			<ScrollView className="text-base px-5 py-12 bg-white min-h-screen">
				<KeyboardAvoidingView behavior='padding'>
					<Text className="text-4xl font-bold">Login</Text>

					<View className="flex flex-col mt-8">
						<View className={"mt-4 "}>
							<Text className="font-bold mb-1">Phone Number :</Text>
							<TextInput selectionColor={"#FEF9C3"} secureTextEntry={false} cursorColor={"#000"} className="border-2 border-yellow-400 rounded-lg text-base px-5 py-3" onChangeText={(e) => { setMobileNo(e) }} value={mobileno} placeholder={"eg. 1234567890"} keyboardType={"phone-pad"} />
						</View>
						<View className={"mt-4 "}>
							<Text className="font-bold mb-1">Password :</Text>
							<TextInput selectionColor={"#FEF9C3"} secureTextEntry={true} cursorColor={"#000"} className="border-2 border-yellow-400 rounded-lg text-base px-5 py-3" onChangeText={(e) => { setPassword(e) }} value={password} placeholder={"**********"} keyboardType={"default"} />
						</View>
						<View className="flex items-end mt-2">
							<Text>forget password?</Text>
						</View>
						<TouchableHighlight style={{
							shadowColor: 'rgba(0,0,0, .8)', // IOS
							shadowOffset: { height: 5, width: 1 }, // IOS
							shadowOpacity: 1, // IOS
							shadowRadius: 1, //IOS
							elevation: 4, // Android
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'row',
						}} className="mt-6 flex justify-center rounded-lg text-center px-4 py-4 bg-yellow-400" onPress={() => {
							handleSubmit()
							// navigation.navigate("Orders")
						}} disabled={false}>
							{loading ? <ActivityIndicator color={"#ffffff"} size={"small"} /> : <Text className="text-center font-bold text-white">{"Login"}</Text>}
						</TouchableHighlight>
						<View className="mt-4 flex flex-row justify-center">
							<Text className="text-base text-center w-max">Don't have an account?</Text>
							<TouchableHighlight activeOpacity={1} underlayColor={"white"} onPress={() => {
								navigation.navigate("SignUp")
							}}><Text className="text-base text-center w-max ml-1 text-yellow-400 underline">Signup</Text></TouchableHighlight>
						</View>
					</View>
				</KeyboardAvoidingView>
			</ScrollView>
		</SafeAreaView >
	)
}