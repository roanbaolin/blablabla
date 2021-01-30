
// ##1
// class Polygon {
//     constructor(height, width) {
//       this.name = 'Polygon';
//       this.height = height;
//       this.width = width;
//     };

//     getHelloPhrase() {
//       return `Hi, this is a ${this.name}`;
//     };

//     Area(){
//         let s = this.width*this.height;
//         return s
//     };

//     Perimeter(){
//         let v = 2*(this.width+this.height);
//         return v
//     };
// };

// class Square extends Polygon {
//     constructor(height, width){
//         super(height, width);
//     };


// };

// class Rectangle extends Polygon {
//     constructor(height, width){
//         super(height, width);
//     };

// };

// a = new Polygon(12, 12);
// b = new Polygon(21, 21);
// console.log(a.Area());
// console.log(a.Perimeter())



// ##2
// const word = 'apple';
// function splitChar(){
//     let splitList = [];
//     for(let i = 0; i < word.length; i++){
//         splitList.push(word[i]);
//     };
//     return splitList
// }
// var characters = splitChar();
// console.log(characters);



// ##3
// let word = 'apply';
// function upperCaseFirstLetter(){
//     word = word.replace(word[0], word[0].toUpperCase())
// };
// upperCaseFirstLetter();
// console.log(word);



// ##4
// const text = "Hello, world! My name is Kai!"
// function check(textToCheck, wordNeedToFind) {
//     let status = null;
//     textToCheck = textToCheck.toLowerCase();
//     checking = textToCheck.search(wordNeedToFind);
//     if (checking == -1) {
//         status = false;
//         return status
//     } else {
//         status = true;
//         return status
//     }
// };
// console.log(check(text, 'kai'));



// ##5
// const a = {}

// function isEmptyObject(obj){
//     return JSON.stringify(obj) === '{}';
// }
// function isEmpty(obj) {
//     for(var key in obj) {
//         if(obj.hasOwnProperty(key))
//             return false;
//     }
//     return true;
// }
// console.log(isEmptyObject(a))
// console.log(isEmpty(a))