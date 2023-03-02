IMPORT("HelperMod");
Item.createArmorItem("wings", "крылья", {name: "Helm_wtee", meta: 0}, {	isTech: false,
	armor: 5,
	type: "chestplate",
	texture: "armor/Helm_1.png",
	durability: 3000
});
ARMOR.setMode({
	id: ItemID.wings,
	type: [1],
	tick: function(){
	   Player.setFlyingEnabled(true)
}
});
//Сьеби От Сюда ПИДОРАС, блок на блок на блок, сьеби от сбда ты, тебе не нужен иой кож, ты от сюда сьебёш, или я тебя найду под бедроком или в краю