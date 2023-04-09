/*
BUILD INFO:
  dir: core/dev
  target: core/main.js
  files: 3
*/



// file: Header/MysteryAPI.js

const ImprovedItems = {}, MysteryAPI = {}, InvTool = {}, Textures = {};

var __dir_items__ = __dir__ + "core/assets/items-opaque/";
var __dir_blocks__ = __dir__ + "core/assets/terrain-atlas/";

Item.createItem("ruby", "ruby",{name: "Ruby_modificator"}, {stack: 1});
Item.createItem("Empty_belt", "Empty_belt", {name: "Empty_belt"}, {stack: 1});

Textures.createItemTexture = function (textures){
	let texture1 = FileTools.ReadImage(__dir_items__ + textures.firs + ".png");
	let texture2 = FileTools.ReadImage(__dir_items__ + textures.second + ".png");
	let emptyBmp = android.graphics.Bitmap.createBitmap(16, 16, android.graphics.Bitmap.Config.ARGB_8888);
	let cvs1 = new android.graphics.Canvas(emptyBmp);
		cvs1.drawBitmap(texture1, 0, 0, new android.graphics.Paint(android.graphics.Paint.ANTI_ALIAS_FLAG));  
		cvs1.drawBitmap(texture2, 0, 0, new android.graphics.Paint(android.graphics.Paint.ANTI_ALIAS_FLAG));
	FileTools.WriteImage(__dir_items__ + textures.last  + ".png", emptyBmp);
};




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

/*let clck = 0;
Saver.addSavesScope("clck", 
	function read(scope){
		clck = scope? scope.clck: 0;
	},
	function save(){
		return {"clck": clck};
	}
);

Item.createItem("debug_item_myster", "debug item",
	{data: 0, name: "stick"},
	{ stack: 1});
	Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){
		if(item.id == ItemID.debug_item_myster){
			if(cl == 0){
				Game.message(coords + "")
				cl++;
			}
			if(cl == 1){
				cl++;
			}
			if(cl == 2){
				cl++;
			}
			if(cl == 3){
				cl--;
			}
		}
	});*/




