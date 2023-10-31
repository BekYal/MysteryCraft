IMPORT('EnchantsHelper');
IDRegistry.genBlockID("teerch");
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


var ImprovedItems = function() {
	this.createTotem = function(name, texture, damage, func, useDecrease) {
		IDRegistry.genItemID(name);
		Item.createItem(name, transformString(name), { name: texture }, { stack: 1 });
		Item.setMaxDamage(ItemID[name], damage);
		Item.setAllowedInOffhand(name, true);
		if (func.tick) {
			Callback.addCallback("ServerPlayerTick", function(player) {
				let item = Entity.getOffhandItem(player);
				if (item.id == ItemID[name] && World.getThreadTime() % 40 == 0 && item.data != damage) {
					Entity.setOffhandItem(player, ItemID[name], item.count, item.data + useDecrease || 1, item.extra);
					func.tick(item, player);
				} else if (item.id == ItemID[name] && item.data == damage) {
					Entity.setOffhandItem(player, 0, 0, 0, item.extra);
					World.playSoundAtEntity(player, 'random.break', 1);
				}
			});
		}
		Callback.addCallback('EntityHurt', function(attacker, victim, damageValue, damageType, someBool0, someBool2) {
			let owner = attacker;
			if (func.hurt) {
				let item = Entity.getOffhandItem(attacker);
				if (item.id == ItemID[name] && item.data != damage) {
					func.hurt(item, owner, victim, damageValue, damageType);
					Entity.setOffhandItem(attacker, ItemID[name], item.count, item.data + useDecrease || 1, item.extra);
				} else if (item.id == ItemID[name] && item.data == damage) {
					Entity.setOffhandItem(attacker, 0, 0, 0, item.extra);
					World.playSoundAtEntity(attacker, 'random.break', 1);
				}
			}
			if (func.ownerHurt) {
				let item = Entity.getOffhandItem(victim);
				if (item.id == ItemID[name] && item.data != damage) {
					owner = victim;
					func.ownerHurt(item, attacker, owner, damageValue, damageType);
					Entity.setOffhandItem(victim, ItemID[name], item.count, item.data + useDecrease || 1, item.extra);
				} else if (item.id == ItemID[name] && item.data == damage) {
					Entity.setOffhandItem(victim, 0, 0, 0, item.extra);
					World.playSoundAtEntity(victim, 'random.break', 1);
				}
			}
		});
		if (func.destroyBlock) {
			Callback.addCallback("DestroyBlock", function(coords, block, player) {
				let region = BlockSource.getDefaultForActor(player),
					item = Entity.getOffhandItem(player);
				if (item.id == ItemID[name] && item.data != damage) {
					func.destroyBlock(item, region, coods, block, );
					Entity.setOffhandItem(player, ItemID[name], item.count, item.data + useDecrease || 1, item.extra);
				} else if (item.id == ItemID[name] && item.data == damage) {
					Entity.setOffhandItem(player, 0, 0, 0, item.extra);
					World.playSoundAtEntity(player, 'random.break', 1);
				}
			});
		}
		if (func.death) {
			Callback.addCallback('EntityDeath', function(entity, attacker, damageType) {
				if (func.hurt) {
					let item = Entity.getOffhandItem(entity);
					if (item.id == ItemID[name] && item.data != damage) {
						func.hurt(item, owner, victim, damageValue, damageType);
						Entity.setOffhandItem(entity, ItemID[name], item.count, item.data + useDecrease || 1, item.extra);
					} else if (item.id == ItemID[name] && item.data == damage) {
						Entity.setOffhandItem(entity, 0, 0, 0, item.extra);
						World.playSoundAtEntity(entity, 'random.break', 1);
					}
				}
			});
		}
	};
};

var hu = new ImprovedItems().createTotem('huyaa', 'stick', 100, {
	death(item, owner, attacker, damageType) {
		Game.message("huy: " + owmer);
	},
	tick(item, player) {
		Game.message("haaaahh");
	},
	hurt(item, attacker, victim, damageValue, damageType) {
		Game.message("huyaay");
	},
	ownerHurt(item, attacker, victim, damageValue, damageType) {
		Game.message("heraaaaaarr");
	},
	destroyBlock(item, region, coods, block, player){
		Game.message("herrdsfrr");
	}
}, 5);
