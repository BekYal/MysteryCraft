IMPORT("HelperMod");
Item.createArmorItem("glases_and_helmet", "совьиные очки надетые на шлем дайвера", {name: "glases", meta: 0}, {	isTech: false,
	armor: 9,
	type: "helmet",
	texture: "armor/wuuw_61.png",
	durability: 3000
});

ARMOR.setMode({
	id: ItemID.glases_and_helmet,
	type: [0],
	tick: function(){
	   Entity.addEffect(Player.get(), 16, 255, 80, false,false);
	   Entity.addEffect(Player.get(), 13, 255, 80, false, false);
}
});

Item.setGlint(ItemID.glases_and_helmet, true);

//Сьеби От Сюда ПИДОРАС, блок на блок на блок, сьеби от сбда ты, тебе не нужен иой кож, ты от сюда сьебёш, или я тебя найду под бедроком или в краю