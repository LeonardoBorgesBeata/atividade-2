input.onButtonPressed(Button.A, function () {
    _1 += 1
    basic.showNumber(_1)
    if (_1 == 4) {
        basic.showIcon(IconNames.No)
        _1 = 1
        basic.showNumber(_1)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (_1 == 1) {
        basic.showIcon(IconNames.SmallSquare)
    }
    if (_1 == 2) {
        basic.showIcon(IconNames.Square)
    }
    if (_1 == 3) {
        basic.showIcon(IconNames.Scissors)
    }
})
let _1 = 0
_1 = 0
basic.forever(function () {
	
})
