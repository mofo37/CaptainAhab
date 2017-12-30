import { types } from "mobx-state-tree";

const Upgrade = types
	.model("UpgradeStore", {
		isVisible: types.optional(types.boolean, false),
	})
	.actions(self => {
		function showModal() {
            let show = self.isVisible ? false : true;
            self.isVisible = show
		}
		
		return { showModal };
	});


const UpgradeStore = Upgrade.create({});

export default UpgradeStore;