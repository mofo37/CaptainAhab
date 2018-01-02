import { StyleSheet } from "react-native";
import colors from '../../theme/colors'
const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#FBFAFA",
		paddingTop: 60	,
			
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
		textAlign: 'center'
	},
	input: {
		height: 80, 
		borderColor: 'lightgray', 
		borderWidth: 1,
		width: 200,
		fontSize: 30,
		marginTop: 30,
		marginBottom: 30,
		alignItems: 'center'
	},
	dropdown_3: {
		width: 90 ,
    borderColor: 'lightgrey',
    borderWidth: 1,
		borderRadius: 1,
		marginTop: 30,
		marginBottom: 30,
  },
  dropdown_3_dropdownTextStyle: {
    backgroundColor: colors.navy,
		color: colors.coral,
		fontSize: 25,
		width: 90 ,
  },
  dropdown_3_dropdownTextHighlightStyle: {
    backgroundColor: '#fff',
    color: '#000'
	},
	dropdowText: {
		fontSize: 25,
		textAlign: 'center',
		marginTop: 20
	}
});
export default styles;
