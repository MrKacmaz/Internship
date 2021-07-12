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


// function solution(string) {
//     var result = "";
//     var strArr = [...string];
//     for (let i = 0; i < strArr.length; i++) {
//         if (strArr[i] == strArr[i].toUpperCase()) {
//             result += " " + strArr[i];
//         } else {
//             result += strArr[i];

//         }
//     }
//     return result;
// }
// console.log(solution('camelCasing'));


// function solution(number) {
//     if (typeof number !== 'number')
//         return false;

//     var digits = String(+number).split(""),
//         key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
//             "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
//             "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
//         roman_num = "",
//         i = 3;
//     while (i--)
//         roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
//     return Array(+digits.join("") + 1).join("M") + roman_num;
// }

// console.log(solution(1000));

// function bit_counter(n) {
//     var resBits = (n >>> 0).toString(2);
//     var retVal = 0;
//     var resBitsArr = [...resBits];
//     for (let i = 0; i < resBitsArr.length; i++) {
//         if (parseInt(resBitsArr[i]) === 1) {
//             retVal += 1;
//         }
//     }
//     if(resBitsArr.length > 30){
//         return retVal+1;
//     }else{
//         return retVal
//     }
// }

// console.log(bit_counter(7739944717));

// function toWeirdCase(string) {
//     var strArr = [...string];
//     var retVal = "";
//     for (let i = 0; i < strArr.length; i++) {
//         if (strArr[i] == " ") {
//             retVal += " ";
//         } else if (i % 2 == 0) {
//             retVal += strArr[i].toUpperCase();
//         } else if (i % 2 != 0) {
//             retVal += strArr[i].toLowerCase();
//         }
//     }
//     return retVal;
// }

// console.log(toWeirdCase("This is a test"));