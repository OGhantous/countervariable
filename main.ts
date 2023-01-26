let resetNumber = 0

input.onButtonPressed(Button.A, function () {
    resetNumber += 1
})
input.onButtonPressed(Button.AB, function () {
    resetNumber = 0
})
input.onButtonPressed(Button.B, function () {
    resetNumber += -1
})
basic.forever(function () {
    basic.showNumber(resetNumber)
})
