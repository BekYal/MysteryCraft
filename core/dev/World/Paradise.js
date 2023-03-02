function createBl(blockID, data, opt, texture) {
    IDRegistry.genBlockID(blockID);
    Block.createBlock(blockID, [{
        name: blockID, texture: [
            [texture.buttom, data],
            [texture.top, data],
            [texture.sides[0] || texture.buttom, data],
            [texture.sides[0] || texture.buttom, data],
            [texture.sides[0] || texture.buttom, data],
            [texture.sides[0] || texture.buttom, data],
        ], inCreative: true
    }],

        {
            base: opt.base, solid: false, renderlayer: 4, lightopacity: 15, translucency: opt.slip, sound: opt.sound
        });

}
createBl("ParadiseStone", 0, {
    base: 1,
    slip: 1,
    sound: "stone"
}, {
    buttom: "stone"
});
createBl("ParadiseDirt", 0, {
    base: 3, slip: 1, sound: "dirt"
}, {
    buttom: "dirt"
});
createBl("ParadisePort", 0, {
    
    base: 3, slip: 0, sound: "dirt"
}, {buttom: "dirt"});
IDRegistry.genBlockID("ParadiseGrass");
Block.createBlock("ParadiseGrass", [{
    name: "ParadiseGrass", texture: [
        ["dirt", 0],
        ["grass_top", 0],
        ["grass_side_carried", 0],
        ["grass_side_carried", 0],
        ["grass_side_carried", 0],
        ["grass_side_carried", 0],
    ], inCreative: true
}],

    {
        base: 2, solid: false, renderlayer: 4, lightopacity: 15, translucency: 10, sound: "grass", color_source: "grass"
    });


//биом и рай

var ParadiseBiome = new CustomBiome ("ParadiseBiome")
//.setSkyColor(android.graphics.Color.rgb(755, 345, 0))
.setSkyColor(android.graphics.Color.rgb(0, 138, 229))
.setGrassColor(0, 138, 229)
.setSeaFloorBlock(12 | 13, 0)
.setFoliageColor(87, 78, 246)
.setCoverBlock(BlockID.ParadiseGrass, 0)
.setSurfaceBlock(BlockID.ParadiseDirt, 0)
.setWaterColor(0, 138, 229)
.setFillingBlock(BlockID.ParadiseStone, 0);

//var mGen = new MonoBiomeTerrainGenerator();
var MysteryParadise = new Dimensions.CustomDimension("MysteryParadise", 2001);
MysteryParadise.setSkyColor(16, -164, -255); //(894, 345, 0);
MysteryParadise.setFogColor(16, -164, -255);
MysteryParadise.setGenerator(Dimensions.newGenerator({
    biome: ParadiseBiome.id,
    layers: [{
        minY: 0,
        maxY: 128,
        yConversion: [[1, -0.99], [0.8, -.99], [.9, -0.99], [0.4, -.4], [0, 0.8]
        ],
        material: {
            base: BlockID.ParadiseStone,
            surface: {
                id: BlockID.ParadiseDirt,
                data: 0,
                width: 4
            },
            cover: BlockID.ParadiseGrass
        },
        noise: {
            octaves: {
                count: 4,
                scale: 260,
                weight: 1.99
            }
        }
    }, {
        minY: 0,
        maxY: 1,
        material: {
            base: 7
        }
    }]
}));
Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
    if (block.id == BlockID.ParadisePort) {
        Dimensions.transfer(player, MysteryParadise.id);
    }
});
/*
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) {
    if (dimensionId != MysteryParadise.id) return;
    UniqueGen.generateOreInDimension(BlockID.desh, 0, chunkX, chunkZ, random, {
        veinCounts: 2,
        minY: 1,
        maxY: 25,
        size: randomInt(1, 3),
        mode: true,
        check: [BlockID.MysteryParadise_bottom_stone]
    });
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) {
    if (dimensionId != MysteryParadise.id) return;
    UniqueGen.generateOreInDimension(BlockID.ore_iron_MysteryParadise, 0, chunkX, chunkZ, random, {
        veinCounts: 2,
        minY: 2,
        maxY: 65,
        size: randomInt(1, 5),
        mode: true,
        check: [BlockID.MysteryParadise_bottom_stone]
    });
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) {
    if (dimensionId != MysteryParadise.id) return;
    UniqueGen.generateOreInDimension(BlockID.ore_copper_MysteryParadise, 0, chunkX, chunkZ, random, {
        veinCounts: 2,
        minY: 2,
        maxY: 65,
        size: randomInt(1, 5),
        mode: true,
        check: [BlockID.MysteryParadise_bottom_stone]
    });
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) {
    if (dimensionId != MysteryParadise.id) return;
    UniqueGen.generateOreInDimension(BlockID.ore_tin_MysteryParadise, 0, chunkX, chunkZ, random, {
        veinCounts: 2,
        minY: 2,
        maxY: 65,
        size: randomInt(1, 5),
        mode: true,
        check: [BlockID.MysteryParadise_bottom_stone]
    });
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) {
    if (dimensionId != MysteryParadise.id) return;
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
    coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
    if (coords.y < 32) return;
    for (let i = 0; i < randomInt(1, 2); i++) {
        if (World.getBlockID(coords.x, coords.y, coords.z) == BlockID.MysteryParadise_bottom_stone) {
            World.setBlock(coords.x, coords.y, coords.z, BlockID.dense_ice, 0);
        }
    }});*/