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
		alignItems: 'center',
		color: colors.navy
	},
	total: {
		marginTop: 20,
		marginBottom: 10,
		fontSize: 40,
		textAlign: 'center',
		color: colors.coral
	},
});
export default styles;
