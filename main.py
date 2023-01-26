def on_button_pressed_a():
    global decreaseNumber
    decreaseNumber += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

decreaseNumber = 0
resetNumber = 0