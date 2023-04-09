IMPORT('EnchantsHelper');
var
	EntityFeatures = {},
	ImprovedItems = {},
	MysteryAPI = {},
	Color = android.graphics.Color,
	PotionEffect = Native.PotionEffect,
	ParticleType = Native.ParticleType,
	BlockSide = Native.BlockSide,
	EntityType = Native.EntityType;




IDRegistry.genItemID('ruby');
IDRegistry.genItemID('Empty_belt');

	Item.createItem("ruby", "ruby",
		{ name: "Ruby_modificator" }, { stack: 1 });
		
	Item.createItem("Empty_belt", "Empty_belt", 
		{ name: "Empty_belt" }, { stack: 1 });
		
	
	


ImprovedItems.createTotem = function(name, texture, type, func, par) {
	IDRegistry.genItemID(name);
	Item.createItem(name, transformString(name), { name: texture }, { stack: 1 });
	Item.setAllowedInOffhand(name, true);
	switch (type) {
		case 'tick':
			Callback.addCallback("ServerPlayerTick", function(player) {
				let item = Entity.getOffhandItem(player);
				if (item.id == ItemID[name]) {
					func(item, player);
				}
			});
			break;
		case 'hurt':
			Callback.addCallback('EntityHurt', function(attacker, victim, damageValue, damageType, someBool0, someBool2) {
				let item = Entity.getOffhandItem(attacker);
				if (item.id == ItemID[name]) {
					func(item, attacker, victim, damageValue, damageType);
				}
			});
			break;
		case 'userHurt':
			Callback.addCallback('EntityHurt', function(attacker, victim, damageValue, damageType, someBool0, someBool2) {
				let item = Entity.getOffhandItem(victim);
				if (item.id == ItemID[name]) {
					func(item, attacker, victim, damageValue, damageType);
				}
			});
			break;
		case 'destroyBlock':
			Callback.addCallback("DestroyBlock", function (coords, block, player){
				let 
					region = BlockSource.getDefaultForActor(player),
					item = Entity.getOffhandItem(player);
				if (item.id == ItemID[name]) {
					let 
						enchants = item.extra.getEnchants(), 
						enchantData = {
							efficiency: enchants[EEnchantment.EFFICIENCY],
							experience: 0, //hz
							fortune: enchants[EEnchantment.FORTUNE],
							silk: enchants[EEnchantment.SILK],
							unbreaking: enchants[EEnchantment.UNBREAKING]
						};
					func(item, enchantData, region, coods, block, player)
			    }
			});
	}
	if (par) {
		Item.setEnchantType(ItemID[name], Mask.all, par.enchanted);
	}
};