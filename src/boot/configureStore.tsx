import MainStore from "../stores/HomeStore";
import LoginStore from "../stores/LoginStore";
import RegisterStore from "../stores/RegisterStore";

export default function() {
	const mainStore = MainStore;
	const loginStore = LoginStore;
	const registerStore = RegisterStore;
	return {
		loginStore,
		mainStore,
		registerStore
	};
}
