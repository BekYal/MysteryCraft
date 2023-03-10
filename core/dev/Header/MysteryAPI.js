const ImprovedItems = {},
		MysteryAPI = {},
		InvTool = {};

var __dir_items__ = __dir__ + "assets/items-opaque/";
var __dir_blocks__ = __dir__ + "assets/terrain-atlas/";

IDRegistry.genItemID("ruby")
IDRegistry.genItemID("ruby")

Item.createItem("ruby", "ruby", { name: "Ruby_modificator" }, { stack: 1 });
Item.createItem("Empty_belt", "Empty_belt", { name: "Empty_belt" }, { stack: 1 });


var Textures = {
	createItemTexture: function(name1, pname2, resultPath) {
		let texture1 = FileTools.ReadImage(__dir_items__ + pname1);
		let texture2 = FileTools.ReadImage(__dir_items__ + pname2);
		let emptyBmp = android.graphics.Bitmap.createBitmap(16, 16, android.graphics.Bitmap.Config.ARGB_8888);
		let cvs1 = new android.graphics.Canvas(emptyBmp);
		cvs1.drawBitmap(texture1, 0, 0, null);
		cvs1.drawBitmap(texture2, 0, 0, null);
		FileTools.WriteImage(resultPath, emptyBmp);
	}
};

