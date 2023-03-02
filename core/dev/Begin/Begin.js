//head/голова//
var openedLevel = 0;
Saver.addSavesScope("openedLevel", 
    function read(scope){
        openedLevel = scope? scope.openedLevel: 0;
    },
    function save(){
        return {"openedLevel": openedLevel};
    }
);
// item for begin to studing this mod / предметы для начала изучения это мода //
IDRegistry.genItemID("IdunnApple");
Item.createFoodItem("IdunnApple", "Idunn apple", {name: "apple", data: 0}, {food: 10, isTech: false, stack: 1});
Translation.addTranslation("Idunn apple", {ru: "яюлоко Идунн"});
// ==============\\
Callback.addCallback("ItemUseFunction", function(coords, item, block, isExternal, player){
	let rt = BlockSource.getDefaultForActor(player);
	if (item.id == ItemID.IdunnApple) {
		
	
	rt.explode(coords.x, coords.y, coords.z, 5, true);
}})


//body / тело / и не, я не живу в хтмл, просто удобно //
/*Callback.addCallback( "EntityHurt", function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
if(Emtity.getCarriedItem(victim).id == 258){    Game.message(damageType + " " + damageValue + " " + victim + "  " + attacker + someBool2 + someBool1);
}});
*/





