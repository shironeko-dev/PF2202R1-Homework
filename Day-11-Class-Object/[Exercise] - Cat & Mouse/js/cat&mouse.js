class Mouse extends Animal {
    squeak() {
        if (this.isAlive()) {
            alert(this.name + ": Chit Chit!");
        } else {
            alert(this.name + " is dead so he can not squeak!");
        }
    }
}
class Cat extends Animal {
    meow() {
        if (this.isAlive()) {
            alert(this.name + ": Meow Meow!");
        } else {
            alert(this.name + "  is dead so he can not meow");
        }

    }

    catchMouse(mouse) {
        alert(this.name + " try to catch " + mouse.name + "!");
        if (this.getSpeed() >= mouse.getSpeed()) {
            alert(this.name + " catched " + mouse.name) + "!";
            this.eatMouse(mouse);
        } else {
            alert(this.name + " can not catch " + mouse.name + "!");
        }
    }

    eatMouse(mouse) {
        if (mouse.isAlive()) {
            alert("BEFORE: " + this.name + "'s weight is " + this.weight)
            alert(this.name + " ate " + mouse.name + "!");
            this.weight += mouse.getWeight();
            alert("AFTER: " + this.name + "'s weight is " + this.weight)
        } else {
            alert(mouse.name + " is dead so " + this.name + " can not eat him!");
        }
    }
}

var mouse1 = new Mouse("Jerry One", 10, 10, true);
var mouse2 = new Mouse("Jerry Two", 10, 20, true);
var mouse3 = new Mouse("Jerry Three", 10, 10, false);
var cat = new Cat("Pussy Cat", 20, 15, true);

alert("Start!");
mouse1.squeak();
mouse2.squeak();
mouse3.squeak();
cat.meow();
cat.catchMouse(mouse1);
cat.catchMouse(mouse2);
cat.catchMouse(mouse3);
alert("Done!");