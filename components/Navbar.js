import { View, Text } from 'react-native'
import React from 'react'
// import { Icon } from 'react-native-elements'
// import { CIcon } from '@coreui/icons-react';
// import { cilWallet } from '@coreui/icons';
import IonIcons from 'react-native-vector-icons/Ionicons'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const Navbar = () => {
	const navigation = useNavigation()
	return (
		<View className="bg-white flex flex-row px-5 items-center justify-between w-screen shadow-xl border-t border-gray-400 fixed bottom-0 h-[9vh]">
			{/* <Icon type='feather' name='box' size={29} /> */}
			<FeatherIcons name="box" size={30} color="#000" />
			<IonIcons name="wallet-outline" onPress={() => {
				navigation.navigate("SignIn")
			}} size={30} color="#000" />
			<View className="h-12 w-12 flex items-center justify-center rounded-full bg-yellow-400">
			</View>
			<IonIcons name="chatbubbles-outline" size={30} color="#000" />
			<FeatherIcons name="user" onPress={() => {
				navigation.navigate("Profile")
			}} size={30} color="#000" />
		</View>
	)
}

export default Navbar