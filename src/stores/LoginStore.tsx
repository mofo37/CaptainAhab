import { types } from "mobx-state-tree";

const Login = types
	.model("LoginStore", {
		email: types.optional(types.string, ""),
		password: types.optional(types.string, ""),
		emailError: types.optional(types.string, ""),
		passwordError: types.optional(types.string, ""),
		isValid: types.optional(types.boolean, false),
		isLoggedIn: types.optional(types.boolean, false),
	})
	.actions(self => {
		function loggedInChange(loggedInState) {
			self.isLoggedIn = loggedInState;
		}
		function emailOnChange(id) {
			self.email = id;
			validateEmail();
		}
		
		function validateEmail() {
			const emailPattern = /.+@.+\..+/;
			let emailError = undefined;
			if (!self.email || !emailPattern.test(self.email)) {
				emailError = 'Invalid';
			}  
			self.emailError = emailError;
		}

		function passwordOnChange(pwd) {
			self.password = pwd;
			validatePassword();
		}
		function validatePassword() {
			const alphaNumeric = /[^a-zA-Z0-9 ]/i.test(self.password) ? "Only alphanumeric characters" : undefined;
			const maxLength = self.password.length > 15 ? "Must be 15 characters or fewer" : undefined;
			const minLength = self.password.length < 8 ? "Must be 8 characters or more" : undefined;
			const required = self.password ? undefined : "Required";
			self.passwordError = required ? required : alphaNumeric ? alphaNumeric : maxLength ? maxLength : minLength;
		}
		function validateForm() {
			if (self.emailError === "" && self.passwordError === "" && self.email !== "" && self.password !== "") {
				self.isValid = true;
			}
		}
		function clearStore() {
			self.email = "";
			self.isValid = false;
			self.emailError = "";
			self.password = "";
			self.passwordError = "";
		}
		return { emailOnChange, validateEmail, passwordOnChange, validatePassword, validateForm, clearStore, loggedInChange };
	});

const LoginStore = Login.create({
	email: "",
	password: "",
	emailError: "",
	passwordError: "",
	isValid: false,
	isLoggedIn: false,
});

export default LoginStore;
