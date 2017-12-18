import { types } from "mobx-state-tree";

const Wallet = types
	.model("WalletStore", {
		items: types.optional(types.frozen, []),
		isLoading: types.optional(types.boolean, true),
		bitcoinPrices: types.optional(types.string, ''),
	})
	.actions(self => {
		function fetchItems(data) {
			(self.items = data), (self.isLoading = false);	
		}
		
		return { fetchItems };
	});


const WalletStore = Wallet.create({});

export default WalletStore;
