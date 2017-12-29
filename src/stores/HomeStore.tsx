import { types, flow } from "mobx-state-tree";
const cc = require('cryptocompare')

// cc.coinList()
// .then(coinList => {
//   console.log(coinList)
 
async function getBitcoin(){
	let coinList = await cc.priceFull([
	'BTC', 'ETH', 'LTC', 'XRP', 'BCH', 'ADA', 'MIOTA', 'DASH', 'XEM', 'XMR',
	'EOS', 'BTG', 'NEO', 'QTUM', 'XLM', 'ETC', 'ETC', 'TRX', 'LSK', 'BCC', 
	'XVG', 'ICX', 'ARDR', 'XRB', 'OMG', 'ZEC'],
	 ['USD', 'EUR', 'CNY']);
	return coinList;
};

const List = types
	.model("List", {
		items: types.optional(types.frozen, []),
		isLoading: types.optional(types.boolean, true),
		bitcoinPrices: types.optional(types.string, ''),
	})
	.actions(self => {
		function fetchItems(data) {
			(self.items = data), (self.isLoading = false);	
		}
		const getBitcoinList = flow(function*(){
			self.isLoading = true;
			try {
				yield getBitcoin()
				// let bitcoinPrice = yield getBitcoin();
				// self.bitcoinPrices = bitcoinPrice;
				self.isLoading =false;
			} catch(e) {
				console.log(e)
			}
		});
		return { fetchItems, getBitcoinList };
	});


const HomeStore = List.create({});

export default HomeStore;
