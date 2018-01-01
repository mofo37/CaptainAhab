import { Dimensions, StyleSheet } from "react-native";
import colors from '../../theme/colors';
const deviceHeight = Dimensions.get("window").height;

const styles: any = StyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		paddingTop: 60,
		backgroundColor: colors.navy,
	},
	shadow: {
		flex: 1,
		width: undefined,
		height: undefined,
	},
	bg: {
		flex: 1,
		marginTop: deviceHeight / 1.75,
		paddingTop: 20,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 30,
		bottom: 0,
	},
	input: {
		marginBottom: 20,
		color: colors.white
	},
	btn: {
		marginTop: 20,
		alignSelf: "center",
		backgroundColor: colors.white
	},
});
export default styles;
