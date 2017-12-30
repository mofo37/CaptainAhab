import { types, flow } from "mobx-state-tree";
import { CurrencyModel } from "./CurrencyModel";
const cc = require('cryptocompare')

// cc.coinList()
// .then(coinList => {
//   console.log(coinList)

async function getCurrencies() {

	try {
		let symbols = [
			'BTC', 'ETH', 'LTC', 'XRP', 'BCH', 'ADA', 'MIOTA', 'DASH', 'XEM', 'XMR',
			'EOS', 'BTG', 'NEO', 'QTUM', 'XLM', 'ETC', 'ETC', 'TRX', 'LSK', 'BCC',
			'XVG', 'ICX', 'ARDR', 'XRB', 'OMG', 'ZEC'];

		let coinList = await cc.priceFull(symbols,
			['USD']);
		let currencies = [];

		for (var coin in coinList) {
			currencies.push(
				{
					CHANGE24HOUR: coinList[coin].USD.CHANGE24HOUR,
					CHANGEDAY: coinList[coin].USD.CHANGEDAY,
					CHANGEPCT24HOUR: coinList[coin].USD.CHANGEPCT24HOUR,
					CHANGEPCTDAY: coinList[coin].USD.CHANGEPCTDAY,
					FROMSYMBOL: coinList[coin].USD.FROMSYMBOL,
					HIGH24HOUR: coinList[coin].USD.HIGH24HOUR,
					HIGHDAY: coinList[coin].USD.HIGHDAY,
					LASTUPDATE: coinList[coin].USD.LASTUPDATE,
					LASTVOLUME: coinList[coin].USD.LASTVOLUME,
					LASTVOLUMETO: coinList[coin].USD.LASTVOLUMETO,
					LOW24HOUR: coinList[coin].USD.LOW24HOUR,
					LOWDAY: coinList[coin].USD.LOWDAY,
					MKTCAP: coinList[coin].USD.MKTCAP,
					OPEN24HOUR: coinList[coin].USD.OPEN24HOUR,
					OPENDAY: coinList[coin].USD.OPENDAY,
					PRICE: coinList[coin].USD.PRICE,
					SUPPLY: coinList[coin].USD.SUPPLY,
					TOSYMBOL: coinList[coin].USD.TOSYMBOL
				}
			)	
		}
			
		return Promise.resolve({res: true, currencies});
	}catch(e){
		return {res: false}
	}
};

const List = types
	.model("List", {
		items: types.optional(types.frozen, []),
		isLoading: types.optional(types.boolean, true),
		currencies: types.optional(types.array(CurrencyModel), []),
	})
	.actions(self => {
		function fetchItems(data) {
			(self.items = data), (self.isLoading = false);
		}
		const getCurrenciesList = flow(function* () {
			self.isLoading = true;
			try {
				let currencyPrices = yield getCurrencies();
				if(currencyPrices.res) self.currencies = currencyPrices.currencies;
				self.isLoading = false;
			} catch (e) {
				console.log(e)
			}
		});
		return { fetchItems, getCurrenciesList };
	});


const HomeStore = List.create({});

export default HomeStore;
