// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100014000e030303030321181b2103030303030c0f01010101010101010101010101010a1001010101010101010101010101011c0f01010101010101010101010101010a1e1d0101080702022002071d0101080b0e1201010d211f030303211201010d0c0f01010101010101010101010101010a0f01010101081d0101081d010101010a0f010101010a0f0101090f010101010a10010101011c1001011c10010101011c0f010101080b1e17170b1e1d0101010a0f010101090e03181b030c0f0101010a0f0101010a0f131414140a0f0101010a0f0101010a10141415191c0f0101010a1e0207020b11141913140a1e0207020b030303030c0f15141415090e03030303040406040d12161a161a0d1206060504040404050604040506040404040404040405040606040404040504040404060404060404040404050404040406040605`, img`
2222222..2222222
2..............2
2..............2
2..............2
22..22222222..22
22..22222222..22
2..............2
2....22..22....2
2....22..22....2
2....22..22....2
2...222..222...2
2...222..222...2
2...22....22...2
2...22....22...2
222222....222222
222222....222222
....22....22....
................
................
................
`, [myTiles.transparency16,sprites.dungeon.floorDark2,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterNorth0,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.floorLight1,sprites.dungeon.floorLight0,sprites.dungeon.floorLightMoss,myTiles.tile3,myTiles.tile4,myTiles.tile5,sprites.dungeon.floorLight3,myTiles.tile6,myTiles.tile7,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterNorth2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "tile3":return tile3;
            case "tile4":return tile4;
            case "tile5":return tile5;
            case "tile6":return tile6;
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
