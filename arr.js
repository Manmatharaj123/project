function myMap(arr, callback) {
    const newArr = [];
    arr.forEach(element => {
        newArr.push(callback(element))
    });
    return newArr;
}

console.log(myMap([1, 2, 3, 4, 5], function (a) {
    return a * a;
}));

const myArr = [1, 'ertert', {
    fname: "Asai",
    lname: "Perumal",
    fullName: function () {
        console.log(this.fname + ' ' + this.lname);
    }
}]

myArr[2].fullName();