
//Заданния 1
let age = 5
if(age >= 10){
console.log("Число больше 10");
} else {
    console.log("Число меньше или равно 10");
 };
//задания 2
 let deleted = confirm("Хотите удалить файл?");
 if (deleted) {console.log ("Файл удален");

 } else {console.log("Удаление отменено");} 
// Задания 3 

let vozrast = 30
if(vozrast < 18) {
   console.log ("Вы еще подросток");
}  else if (vozrast >= 18 && vozrast <= 30 ) {
console.log ("Вы молодой взрослый");
} else if (vozrast > 30 ) {
    console.log ("Вы взрослый");
}

//Здания 4
let fo = 8
let result = (fo % 2 == 0) ? "Четное число" : "Нечетное число";
console.log(result)


//Задания 5

let day = "8";
let message;

switch (day) {
   case "1":
       message = "Понедельник";
       break;
   case "2":
       message = "Вторник";
       break;
   case "3":
       message = "Среда";
       break;
    case "4":
        message = "Четверг";
        break;
     case "5":
       message = "Пятница";
       break;
     case "6":
       message = "Суббота";
       break;
     case "7":
       message = "Воскресенье";
       break;
       default:
       message = "Некорректное значение";
} 
console.log(message);


//Задания 6

let number1 = 20;
let number2 = 20;

if (number1 == number2) {
  console.log("Числа равны");
} else {
  let result = number1 > number2 ? "Первое число больше" : "Второе число больше";
  console.log(result);
}


//Доп задания
let seasons = "11";
let year;
switch (seasons) {
        case "1":
        case "2":
        case "12":
             year = "Зима";
        break;
        case "3":
        case "4":
        case "5":
             year = "Весна";
        break;
        case "6":
        case "7":
        case "8":
             year = "Лето";
        break;
        case "9":
        case "10":
        case "11":
             year = "Осень";
        break;
       
       
        default:
            year = "Некорректное значение";
   
 } 
 console.log( year);