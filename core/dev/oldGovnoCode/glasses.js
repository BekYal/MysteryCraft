IMPORT("HelperMod");
Item.createArmorItem("glases", "совиные очки", {name: "glases", meta: 0}, {	isTech: false,
	armor: 4,
	type: "helmet",
	texture: "armor/wuuw_61.png",
	durability: 3000
});
ARMOR.setMode({
	id: ItemID.glases,
	type: [0],
	tick: function(){
	   Entity.addEffect(Player.get(), 16, 255, 80, false,false);
}
});

//Сьеби От Сюда ПИДОРАС, блок на блок на блок, сьеби от сбда ты, тебе не нужен иой кож, ты от сюда сьебёш, или я тебя найду под бедроком или в край