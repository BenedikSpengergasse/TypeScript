"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = greet;
exports.add = add;
function greet(name) {
    console.log(`Hello, ${name}!`);
}
function add(a, b) {
    if (a < 0 && b < 0) {
        console.log("Parameters can't be negative");
    }
    return a + b;
}
