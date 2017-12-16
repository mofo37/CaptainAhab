import MainStore from "../stores/HomeStore";
import LoginStore from "../stores/LoginStore";

export default function() {
	const mainStore = MainStore;
	const loginStore = LoginStore;

	return {
		loginStore,
		mainStore,
	};
}
