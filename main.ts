let resetNumber = 0
input.onButtonPressed(Button.A, function () {
    resetNumber += 1
    basic.showNumber(resetNumber)
})
input.onButtonPressed(Button.AB, function () {
    resetNumber = 0
    basic.showNumber(resetNumber)
})
input.onButtonPressed(Button.B, function () {
    resetNumber += -1
    basic.showNumber(resetNumber)
})
