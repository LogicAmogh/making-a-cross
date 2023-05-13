let X = 0
let Y = 0
input.onButtonPressed(Button.A, function () {
    position()
    crawls(1, -1)
    position()
    crawls(1, 1)
    position()
    crawls(-1, 1)
    position()
    crawls(-1, -1)
})
function position () {
    X = 2
    Y = 2
    led.plot(X, Y)
}
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
function crawls (x_change: number, _y_change: number) {
    for (let index = 0; index < 2; index++) {
        X += x_change
        Y += _y_change
        led.plot(X, Y)
        basic.pause(100)
    }
}
