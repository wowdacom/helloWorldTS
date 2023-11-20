var message = "Hello World";
message = "Hello World Again!!!";
console.log(message);
var helloBreakPoint = function () {
    return "Hello Breakpoint";
};
message = helloBreakPoint();
console.log(message);
var key = 1;
var testObj = {
    name: "Test",
    1: true,
};
testObj["".concat(key)] = "Test 2";
console.log(testObj);
//# sourceMappingURL=hellowworld.js.map