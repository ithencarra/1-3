input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Ghost)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . # . #
        . # # # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . # . # .
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        `)
})
basic.forever(function () {
	
})
