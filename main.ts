input.onButtonPressed(Button.A, function () {
    if (AktuálisFényerő > 1) {
        AktuálisFényerő = AktuálisFényerő - 1
        led.setBrightness(AktuálisFényerő)
    } else {
        AktuálisFényerő = 255
        led.setBrightness(AktuálisFényerő)
    }
})
input.onButtonPressed(Button.B, function () {
    if (AktuálisFényerő < 255) {
        AktuálisFényerő = AktuálisFényerő + 1
        led.setBrightness(AktuálisFényerő)
    } else {
        AktuálisFényerő = 1
        led.setBrightness(AktuálisFényerő)
    }
})
let AktuálisFényerő = 0
basic.showLeds(`
    # . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . #
    `)
AktuálisFényerő = 1
led.setBrightness(AktuálisFényerő)
basic.forever(function () {
	
})
