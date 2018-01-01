import { StyleSheet } from "react-native";

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
		textAlign: 'center'
	},
	input: {
		height: 80, 
		borderColor: 'lightgray', 
		borderWidth: 1,
		width: 160,
		fontSize: 30,
	},
	dropdown_3: {
    width: 150,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 1,
  },
  dropdown_3_dropdownTextStyle: {
    backgroundColor: '#000',
    color: '#fff'
  },
  dropdown_3_dropdownTextHighlightStyle: {
    backgroundColor: '#fff',
    color: '#000'
  }
});
export default styles;
