/*Callback.addCallback("ItemUse", function (coords, item, block, isExternal,  player) {

     Game.message(huy.getExtraBlock(coords.x, coords.y, coords.z));

})*/ 
/*
Callback.addCallback("LevelLoadedFunction", function (someBool1) {

Game.message("что…? где я?");
//World.playSound(coords.x, coords.y, coords.z, "use.soul_sand", 3);
});*/

Callback.addCallback("EntityHurt",function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
//  let item = Entity.getCarriedItem(attacker);
var huy = Entity.getPathNavigation(victim);
        Logger.Log(  Entity.getPathNavigation(victim) + " " + victim, "huyeta");
        Game.message(huy +  " vic " + victim);
        
     //   Game.message(damageType + " " + damageValue + " " + victim + "  " + attacker + someBool2 + someBool1        );
    }
);
