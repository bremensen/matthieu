input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
})
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    0
    )
})
basic.forever(function () {
    basic.showString("Hello!")
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . . . .
        `)
})
basic.forever(function () {
    basic.showIcon(IconNames.SmallHeart)
})
