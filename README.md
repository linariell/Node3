<p></p>

<h2 align="center">ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ПРОФЕССИОНАЛЬНОГО ОБРАЗОВАНИЯ <br> «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ» <br> КАФЕДРА ИНФОРМАТИКИ </h2>
<p align="center">Лабораторная работа №3 <br>
по курсу «Web-технологии, языки и средства создания web-приложений» 

<p align="center"><b>"Node.js"</b><p>
<p align="right"><b>Выполнила: </b> студентка 331 группы Витковская Полина</p>
<p  align="right"><b>Принял: </b> Соболев Е. И., старший преподователь</p>
<br>
<br>
<br>
<p align="center">Южно-Сахалинск <br> СахГУ <br> 2023</p>
<h2> Введение </h2>
<p>Лабораторные работы по дисциплине «Web-технологии, языки и средства создания web-приложений» предназначены для освоения полученных теоретических знаний на практике. Перед началом лабораторной работы были поставлены цели: <br>
<ol>
  <li>Овладеть навыками работы с node.js. Используя Java Script, решить задачи.
</ol>
В соответствии с данными целями необходимо решить следующие задачи:
<ol>
   <li> Написать скрипты для решения данных задач.
   </ol>
Для реализации данной работы будет использоваться Visual Studio Code. Выполнение кода будет происходить в браузере Google Chrome с использованием node.js.
</p>
<h2>Решение задач</h2>
<p>Файл, запускающий сервер на node.js: </p>
<code>
const express=require("express");
const app=express();

app.use(express.static(__dirname + "\\"));
app.use("/",function(request,response) {
    response.sendFile("index.html")
});
app.listen(3005);
console.log('Сервер работает');
</code>

<p>Были выполнены задачи: </p>
<code>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
alert("Лабораторная 3");
// 1
{
    alert( null || 2 || undefined );
}
//2
{
    alert( alert(1) || 2 || alert(3) );
}
//3
{
    alert( 1 && null && 2 );
}
//4
{
    alert( alert(1) && alert(2) );
}
//5
{
    alert( null || 2 && 3 || 4 );
}
//6
{
 let age=parseInt(prompt("Введите возраст",14))
 if(age>=14&&age<=90) {alert("Возраст находится в диапазоне");}
 else {alert("Возраст не находится в диапазоне");}   
}
//7
{
    let age=parseInt(prompt("Введите возраст",14))
 if((age<=14)&&(age>=90)) {alert("Возраст не находится в диапазоне");}
 else {alert("Возраст находится в диапазоне");}   
 
//Иначе
// if (age < 14 || age > 90) {
//     alert(true);
// } else {
//     alert(false);
// } 
}
//8
{
    if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
}
//9
{
    
    let login=prompt("Введите логин");
    
    if(login=="Админ") 
    {
        let password=prompt("Введите пароль:");
        if(password=="Я главный") {alert("Здравствуйте!");}
        else if (password==null) {alert("Отменено");}
        else alert("Неверный пароль");
    }
    else if(login==null||login=="") {alert("Отменено");}
    else {alert("Неизвестный пользователь");}

}
//10
{
    let i = 3;
while (i) {
  alert( i-- );
}    
}
//11
{
    let i = 0;
while (++i < 5);
let j = 0;
while (j++ < 5);
alert(i+" и "+j)
}
//12
{

//Постфиксная форма выведет: 0, 1, 2, 3, 4. Префиксная форма выведет: 0, 1, 2, 3, 4.
}
//13
{
    let result="";
for(let i=2;i<11;i+=2)
    result+=i+" ";
    alert(result);
}
//14
{
    // for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }
let i = 0;
while (i < 3){
    alert(`number ${i}!`);
    i++;
    }
}
//15
{
    let resp = parseInt(prompt("Введите число"));
while(resp <= 100 && resp != null)
{
    resp = prompt("Введите число",50);
}
}
//16
{
    
let n = parseInt(prompt("Введите n"));
let array = [2];
for(let i = 3; i <= n; i++){
    for(let j = 0; j < array.length; j++){
        if(i % array[j] == 0){
            break;
        }
        if(j == array.length - 1)
        {
            array.push(i)
        }
    }
}
alert(array);
}
//17
{
    let browser=prompt("Browser?")
    browser=browser.toLowerCase();
        if(browser=="edge") {alert("You've got the Edge!");}
        else if ((browser=="chrome")||(browser=="firefox")||(browser=="safari")||(browser=="opera")) 
        {alert("Okay we support these browsers too");}
        else alert("We hope that this page looks ok!");
}
//18
{
    switch(parseInt(prompt("Введите число между 0 и 3"))){
  case 0:
      alert('Вы ввели число 0');
      break;
  case 1:
      alert('Вы ввели число 1');
      break;
  case 2:
  case 3:
      alert('Вы ввели число 2 или 3');
      break;
}
}
//19
{
    //else ничего не меняет
}
//20
{
    
    alert("Вариант 1 с оператором ?");
    checkAge3(parseInt(prompt("Введите возраст:"),14));
    alert("Вариант 2 с оператором ||");
    checkAge4(parseInt(prompt("Введите свой возраст:"),14));


function checkAge3(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}

function checkAge4(age) {
    return age > 18 || confirm('Родители разрешили?');
}
}
//21
{
    let a=parseInt(prompt("a?",2))
    let b=parseInt(prompt("b?",5))
    
    if (a > b) alert(b);
    else if (a < b) alert(a);
    else alert(a);

}
//22
{
    let x=parseInt(prompt("x?",2))
    let n=parseInt(prompt("n?",3))
    
    
       for (let i=1;i<n;i++)
        x=x*x;
        alert(x);
    
}
//Задачи на codewars
// function highAndLow(numbers){
//   let array = numbers.split(" ");
//   let min = parseInt(array[0]);
//   let max = parseInt(array[0]);
  
