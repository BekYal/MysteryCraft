IMPORT('EnchantsHelper');
var
	EntityFeatures = {},
	ImprovedItems = {},
	MysteryAPI = {},
	Color = android.graphics.Color,
	PotionEffect = Native.PotionEffect,
	ParticleType = Native.ParticleType,
	BlockSide = Native.BlockSide,
	EntityType = Native.EntityType;




IDRegistry.genItemID('ruby');
IDRegistry.genItemID('Empty_belt');

	Item.createItem("ruby", "ruby",
		{ name: "Ruby_modificator" }, { stack: 1 });
		
	Item.createItem("Empty_belt", "Empty_belt", 
		{ name: "Empty_belt" }, { stack: 1 });