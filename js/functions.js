// Функция проверки длины строки
const checkStringLength = (string, maxLength) => string.length <= maxLength;

// Функция по опредлению, является ли строка полиндромом
const polindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  let oppositeString = '';

  for(let character = string.length - 1;character >= 0;character--) {
    oppositeString += string[character];
  }
  return string === oppositeString;
};

// Дополнительное задание. Функция по извелечению целого числа
const extractNumber = (string) => {
  let resaultNumber = '';
  if(typeof(string) === 'number') {
    string = string.toString();
  }
  for(let number = 0; number <= string.length - 1; number++){
    if(!Number.isNaN(parseInt(string[number], 10))){
      resaultNumber += string[number] ;
    }
  }
  resaultNumber = parseInt(resaultNumber, 10);
  return resaultNumber;
};

checkStringLength('str', 4);
polindrome('Анна');
extractNumber('2024 год');

