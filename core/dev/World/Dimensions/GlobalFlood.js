
IDRegistry.genItemID("huuuy")
Item.createItem("huuuy", "huuuy", {name: "boat", meta: 0}, {isTech: false, stack: 1});

var click = 0;
Saver.addSavesScope("click", 
    function read(scope){
        click = scope? scope.click: 0;
    },
    
    function save(){
        return {"click": click};
    }
);
/*Callback.addCallback("ItemUseFunction", function(coords, item, block, isExternal, player){
    
});

Callback.addCallback('ItemUsingComplete', function (item) {
if (item.id == ItemID.huuuy) {
        Dimensions.transfer(player, GlobalFlood.id);
    }
});*/

Callback.addCallback('ItemUseNoTarget', function (item, player) {
if (item.id == ItemID.huuuy && click == 0) {
        Dimensions.transfer(player, GlobalFlood.id);
        click = 1;
    } else if (click == 1){
        Dimensions.transfer(player, 0);
        click = 0;
    }

});

var GlobalFlood = new Dimensions.CustomDimension("GlobalFlood", 5483);
GlobalFlood.setGenerator(Dimensions.newGenerator(
{

    biome: 0,

    layers: [
    //MAIN NOICE
    {
        minY: 0,
        maxY: 75,
         yConversion: [[1, 0.65]
        ],
        material: {
            base: 8,
            surface: {
                id: 12,
                data: 0,
                width: 3
            },
            cover: 8
        },
        noise: {
            octaves: {
              count: 4,
              scale: 10,
              weight: 0.918
               }
        },
    }]
}
/*
{

    biome: 0,

    layers: [
    //MAIN NOICE
    {
        minY: 0,
        maxY: 75,
         yConversion: [[1, 0.65]
        ],
        material: {
            base: 8,
            surface: {
                id: 8,
                data: 0,
                width: 3
            },
            cover: 8
        },
        noise: {
            octaves: {
              count: 4,
              scale: 10,
              weight: 0.918
               }
        },surface: {

                id: 12,

                data: 0,
                width: 10
            },
    }]
}
*/
/*{
    biome: 0,
    layers: [
        {
        minY: 0,
        maxY: 65,
        yConversion: [[0.20, -0.99], [0.8, -0.89], [0.9, -0.99], [0.4, -0.4], [0, 0.8]],
        material: {
            base: 8,
            surface: {
                id: 8,
                data: 0,
                width: 1
            },
            cover: 8
        },
        noise: {
            octaves: {
                count: 0,
                scale: 10,
                weight: 0.6
            }
        }},
        {
        minY: 0,
        maxY: 1,
        
        material: {
            base: 12
        }
    }]
}*/));
Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
  if (damageType == 5) {
Entity.getPathNavigation(victim).setSpeed(20);
      
  }
});
/*Callback.addCallback('FoodEaten', function (food, satRatio, player) {
if (food.id==ItemID.idunnAppl) {
    Dimensions.transfer(player, GlobalFlood.id);
}
}); */