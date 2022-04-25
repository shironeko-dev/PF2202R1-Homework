class MyDate {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    getDay() {
        return this.day;
    }
    getMonth() {
        return this.month;
    }
    getYear() {
        return this.year;
    }
    setDate(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    toString() {
        var str = "";
        str = str + this.day + '/' + this.month + '/' + this.year;
        return str;
    }
};

var date = new MyDate();
date.setDate(28, 20, 1997);
var day = date.getDay();
var month = date.getMonth();
var year = date.getYear();
alert(date.toString());
date.setDate(10, 10, 2020);
alert(date.toString());


