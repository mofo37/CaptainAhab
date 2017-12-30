import HomeStore from "../stores/HomeStore";
import LoginStore from "../stores/LoginStore";
import RegisterStore from "../stores/RegisterStore";
import WalletStore from "../stores/WalletStore";
import UpgradeStore from "../stores/UpgradeStore";

export default function() {
	const homeStore = HomeStore;
	const loginStore = LoginStore;
	const registerStore = RegisterStore;
	const walletStore = WalletStore; 
	const upgradeStore = UpgradeStore;

	return {
		loginStore,
		homeStore,
		registerStore,
		walletStore,
		upgradeStore
	};
}
