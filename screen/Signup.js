import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, TextInput, TouchableHighlight } from 'react-native';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
	const [value, setValue] = useState("");
	const navigation = useNavigation()
	return (
		<SafeAreaView>
			{/* <StatusBar/> */}
			<ScrollView className="text-base px-5 py-12 bg-white min-h-screen">
				<KeyboardAvoidingView behavior='padding'>
					<Text className="text-4xl font-bold">Create Account</Text>

					<View className="flex flex-col mt-8">
						<View className={"mt-4 "}>
							<Text className="font-bold mb-1">Full name :</Text>
							<TextInput selectionColor={"#FEF9C3"} secureTextEntry={false} cursorColor={"#000"} className="border-2 border-yellow-400 rounded-lg text-base px-5 py-3" onChangeText={(e) => { setValue(e) }} value={value} placeholder={"eg. John Doe"} keyboardType={"phone-pad"} />
						</View>
						<View className={"mt-4 "}>
							<Text className="font-bold mb-1">Phone Number :</Text>
							<TextInput selectionColor={"#FEF9C3"} secureTextEntry={false} cursorColor={"#000"} className="border-2 border-yellow-400 rounded-lg text-base px-5 py-3" onChangeText={(e) => { setValue(e) }} value={value} placeholder={"eg. 1234567890"} keyboardType={"phone-pad"} />
						</View>
						<View className={"mt-4 "}>
							<Text className="font-bold mb-1">Password :</Text>
							<TextInput selectionColor={"#FEF9C3"} secureTextEntry={true} cursorColor={"#000"} className="border-2 border-yellow-400 rounded-lg text-base px-5 py-3" onChangeText={(e) => { setValue(e) }} value={value} placeholder={"**********"} keyboardType={"default"} />
						</View>
						<TouchableHighlight
							activeOpacity={1} underlayColor={"#facc15"}
							onPress={() => {
								navigation.navigate("Orders")
							}} style={{
								shadowColor: 'rgba(0,0,0, .8)', // IOS
								shadowOffset: { height: 5, width: 1 }, // IOS
								shadowOpacity: 1, // IOS
								shadowRadius: 1, //IOS
								elevation: 4, // Android
								justifyContent: 'center',
								alignItems: 'center',
								flexDirection: 'row',
							}} className="mt-6 flex justify-center rounded-lg text-center px-4 py-4 bg-yellow-400" disabled={false}>
							<Text className="text-center font-bold text-white">Create Account</Text>
						</TouchableHighlight>
						<View className="mt-4 flex flex-row justify-center">
							<Text className="text-base text-center w-max">Already have an account?</Text>
							<TouchableHighlight activeOpacity={1} underlayColor={"white"} onPress={() => {
								navigation.navigate("SignIn")
							}}><Text className="text-base text-center w-max ml-1 text-yellow-400 underline">SignIn</Text></TouchableHighlight>
						</View>
					</View>
				</KeyboardAvoidingView>
			</ScrollView>
		</SafeAreaView >
	)
}

export default SignUp;
