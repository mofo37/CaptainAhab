import MainStore from "../stores/HomeStore";
import LoginStore from "../stores/LoginStore";
import RegisterStore from "../stores/RegisterStore";
import WalletStore from "../stores/WalletStore";

export default function() {
	const mainStore = MainStore;
	const loginStore = LoginStore;
	const registerStore = RegisterStore;
	const walletStore = WalletStore; 

	return {
		loginStore,
		mainStore,
		registerStore,
		walletStore
	};
}
