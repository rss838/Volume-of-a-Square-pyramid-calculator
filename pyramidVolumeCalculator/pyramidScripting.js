"use strict";
let baseLength = prompt("Base length of square pyramid", "number");
let baseArea = (baseLength*baseLength);
let Height = prompt("Height of pyramid", "number");
let Calculation = (Height*baseArea);
let Volume2 = (Calculation*0.33);
alert("The volume of this square pyramid is roughly:  " + Volume2 + " units");

