//範例一
let message: string = "Hello World";
message = "Hello World Again!!!";
console.log(message);

//範例二 是否回傳值 1. type script type void 2. assign type async
const helloBreakPoint = (): string => {
    //return 123;
    return "Hello Breakpoint";
}
message = helloBreakPoint();
console.log(message);

//範例三 what the type is? object key? template show?
const key: Number = 1;

const testObj: object = {
    name: "Test",
    1: true,
}

testObj[`${key}`] = "Test 2";
console.log(testObj);