//   for(let i = 1; i < array.length; i++)
//    {
//      let element = parseInt(array[i]);
//      if (min > element)
//        min = element;
//      if (max < element)
//        max = element;
//    }
  
//   return `${max} ${min}`;
// }
// function disemvowel(str) {
//   str = str.replaceAll(/[aieouAIEOU]/g, "");
//   return str;
// }
// function isIsogram(str){
//   str = str.toLowerCase();
//   let array = [];
//   for(let i = 0; i < str.length; i++)
//   {
//     if (array.indexOf(str[i]) == -1)
//         array.push(str[i]);
//     else
//         return false;
//   }
//   return true;
// }
// function explode(s) {
//   let str = ""
//   for (let i=0; i < s.length; i++)
//     {
//       for (let j=0; j < parseInt(s[i]); j++)
//         {
//           str+=s[i];
//         }
//     }
//   return str;
// }
// function getParticipants(handshakes){
//   if (handshakes == 0) return 0;
//   let count = 0;
//   while (count*(count-1) < handshakes * 2)
//   {
//     count++;
//   }
//   return count;
// }
// function duplicateEncode(word){
//   word = word.toLowerCase();
//   let str = "";
//   for(let i = 0; i < word.length; i++){
//     let element = word[i];
//     for(let j = 0; j < word.length; j++)
//       {
//         if (i!=j && word[i] == word[j]){
//           str += ")";
//           element = null;
//           break;
//         }
//       }
//     if (element != null) {
//       str += "(";
//     }
//   }
//   return str;
// }
// function nthFibo(n) {
//   if(n == 1) return 0;
//   if(n == 2) return 1;
//   let first = 0;
//   let second = 1;
//   for(let i = 2; i < n; i++)
//     {
//       let third = first + second;
//       first = second;
//       second = third;
//     }
//   return second;
// }
// function solution(number){
//   let sum = 0;
//   for(let i = 1; i < number; i++)
//   {
//     if (i % 3 == 0 || i % 5 == 0 || i % 6 ==0 || i % 9 ==0)
//       sum += i;
//   }
//   return sum;
// }
    </script>
    
</body>
</html>

</code>
<p>Также был написан бот для Telegram:</p>
<code>
  const {Bot}=require('grammy');
const bot=new Bot('6987389939:AAEfYiWC70re2ljMYa4iuI9IACCwabFMqQI');

bot.command('start',(ctx)=> {
    ctx.reply("Привет!\n Давай заглянем в будущее✨")
})
bot.command('daycard',(ctx)=> {


    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
      }
    let res=""
    let r=getRandomIntInclusive(0,6)
    switch (r)
    {
        case 0:res="Карта \"Звезда\"...Смотри на светлую сторону!"; break;
        case 1:res="Карта \"Любовники\"...Тебя что-то вводит в искушение?"; break;
        case 2:res="Карта \"Висельник\"...Придется чем-то пожертвовать!"; break;
        case 3:res="Карта \"Отшельник\"...Разберись в своей душе!"; break;
        case 4:res="Карта \"Колесница\"...Иди прямиком к своей цели!"; break;
        case 5:res="Карта \"Справедливость\"...Время ответить за свои действия!"; break;
        case 6:res="Карта \"Шут\"...Брось старое и начни сначала!"; break;
    }
    ctx.reply(res);
})
bot.start();
</code>
<h2>Вывод</h2>
<p>В ходе лабораторной работы были решены задачи на Java Script, а также написан бот для телеграмма с помощью grammy API. Выполнение происходило с помощью Node.js</p>
