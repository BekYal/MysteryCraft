/*
BUILD INFO:
  dir: core/dev
  target: core/main.js
  files: 3
*/



// file: Header/MysteryAPI.js

const ImprovedItems = {}, MysteryAPI = {}, InvTool = {};



ImprovedItems.createTotem = function(id, data, texture, params){
	IDRegistry.genItemID(id);
	Item.createItem(id, id,
		{name: texture, data: data}, 
		{isTech: false, stack: 1});
Item.addCreativeGroup("totems", "totems", [ItemID[id]]);

	Item. Item.setAllowedInOffhand(id, true);

	Callback.addCallback("ServerPlayerTickFunction", function (player) {
	let item = Entity.getOffhandItem(player);
	if (item.id == ItemID[id] && item.data == data) {
		params.inHand(player, item);
	}
	});
};
/*
var Textures = {
	create: function(path, path2, resultPath){
let texture1 = FileTools.ReadImage(path);
  let texture2 = FileTools.ReadImage(path2);
let emptyBmp = android.graphics.Bitmap.createBitmap(16, 16, android.graphics.Bitmap.Config.ARGB_8888);
  let cvs1 = new android.graphics.Canvas(emptyBmp);
cvs1.drawBitmap(texture1, 0, 0, null);  cvs1.drawBitmap(texture2, 0, 0, null);
FileTools.WriteImage(resultPath, emptyBmp1);
}
};
Textures.create("/core/assets/items-opaque/Poes_0.png",
		"/core/assets/items-opaque/dark_crystal_orb.png",
		"/core/assets/items-opaque/huyamBalam.png");

IDRegistry.genItemID("huyamBal");
Item.createItem("huyamBal", "huyamBal", {name: "huyamBalam", meta: 0}, {isTech:
false, stack: 1});

*/




// file: Begin/Begin.js

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









// file: Debug.js





