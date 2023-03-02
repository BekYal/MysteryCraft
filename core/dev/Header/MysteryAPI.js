const ImprovedItems = {}, MysteryAPI = {}, InvTool = {};
var __dir_items__ = __dir__ + "assets/items-opaque/";
var __dir_blocks__ = __dir__ + "assets/terrain-atlas/";

Item.createItem("ruby", "ruby",{name: "Ruby_modificator"}, {stack: 1});
Item.createItem("Empty_belt", "Empty_belt", {name: "Empty_belt"}, {stack: 1});

InvTool.getSlotItem = function(item, data){
		for(let y = 0; y <= 40; y++){
	let actor = new PlayerActor(Player.get());
	let item = actor.getInventorySlot(y);
	if ( item.id == item && item.data == data)
		return y;
	}
}






ImprovedItems.createBelt = function( texture, modificator, funcs ) {
	Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){
		let huy = new PlayerActor(player);
		
		let i = 0;
	do {
		let huy2 = huy.getInventorySlot(i);
	if (item.id == ItemID.Empty_belt && huy2.id == modificator)  {
		item.extra.putBoolean(texture.last, true);
		huy.setInventorySlot(i, huy2.id, huy2.count--, huy2.data, huy2.extra);
	  funcs.use(coords, block, player, item);
	}
	Item.registerIconOverrideFunction("Empty_belt", function(item, isModUI){
		if (item.id == ItemID.Empty_belt && item.extra && item.extra.getBoolean(texture.last)) {
			name = texture.last
		}
	})
		i++;
	  } while (i >= 9);
});

	Callback.addCallback("ServerPlayerTick", function (player) {
		let item = InvTool.getSlotItem(ItemID.Empty_belt, 0);
		if(item.id == ItemID.Empty_belt && item.extra && item.extra.getBoolean(texture.last))
		funcs.tick(player, item);
	});
	let texture1 = FileTools.ReadImage(__dir_items__ + "Empty_belt.png");
	let texture2 = FileTools.ReadImage(__dir_items__ + texture.modificator);
	let emptyBmp = android.graphics.Bitmap.createBitmap(16, 16, android.graphics.Bitmap.Config.ARGB_8888);
	let cvs1 = new android.graphics.Canvas(emptyBmp);
		cvs1.drawBitmap(texture1, 0, 0, null);  
		cvs1.drawBitmap(texture2, 0, 0, null);
	FileTools.WriteImage(__dir__ + "assets/items-opaque/" + texture.last, emptyBmp);
	
}

ImprovedItems.createBelt( { last: "ruby_belt", modificator: "Ruby_modificator" }, ItemID.Ruby_modificator, {
	use: function(coords, block, player, item){
		
	},
	tick: function(player, item){
		Entity.addEffect(player, 1, 10, 10, false, false);
	}
})
var Textures = {
	create: function(path, path2, resultPath){
let texture1 = FileTools.ReadImage(path);
  let texture2 = FileTools.ReadImage(path2);
let emptyBmp = android.graphics.Bitmap.createBitmap(16, 16, android.graphics.Bitmap.Config.ARGB_8888);
  let cvs1 = new android.graphics.Canvas(emptyBmp);
cvs1.drawBitmap(texture1, 0, 0, null);  cvs1.drawBitmap(texture2, 0, 0, null);
FileTools.WriteImage(resultPath, emptyBmp);
}
};

