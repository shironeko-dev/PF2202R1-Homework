class SwichButton {
    constructor() {
        this.status = "OFF";
    }

    connectToLamp(lamp) {
        this.lamp = lamp;
    }

    switchOn() {
        this.lamp.turnOn();
    }

    switchOff() {
        this.lamp.turnOff();
    }

}

class ElectricLamp {
    constructor() {
        this.status = "OFF";
    }

    turnOn() {
        this.status = "ON";
        alert("Lamb is " + this.status);
    }

    turnOff() {
        this.status = "OFF";
        alert("Lamb is " + this.status);
    }
}

var switchButton = new SwichButton();
var electricLamp = new ElectricLamp();

switchButton.connectToLamp(electricLamp);

for (var i = 0; i < 10; i++) {
    alert(i + 1);
    switchButton.switchOn();
    switchButton.switchOff();
}