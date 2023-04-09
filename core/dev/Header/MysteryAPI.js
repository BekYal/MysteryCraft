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


	
var ImprovedItem = function(name) {
	
	this.createTotem = function(texture, danage, useDecrease, func) {
		IDRegistry.genItemID(name);
		Item.createItem(name, transformString(name), { name: texture }, { stack: 1 });
			Item.setMaxDamage(ItemID[name], damage)		
			Item.setAllowedInOffhand(name, true);
		
		if(func.tick){
			Callback.addCallback("ServerPlayerTick", function(player) {
				let item = Entity.getOffhandItem(player),
				let	actor = new PlayerActor(player);
				if (item.id == ItemID[name] && World.getThreadTime() % 40 == 0 ) {
					func.tick(item, player);
					actor.setInventorySlot(item, ItemID[name], item.count, item.data =+ useDecrease || 1 , item.extra);
				}
			});
		}
		if(func.hurt){
				Callback.addCallback('EntityHurt', function(attacker, victim, damageValue, damageType, someBool0, someBool2) {
				let item = Entity.getOffhandItem(attacker);
				let	actor = new PlayerActor(player);
				if (item.id == ItemID[name]) {
					func.hurt(item, attacker, victim, damageValue, damageType);
					actor.setInventorySlot(item, ItemID[name], item.count, item.data =+ useDecrease || 1 , item.extra);
				}
			});
		}
		if (ownenrHurt) {
			Callback.addCallback('EntityHurt', function(attacker, victim, damageValue, damageType, someBool0, someBool2) {
				let item = Entity.getOffhandItem(victim);
				let	actor = new PlayerActor(player);
				if (item.id == ItemID[name]) {
					func(item, attacker, victim, damageValue, damageType);
					actor.setInventorySlot(item, ItemID[name], item.count, item.data =+ useDecrease || 1 , item.extra);
				}
			});
		}
		if (func.destroyBlock) {
				Callback.addCallback("DestroyBlock", function (coords, block, player){
				let 
				   	region = BlockSource.getDefaultForActor(player),
				   	item = Entity.getOffhandItem(player);
				let	actor = new PlayerActor(player);
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
					func(item, enchantData, region, coods, block, player);
					actor.setInventorySlot(item, ItemID[name], item.count, item.data =+ useDecrease || 1 , item.extra);
			    }
			});
		}
	};
}

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





ImprovedItems.createTotemq = function(name, texture){
	IDRegistry.genItemID(name);
	Item.createItem(name, transformString(name), { name: texture }, { stack: 1 });
	Item.setAllowedInOffhand(name, true);	
};




ImprovedItems.createTotemq('debugTotem', 'totem');

Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
   let item = Entity.getOffhandItem(Player.get()); 
   if (item.id == ItemID.debugTotem) {
   if (victim == Player.get() ) 
	 Game.tipMessage("damageValue: " + damageValue + '\ndamageType: ' + damageType)
		  else	Game.tipMessage("damageValue: " + damageValue + '\ndamageType: ' + damageType + '\nvictim: ' + victim);
   }
});




ImprovedItems.createTotem('EnchantedTotem', 'totem', 'destroyBlock', 
	function(item, enchantData, region, coods, block, player){
		Game.prevent();
	let funct = Block.getDropFunction(block.id),
		enchants = item.extra.getEnchants(), 
		drops = funct(coords, block.id, block.data, ToolAPI.getBlockData(block.id).level, enchantData, Entity.getCarriedItem(player), region);
		
	for(let i in drops)
		        region.spawnDroppedItem(coords.x + .5, coords.y + .5, coords.z + .5, drops[i].id, drops[i].count, drops[i].data, drops[i].extra);
		    region.destroyBlock(coords.x, coords.y, coords.z);
	}
);