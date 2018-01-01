import { StyleSheet } from "react-native";
import colors from '../../theme/colors';

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#FBFAFA",
		paddingTop: 60,
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
		color: colors.navy,
	},
	email: {
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 15,
		color: colors.navy
	},
	name: {
		marginTop: 20,
		fontSize: 25,
		textAlign: 'center',
		color: colors.navy
	},
});
export default styles;