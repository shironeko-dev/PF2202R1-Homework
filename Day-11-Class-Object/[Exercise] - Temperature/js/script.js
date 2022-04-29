class Temperature {
    constructor(degree) {
        this.degree = degree;
        if (degree < -273) {
            this.degree = -273;
        }
    }
    setDegree(newDegree) {
        this.degree = degree;
    }
    changeF() {
        return (this.degree * 1.8) + 32;
    }
    changeK() {
        return this.degree + 273.15;
    }
}
var temperature = new Temperature(25);
console.log(temperature);
var degreeF = new temperature.changeF();
console.log('C to F: ' + degreeF);
var degreeK = new temperature.changeK();
console.log('C to K: ' + degreeK);
