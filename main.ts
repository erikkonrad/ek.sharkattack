namespace SpriteKind {
    export const Hintergrund = SpriteKind.create()
    export const lebewesen = SpriteKind.create()
    export const Fisch = SpriteKind.create()
    export const Geld = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    kugel = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 f 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    music.pewPew.play()
    kugel.setPosition(erik.x, erik.y)
    animation.runMovementAnimation(
    kugel,
    animation.animationPresets(animation.easeRight),
    2000,
    false
    )
})
info.onCountdownEnd(function () {
    game.over(false, effects.clouds)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    erik.destroy(effects.fountain, 2000)
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 2000)
    ziele.pop()
    erik.sayText("Yippiiee", 1000, false)
    if (ziele.length == 0) {
        pause(2000)
        game.over(true, effects.confetti)
    }
})
let kugel: Sprite = null
let ziele: Sprite[] = []
let erik: Sprite = null
scene.setBackgroundColor(9)
erik = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....ffff............
    ..fffeeffffff.......
    ..fee9ee9eeeeff.....
    ..feeeeeeeeeeff.....
    ..fe2eeeee2eef......
    ..ffe22222eeff......
    ...ffffffeeff.......
    .....f.fffff........
    ....f.f.f..f........
    ....f.f.f..f........
    ...f.f..f...ff......
    ...f..f..f...f......
    ..f..f....f....f....
    ....................
    `, SpriteKind.Player)
let baum1 = sprites.create(img`
    .....6feeeeeeeeeef6.....................
    ....6776eeeeeeeee676....................
    ...6777666eeee6667776...................
    ..6776ee67777777667776..................
    ...668ee7768867788666...................
    ......ee77eeee67eeee....................
    ......ee6eeeeee6cef.....................
    ......eeeeeeeeeeeef.....................
    ......eeeeeeeeeeeef.....................
    ......eeeeeeeeeeecf.....................
    ......eeeeeeeeeeecf.....................
    ......eeeeeeeeeeeff.....................
    ......feeeeeeeeeefe.....................
    .....6feeeeeeeeeef6.....................
    ....6776eeeeeeeee676....................
    ...6777666eeee6667776...................
    ..6776ee67777777667776..................
    ...668ee7768867788666...................
    ......ee77eeee67ee......................
    ......ee6eeeeee6ce......1...1...........
    ......eefeeeeeeece......1.1.1...........
    ......eeceeeeeeece......1.1.1...........
    ......eeceeeeeeefe......1.1.1...........
    ......eeceeeeeeefe......1.1.1...........
    ......eeeeeeeeeefe......................
    ......eeeeeeeeeece........ee............
    .....6eeeeeeeeeece6......eeee...........
    ....6776eeeeeeeee676....eeeeee..........
    ...6776666eeee6766776...eeeeee..........
    ..6776ee77777777667776..eeeeee..........
    ...668ce7768867788666....eeee...........
    ......ce77eeee67ee........ee............
    ......eeeeeeeeeeee......................
    ......eeeeeeeeeeee......................
    ......eeeeeeeeeeee......................
    ......eeeeeeeeeeee.......77777..........
    ......eeeeeeeeeeee.....772772777........
    ......eeeeeeeeeeee.....777777727........
    ......eeeeeeeeeeee.....727727777........
    ......beeeeeeeeeeb...7777777772777......
    .......beeeeeeeeb...772772772777277.....
    ........beeeeeeb....777777777777777.....
    5555555555555555555555555555555555555555
    5555555555555555555555555555555555555555
    5555555555555555555555555555555555555555
    .55555555555555555555555555555555555555.
    ..555555555555555555555555555555555555..
    ........................................
    `, SpriteKind.Enemy)
let hai = sprites.create(img`
    .................ccfff..............
    ................cddbbf..............
    ...............cddbbf...............
    ..............fccbbcf............ccc
    ........ffffffccccccff.........ccbbc
    ......ffbbbbbbbbbbbbbcfff.....cdbbc.
    ....ffbbbbbbbbbcbcbbbbcccff..cddbbf.
    ....fbcbbbbbffbbcbcbbbcccccfffdbbf..
    ....fbbb1111ff1bcbcbbbcccccccbbbcf..
    .....fb11111111bbbbbbcccccccccbccf..
    ......fccc33cc11bbbbccccccccfffbbcf.
    .......fc131c111bbbcccccbdbc...fbbf.
    ........f33c111cbbbfdddddcc.....fbbf
    .........ff1111fbdbbfddcc........fff
    ...........cccccfbdbbfc.............
    .................fffff..............
    `, SpriteKind.Enemy)
let nemo = sprites.create(img`
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . c c 
    . . . c 4 d 4 4 4 4 4 1 c c 4 c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
    . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
    f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
    . f 4 4 4 4 1 c c 4 4 d f f . . 
    . . f f 4 d 4 4 4 4 4 c f . . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let geheim = sprites.create(img`
    .............ccfff..............
    ...........ccddbcf..............
    ..........ccddbbf...............
    ..........fccbbcf...............
    .....fffffccccccff.........ccc..
    ...ffbbbbbbbcbbbbcfff....ccbbc..
    ..fbbbbbbbbcbcbbbbcccff.cdbbc...
    ffbbbbbbffbbcbcbbbcccccfcdbbf...
    fbcbbb11ff1bcbbbbbcccccffbbf....
    fbbb11111111bbbbbcccccccbbcf....
    .fb11133cc11bbbbcccccccccccf....
    ..fccc31c111bbbcccccbdbffbbcf...
    ...fc13c111cbbbfcddddcc..fbbf...
    ....fccc111fbdbbccdcc.....fbbf..
    ........ccccfcdbbcc........fff..
    .............fffff..............
    `, SpriteKind.Enemy)
let pflanzen = sprites.create(img`
    ....................
    ....................
    .........1..........
    ......661d1.........
    .....177717766......
    ....1d177777677.....
    ..6.717777c77177....
    ...7c77767771d17....
    ...77677766771777...
    ..1777766677777767..
    .1d1776717676777c7..
    .7177661d176777777..
    .77767771777777176..
    .677c77777c7671d17..
    .77777777777767176..
    .667776776777777767.
    ...76776766676766...
    ....................
    ....................
    ....................
    `, SpriteKind.Hintergrund)
ziele.push(baum1)
ziele.push(hai)
ziele.push(nemo)
ziele.push(geheim)
erik.setStayInScreen(true)
baum1.setPosition(138, 16)
hai.setPosition(144, 56)
nemo.setPosition(34, 18)
geheim.setPosition(40, 119)
pflanzen.setPosition(46, 110)
pflanzen.changeScale(2, ScaleAnchor.Middle)
erik.setPosition(10, 8)
pause(1000)
animation.runMovementAnimation(
hai,
animation.animationPresets(animation.flyToCenter),
2000,
true
)
animation.runMovementAnimation(
nemo,
animation.animationPresets(animation.bobbingLeft),
2000,
true
)
controller.moveSprite(erik)
info.startCountdown(15)
pause(5000)
animation.runMovementAnimation(
geheim,
animation.animationPresets(animation.easeUp),
2000,
true
)
