IMPORT("HelperMod");
Item.createArmorItem("jumbboots", "ботинки прыгуна", {name: "gghh", meta: 0}, {	isTech: false,
	armor: 4,
	type: "boots",
	texture: "armor/poyaqa_1.png",
	durability: 4000
});
ARMOR.setMode({
	id: ItemID.jumbboots,
	type: [3],
	tick: function(){
	   Entity.addEffect(Player.get(), 8, 1, 80, false,false);
}
});
//Сьеби От Сюда ПИДОРАС, блок на блок на блок, сьеби от сбда ты, тебе не нужен иой кож, ты от сюда сьебёш, или я тебя найду под бедроком или в краю