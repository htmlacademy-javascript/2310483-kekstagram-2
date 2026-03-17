//Проверяет длину строки
const isStringLonger = (string, length) => string.length <= length;

// Через преобразование в массив и обратно
/* const isStringPalindrome = (string) => {
  const normalizedString = string.toLowerCase().replaceAll(' ', '');
  const reversedString = normalizedString.split('').reverse().join('');
  return normalizedString === reversedString;
}; */

// Через цикл for без преобразования в массив
const isStringPalindrome = (string) => {
  const normalizedString = string.toLowerCase().replaceAll(' ', '');
  let reversedString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }
  return normalizedString === reversedString;
};

// Извлекает цифры из строки и преобразует в одно число
const getNumberFromString = (string) => {
  const normalizedString = (typeof string === 'number') ? string.toString() : string;
  let result = '';
  for (let i = 0; i < normalizedString.length; i++) {
    const symbol = normalizedString[i];
    result = !isNaN(parseInt(symbol, 10)) ? result + symbol : result;
  }
  return (result === '') ? NaN : parseInt(result, 10);
};

const getTimeInMinutes = (hours, minutes) => Number(hours) * 60 + Number(minutes);

const isMeetingFitsWorkingDay = (workStarts, workEnds, meetingStarts, meetingDuration) => {
  const [workStartsHours, workStartsMinutes] = workStarts.split(':');
  const [workEndsHours, workEndsMinutes] = workEnds.split(':');
  const [meetingStartsHours, meetingStartsMinutes] = meetingStarts.split(':');
  const workStartsInMinutes = getTimeInMinutes(workStartsHours, workStartsMinutes);
  const workEndsInMinutes = getTimeInMinutes(workEndsHours, workEndsMinutes);
  const meetingStartsInMinutes = getTimeInMinutes(meetingStartsHours, meetingStartsMinutes);
  const meetingEndsInMinutes = meetingStartsInMinutes + meetingDuration;

  return (workStartsInMinutes <= meetingStartsInMinutes && workEndsInMinutes >= meetingEndsInMinutes);
};
