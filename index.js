var originalFlavors = [
  'Banana Nut Fudge',
  'Black Walnut',
  'Burgundy Cherry',
  'Butterscotch Ribbon',
  'Cherry Macaron',
  'Chocolate',
  'Chocolate Almond',
  'Chocolate Chip',
  'Chocolate Fudge',
  'Chocolate Mint',
  'Chocolate Ribbon',
  'Coffee',
  'Coffee Candy',
  'Date Nut',
  'Eggnog',
  'French Vanilla',
  'Green Mint Stick',
  'Lemon Crisp',
  'Lemon Custard',
  'Lemon Sherbet',
  'Maple Nut',
  'Orange Sherbet',
  'Peach',
  'Peppermint Fudge Ribbon',
  'Peppermint Stick',
  'Pineapple Sherbet',
  'Raspberry Sherbet',
  'Rocky Road',
  'Strawberry',
  'Vanilla',
  'Vanilla Burnt Almond',
];

// Task 1 -----------------------------------------------------------------------------------------------------

const testArray = ['value1', 'value2', 'value3', 'value4', 'value5'];

function is31Flavors(arr) {
  if (arr.length === 31) {
    console.log('true');
    return true;
  }
  console.log('false');
  return false;
}

// Task 2 -----------------------------------------------------------------------------------------------------

function addFlavor(newFlavor, arr) {
  arr.unshift(newFlavor);
  console.log(arr);
  return arr;
}

// Task 3 -----------------------------------------------------------------------------------------------------

function removeLastFlavor(arr) {
  arr.pop();
  console.log(arr);
  return arr;
}

// Task 4 -----------------------------------------------------------------------------------------------------

function getFlavorByIndex(arr, index) {
  console.log(arr[index]);
  return arr[index];
}

// Task 5 -----------------------------------------------------------------------------------------------------

function removeFlavorByName(arr, flavor) {
  const index = arr.indexOf(flavor);
  arr.splice(index, 1);
  console.log(arr);
  return arr;
}

// Task 6 -----------------------------------------------------------------------------------------------------

function copy(currentArr, newArr) {
  newArr = newArr || [];
  newArr = [...newArr, ...currentArr];
  console.log(newArr);
  return newArr;
}

// Task 7 -----------------------------------------------------------------------------------------------------

function filterByWord(arr, flavor) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(flavor)) {
      filteredArray.push(arr[i]);
    }
  }
  console.log(filteredArray);
  return filteredArray;
}

/* 🧁🍦🍨 STRETCH 🍨🍦🍫*/

//Stretch 1 -----------------------------------------------------------------------------------------------------

function getAverageWordLength(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    counter += arr[i].split(' ').length;
  }
  counter = counter / arr.length;
  console.log(counter);
  return counter;
}

//Stretch 2 -----------------------------------------------------------------------------------------------------

// Data ⬇️
var newFlavors = [
  'Date night',
  'U.S.S Butterscotch (Stranger Things special)',
  'Honey Almond',
  'Mint Chocolate Chip',
  'Chocolate',
  "Oreo® Cookies'n Cream",
  'Chocolate Chip',
  "Pralines 'n Cream",
  'Very Berry Strawberry',
  'Chocolate Chip Cookie Dough',
  'Old Fashioned Butter Pecan',
  'Jamoca®',
  'Jamoca® Almond Fudge',
  "Reese's® Peanut Butter Cup",
  'Rocky Road',
  'Peanut Butter ’n Chocolate',
  'Gold Medal Ribbon®',
  'World Class® Chocolate',
  'Cherries Jubilee',
  'Chocolate Fudge',
  'Daiquiri Ice',
  'Rainbow Sherbet',
  'Rainbow Swirl',
];
var seasonalFlavors = [
  "America's Birthday Cake",
  'Baseball Nut®',
  'Blueberry Cheesecake',
  'Bourbon Street Pecan Pie',
  'Brownie Bar Mashup',
  'Cherry Cordial with Kisses',
  'Chocolate Mousse Royale',
  'French Vanilla',
  'Eggnog',
  'German Chocolate Cake',
  'Icing on the Cake',
  'Love Potion #31',
  'New York Cheesecake',
  'Nutty Coconut',
  'Peppermint',
  'Strawberry Cheesecake',
  'Rock ’n Pop Swirl',
  'Reese’s Peanut Butter Cup',
  'Trick Oreo Treat',
  'Winter White Chocolate',
  'made with Snickers®',
  "made with M&M's®",
  'Heath®',
  'Mango Tango',
];
var regionalFlavors = [
  'Pink Bubblegum',
  'Caramel Macchiato',
  'York Peppermint Pattie',
  'Cotton Candy',
  'Orange Sherbet',
  'Grape Ice',
  'Watermelon Ice',
  'Miami Vice Sorbet',
  'Splish Splash®',
  "Wild 'n Reckless Sherbet",
  'Lemon Custard',
  'Oregon Blackberry',
  'Bananas ‘n Strawberries',
  'Mississippi Mud',
  'Rum Raisin',
  'Creole Cream Cheese',
  'Chocolate Almond',
  'Fudge Brownie',
  'Banana Nut',
  'Black Walnut',
  'Cotton Candy Crackle',
  'Quarterback Crunch',
  'Chocolate Chocolate Chip Cheesecake',
  "Caramel 'n' Cookies",
];

function getRandomFlavors(arr1, arr2, arr3, arr4) {
  const allFlavors = [...arr1, ...arr2, ...arr3, ...arr4];
  const totalFlavors = allFlavors.length;
  const randomFlavors = [];
  for (let i = 0; i < 31; i++) {
    let randomNumber = Math.floor(Math.random() * totalFlavors);
    randomFlavors.push(allFlavors[randomNumber]);
  }
  console.log(randomFlavors);
  return randomFlavors;
}
