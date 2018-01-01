import { StyleSheet } from "react-native";
import colors from '../../theme/colors';

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#FBFAFA",
		paddingTop: 60		
	},
	account: {
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 20,
		alignItems: 'center'
	},
	containerInput: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FBFAFA',
	  },
	total: {
		marginTop: 20,
		marginBottom: 10,
		fontSize: 40,
		textAlign: 'center',
		color: colors.navy
	},
	input: {
		height: 80, 
		borderColor: 'lightgray', 
		borderWidth: 1,
		width: 160,
		fontSize: 30,
	},
});
export default styles;
