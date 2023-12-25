// string "", '', ``
const a = "Hello";
const b = 'Iran';
const text = `------- ${a} * ${b} -------`;
console.log(text);

// number
// 1-10 -10
const n = 12;
const n1 = 1.7;
console.log(n + n1)

// boolean
// true / false
const isItText = false;

function divided(a: any, b: any, isItText: boolean) {
  if(isItText) {
    return `I can't divide text, the is it Text is ${isItText}`;
  }
  return a / b;
}

const dividedValue = divided(52,2,true);
console.log(dividedValue)
