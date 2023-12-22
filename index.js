const {Bot}=require('grammy');
const bot=new Bot('6987389939:AAEfYiWC70re2ljMYa4iuI9IACCwabFMqQI');

bot.command('start',(ctx)=> {
    ctx.reply("Привет!\nДавай заглянем в будущее✨ Чтобы узнать свою карту дня, напиши /daycard")
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