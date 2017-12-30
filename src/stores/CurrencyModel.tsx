import { types } from "mobx-state-tree";

export const CurrencyModel = types
	.model("CurrencyModel", {
		CHANGE24HOUR: types.optional(types.number, 0),
		CHANGEDAY: types.optional(types.number, 0),
		CHANGEPCT24HOUR: types.optional(types.number, 0),
		CHANGEPCTDAY: types.optional(types.number, 0),
		FROMSYMBOL: types.optional(types.string, ''),
		HIGH24HOUR: types.optional(types.number, 0),
		HIGHDAY: types.optional(types.number, 0),
		LASTUPDATE: types.optional(types.number, 0),
		LASTVOLUME: types.optional(types.number, 0),
		LASTVOLUMETO: types.optional(types.number, 0),
		LOW24HOUR: types.optional(types.number, 0),
		LOWDAY: types.optional(types.number, 0),
		MKTCAP: types.optional(types.number, 0),
		OPEN24HOUR: types.optional(types.number, 0),
		OPENDAY: types.optional(types.number, 0),
		PRICE: types.optional(types.number, 0),
		SUPPLY: types.optional(types.number, 0),
		TOSYMBOL: types.optional(types.string, ''),
	})
	.actions(() => {
		return {};
	});



export type Currency = typeof CurrencyModel.Type;

