import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native'
const width = Dimensions.get("window").width;

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#FBFAFA",
		paddingTop: 60,
		width: width,
		
	},
	content: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	view: {
		width: 300,
		flexDirection: 'column',
		alignItems: 'center',	
		justifyContent: 'center',	
	},
	button: {
		marginTop: 15,
		width: 150,
		alignSelf: 'center'
	},
	text: {
		textAlign: 'center',
		fontSize: 28,
	},
});
export default styles;