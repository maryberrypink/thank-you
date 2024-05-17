controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSong(hex`0078000408020102001c000c960064006d019001000478002c010000640032000000000a0600054e0000000400011b04000800011908000c00011b0c001000011d10001400011b14001800011d18001c00011e1c002000011d20002400011e24002800012028002c0001202c0030000120300034000120`), music.PlaybackMode.InBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.showLongText(" get better to:you", DialogLayout.Bottom)
    game.gameOver(true)
})
tiles.setCurrentTilemap(tilemap`level2`)
let mySprite = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 3 f . . . . 
    . . . f 1 3 3 3 3 3 1 3 f . . . 
    . . . f 3 3 f f f f 3 1 f . . . 
    . . . f 3 f f d d f f 3 f . . . 
    . . f 3 f d f d d f d f 3 f . . 
    . . f 3 f d e d d e d f 3 f . . 
    . . f 3 3 f d d d d f 3 3 f . . 
    . f 3 3 f 3 f f f f 3 f 3 3 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f d f f f f d f f . . . 
    . . . . f d f . . f d f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setPosition(16, 120)
scene.cameraFollowSprite(mySprite)
