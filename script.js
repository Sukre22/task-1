'use strict';




let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let expensesOne = prompt("Введите обязательную статью расходов в этом месяце");
let expensesTwo = prompt("Во сколько обойдется?");


/*let appData = {
    budget: money,
    timeData: time,
    expenses: {
        "ответ на первый впорос": expensesOne,
        "ответ на второй вопрос": expensesTwo,
    },
    optionalExpenses: 
    income: null,
    savings: false, 

};*/

let budegetOneDay = money / 30;

alert(budegetOneDay);
