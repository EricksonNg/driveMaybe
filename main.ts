radio.onReceivedString(function (receivedString) {
    if (receivedString == "R") {
        crickit.motor1.run(100)
        basic.showIcon(IconNames.Sad)
        crickit.setPixelColor(0xff0000)
    }
    if (receivedString == "L") {
        crickit.motor2.run(75)
        basic.showIcon(IconNames.Angry)
        crickit.setPixelColor(0x00ffff)
    }
    if (receivedString == "LS") {
        crickit.motor2.stop()
        basic.showIcon(IconNames.Asleep)
        crickit.setPixelColor(0xff8000)
    }
    if (receivedString == "RS") {
        crickit.motor1.stop()
        basic.showIcon(IconNames.House)
        crickit.setPixelColor(0x65471f)
    }
    if (receivedString == "RL" || receivedString == "LR") {
        crickit.tank(75, 100)
        basic.showIcon(IconNames.Meh)
        crickit.setPixelColor(0x007fff)
    }
})
radio.setGroup(158)
basic.forever(function () {
	
})
