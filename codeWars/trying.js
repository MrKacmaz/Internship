// function filter_list(l) {
//     const ret = l.filter(x => typeof x === 'number');
//     return ret;
// }

// filter_list([1, 2, 3, "asd", 'sadf']);



// function oddOrEven(array) {
//     if (array.length != 0) {
//         var sum = array.reduce((s, i) => s + i);
//         var ret;
//         (sum % 2 == 0) ? ret = "even" : ret = "odd";
//         return ret;
//     }
//     else {
//         return 'even'
//     }
// }
// console.log(oddOrEven([1, 2, 3, 4, 5, 6, 7]));

// function cakes(recipe, available) {
//     return parseInt(Object.entries(recipe).map((_e, i, a) => Object.entries(available).some((_x, y, z) => z[y][0] === a[i][0])
//         ? Object.entries(available).find((_x, y, z) => z[y][0] === a[i][0])[1] / a[i][1]
//         : 0).sort().slice(0, 1));
// }

// r = { flour: 500, sugar: 200, eggs: 1 };
// a = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
// console.log(cakes(r, a));


// function componentToHex(c) {

//     var hex = c.toString(16);
//     return hex.length == 1 ? "0" + hex.toLocaleUpperCase() : hex.toLocaleUpperCase();

// }
// function rgb(r, g, b) {
//     if (r > 255) { r = 255; }
//     if (g > 255) { g = 255; }
//     if (b > 255) { b = 255; }
//     if (r < 0) { r = 0; }
//     if (g < 0) { g = 0; }
//     if (b < 0) { b = 0; }
//     return componentToHex(r) + componentToHex(g) + componentToHex(b);
// }
// console.log(rgbToHex(13, 183, 271));


