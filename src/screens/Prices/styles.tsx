import { StyleSheet } from "react-native";
import colors from '../../theme/colors';

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		paddingTop: 60,
		alignItems: 'center',
		flex: 1
	},
	row: {
		flex: 1,
		alignItems: "center",
	},
	text: {
		color: colors.navy,
		fontSize: 40,
		marginBottom: 15,
		alignItems: "center",
	},
	mt: {
		marginTop: 18,
	},
});
export default styles;
