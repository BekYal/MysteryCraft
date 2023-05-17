
IMPORT('EnchantsHelper');
IDRegistry.genBlockID("teerch")
Block.createBlock("teerch",
[{ name: "big chest", texture: [["sss", 0], ["sss", 0], ["sss", 0], ["ppp", 0], ["sss", 0], ["sss", 0]], inCreative: true }], {
	rendertype: 2,
	renderlayer: 2,
});

var EntityFeatures = {},
	ImprovedItems = {},
	MysteryAPI = {},
	Color = android.graphics.Color,
	PotionEffect = Native.PotionEffect,
	ParticleType = Native.ParticleType,
	BlockSide = Native.BlockSide,
	EntityType = Native.EntityType;


function transformString(str) {
	var words = str.split(/(?=[A-Z])/);
	for (var i = 0; i < words.length; i++) {
		words[i] = words[i].toLowerCase();
		if (i > 0) {
			words[i] = ' ' + words[i];
		}
	}
	return words.join('');
}


IDRegistry.genItemID('ruby');
IDRegistry.genItemID('Empty_belt');

	Item.createItem("ruby", "ruby",
		{ name: "Ruby_modificator" }, { stack: 1 });
		
	Item.createItem("Empty_belt", "Empty_belt", 
		{ name: "Empty_belt" }, { stack: 1 });


	
var ImprovedItem = function() {
	this.createTotem = function(name, texture, damage, func, useDecrease) {
		IDRegistry.genItemID(name);
		Item.createItem(name, transformString(name), { name: texture }, { stack: 1 });
		Item.setMaxDamage(ItemID[name], damage);
		Item.setAllowedInOffhand(name, true);
		if (func.tick ){
			Callback.addCallback("ServerPlayerTick", function(player) {
				let item = Entity.getOffhandItem(player);
				if (item.id == ItemID[name] && World.getThreadTime() % 40 == 0 && item.data != damage) {
					Entity.setOffhandItem(player, ItemID[name], item.count, item.data + useDecrease || 1 , item.extra)
					func.tick(item, player);
				}// else if (item.id == ItemID[name] && item.data == damage) 
			});
		}
		if (func.hurt){
				Callback.addCallback('EntityHurt', function(attacker, victim, damageValue, damageType, someBool0, someBool2) {
				let item = Entity.getOffhandItem(attacker);
				if (item.id == ItemID[name] && item.data != damage) {
					func.hurt(item, attacker, victim, damageValue, damageType);
					Entity.setOffhandItem(attacker, ItemID[name], item.count, item.data + useDecrease || 1 , item.extra)
				} 
			});
		}
		if (func.ownenrHurt) {
			Callback.addCallback('EntityHurt', function(attacker, victim, damageValue, damageType, someBool0, someBool2) {
				let item = Entity.getOffhandItem(victim);
				if (item.id == ItemID[name] && item.data != damage) {
					func.ownenrHurt(item, attacker, victim, damageValue, damageType);
					Entity.setOffhandItem(attacker, ItemID[name], item.count, item.data + useDecrease || 1 , item.extra)
				}
			});
		}
		if (func.destroyBlock) {
			Callback.addCallback("DestroyBlock", function (coords, block, player){
				let region = BlockSource.getDefaultForActor(player),
					item = Entity.getOffhandItem(player), 
					actor = new PlayerActor(player);
				if (item.id == ItemID[name] && item.data != damage) {
					let enchants = item.extra.getEnchants(), 
						enchantData = {
							efficiency: enchants[EEnchantment.EFFICIENCY],
							experience: 0, //hz
							fortune: enchants[EEnchantment.FORTUNE],
							silk: enchants[EEnchantment.SILK],
							unbreaking: enchants[EEnchantment.UNBREAKING]
						};
					func.destroyBlock(item, enchantData, region, coods, block, player);
					Entity.setOffhandItem(player, ItemID[name], item.count, item.data =+ useDecrease || 1 , item.extra)
			    }
			});
		}
	}
}

var hu = new ImprovedItem().createTotem('huyaa', 'stick', 100, {
	tick(item, player){
		Game.message("hhh");
	}, 
	hurt(item, attacker, victim, damageValue, damageType){
		Game.message("huyy");
	},
	ownenrHurt(item, attacker, victim, damageValue, damageType){
		Game.message("herrr");
	}
}, 5);
	/*
	Callback.addCallback("ServerPlayerTick", function (player) {
		Entity.setOffhandItem(player, 260, 1, 0)
		let actor = new PlayerActor(player);
		/*for(let i = 0; i < 1000; i++){
			let sl = actor.getInventorySlot(i);
			if (sl.id == ItemID.huyaa) {
				Game.message(i + '');

	});
*/
