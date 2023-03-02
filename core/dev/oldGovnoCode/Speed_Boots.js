IMPORT("HelperMod");
Item.createArmorItem("Speed_boots", "скороходы", {name: "Helm_wte", meta: 0}, {	isTech: false,
	armor: 5,
	type: "boots",
	texture: "armor/Helm_1.png",
	durability: 3000
});
ARMOR.setMode({
	id: ItemID.Speed_boots,
	type: [3],
	tick: function(){
	   Entity.addEffect(Player.get(), 1, 2, 80, false,false);
}
});
//Сьеби От Сюда ПИДОРАС, блок на блок на блок, сьеби от сбда ты, тебе не нужен иой кож, ты от сюда сьебёш, или я тебя найду под бедроком или в краю