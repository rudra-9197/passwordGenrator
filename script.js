const resultEl = document.getElementById("result");
let lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

uppercaseEl.addEventListener("change", (event) => {
  if (event.target.checked) {
    event.target.value = 1;
  } else {
    event.target.value = 2;
  }
});

lowercaseEl.addEventListener("change", (event) => {
  event.target.checked ? (event.target.value = 1) : (event.target.value = 2);
});

numbersEl.addEventListener("change", (event) => {
  event.target.checked ? (event.target.value = 1) : (event.target.value = 2);
});

symbolsEl.addEventListener("change", (event) => {
  event.target.checked ? (event.target.value = 1) : (event.target.value = 2);
});

clipboardEl.addEventListener("click", () => {});

generateEl.addEventListener("click", () => {
  let paswrd = generatePassword(
    uppercaseEl.value,
    lowercaseEl.value,
    numbersEl.value,
    symbolsEl.value,
    lengthEl.value
  );
  console.log(paswrd);
  resultEl.innerText = paswrd;
});

function generatePassword(upper, lower, number, symbol, lngth) {
  let passwrd = "";
  let i = 0;
  if(upper ==2 && lower == 2 && number == 2 && symbol == 2 )
  {
    let ask = alert("Pls select any one parameter")
    return null;
  }
  const uppercaseE = document.getElementById("uppercase");

  while (i < lngth) {
    i++;
    let randomFunc = {
      lower: getRandomLower(),
      upper: getRandomUpper(),
      number: getRandomNumber(),
      symbol: getRandomSymbol(),
    };

    if (upper == 2) {
      delete randomFunc.upper;
    }
    if (lower == 2) {
      delete randomFunc.lower;
    }
    if (number == 2) {
        delete randomFunc.number;
      }
      if (symbol == 2) {
        delete randomFunc.symbol;
      }

     
    let tmpar = Object.values(randomFunc);

    let num = Math.floor(Math.random() * tmpar.length);

    passwrd += tmpar[num];
  }

  return passwrd;
}

function getRandomLower() {
  let lowr = "abcdefghijklmnopqrstuvwxyz";

  let lowerindex = Math.floor(Math.random() * lowr.length);

  return (randomlowr = lowr[lowerindex]);
}

function getRandomUpper() {
  let lowr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let lowerindex = Math.floor(Math.random() * lowr.length);

  return (randomlowr = lowr[lowerindex]);
}

function getRandomNumber() {
  let lowr = "123456789";

  let lowerindex = Math.floor(Math.random() * lowr.length);

  return (randomlowr = lowr[lowerindex]);
}

function getRandomSymbol() {
  let lowr = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "-",
    "_",
    "+",
    "=",
    "?",
    "~",
  ];

  let lowerindex = Math.floor(Math.random() * lowr.length);

  return (randomlowr = lowr[lowerindex]);
}
