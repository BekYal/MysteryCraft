var scills;




var ScillsCo = new UI.Container();


var scillHud = new UI.Window({
	location: {
		x: 200,//__config__.getNumber("x"),
		y: 100,// __config__.getNumber("y"),
		width: 34,
		height: 18
	},
	drawing: [{
		type: "background", color: android.graphics.Color.TRANSPARENT
	}],
	elements: {
		"buttonScills": {type: "button", x: 300, y: 130, bitmap: "diamond", bitmap2: "stick", scale: 1, clicker: function (argument) { 
		    
		}}

	}
});

//WeightHUD.setAsGameOverlay(true);
//WeightHUD.setTouchable();
