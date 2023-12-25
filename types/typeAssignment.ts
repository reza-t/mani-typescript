
// typeOf

function calculateMyAge(birthday: any, currentYear: any) {
  if(typeof birthday === 'number' && typeof currentYear === 'number') {
    return currentYear - birthday;
  }
  throw new Error('The calculation need number')
}

const myAge = calculateMyAge(1986, 2030);
console.log(myAge);


const countryName = "Iran"
console.log(typeof countryName);
const isGoodWeather = false;
console.log(typeof isGoodWeather);
const myWeight = 70;
console.log(typeof myWeight);
