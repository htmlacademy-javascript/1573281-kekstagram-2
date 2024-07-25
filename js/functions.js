// Функция проверки длины строки
const checkStringLength = (string, maxLength) => string.length <= maxLength;

// Функция по опредлению, является ли строка полиндромом
const isPolindrome = (string) => {
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
isPolindrome('Анна');
extractNumber('2024 год');


//Функция из модуля 5
const getMinutes = (dataString) => {
  const time = dataString.split(':');
  return Number(time[0]) * 60 + Number(time[1]);
};

const checkMeetingTime = (start, end, meeting, duration) => getMinutes(meeting) >= getMinutes(start) && (getMinutes(meeting) + duration) <= getMinutes(end);

checkMeetingTime('08:00', '17:30', '14:00', 90); // true
checkMeetingTime('8:0', '10:0', '8:0', 120); // true
checkMeetingTime('08:00', '14:30', '14:00', 90); // false
checkMeetingTime('14:00', '17:30', '08:0', 90); // false
checkMeetingTime('8:00', '17:30', '08:00', 900); // false

