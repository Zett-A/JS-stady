'use script';

// let money = prompt ("Ваш бюджет на месяц?", ''),
//     time = prompt ("Введите дату в формате YYYY-MM-DD", '');
    
// let appData = {
// 	budget: money,
// 	expenses: {'a2' : 'a4'},
// 	optionalExpenses: {},
// 	income: [],
// 	timeData: time,
// 	savings: false
//     };

// let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a2 = prompt("Во сколько обойдется?", ''),
// 	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a4 = prompt("Во сколько обойдется?", '');

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

// alert(appData.budget / 30);

//это первоначальный код до оптимизациии и внесения в него изменений с помощью цикла, условий и прочего

let money = prompt("Ваш бюджет на месяц?", ''), //здесь перед promt  ставим + чтобы строка преобразовывалась в цифры.
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    
let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
    };

// let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a2 = prompt("Во сколько обойдется?", ''),
// 	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a4 = prompt("Во сколько обойдется?", '');

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

// начинаем прописывать цикл, что не спрашивать каждый раз. мы ыыодим переменную i, которая равна нулю. Затем прописываем второе условие, что i<2 так как мы задаем 2 раза по 2 вопроса а1, а2 и а3, а4. После этого указываем, что каждый раз при выполнении цикла переменная i увеличивается на единицу. После этого записываем в фигурных скобках те действия, которые должны произойти в цикле.
// ВАЖНО ВНИМАТЕЛЬНО ЧИТАЙ- теперь в действие(т.е. в фигурные скобки мы переносим переменные а1 и а2, после чего удаляем их все из кода, чтобы не сломать код.). При этом, переименовываем переменные а1 в а, а2 в b
// ВАЖНО ЧИТАТЬ ВНИМАТЕЛЬНО. теперь после создания вопросов а и b, теперь запишем на них ответы, которые мы указали в массиве как expenses. Как мы видим expenses это у нас объект, о чем говорят фигурные скобки, поэтому, чтобы использовать свойство или создать метод у объекта мы можем использовать два метода это через точку или квадратные скобки, воспользуемся вторым.  поэтому пишем appData.expenses [] и квадратные скобки, в которые помещаем нашу переменную а. когда пользователь ответить на переменную а, он смжет ответить на перепменную b. Теперь у нас создалась пара ключ - это а и значение - это b. Все цикл мы создали, но есть проблема в поле можно ввести любые данные, а нам нужны цифры. Поэтому теперь пропишем Условие для проверки. Первое условие проверки это проверка, что данные а являются строкой, все это делаем с помощью typeof, а именнл ((typeof(a))=== 'string') и затем нам надо сравнить, что переменная а т.е. введенные данные не выдают null, для этого используем && и пишем снова нашу переменную а и сравниваем её через знак инферсии/отрицания (!)  чтобы она не была равна null, т.е. (typeof(a) != null), тоже самое нам надо с делать и переменной b.  Теперь пишем Условие, чтобы пользователь не мог оставить пустфми переменные А и b, т.е. а != '' && b != ''. Теперь запретим пользователю, чтобы ответ был меньше определенного кол-ва символов, например не более 50 символов,т.е. a.length < 50. Все, но теперь если ничего не подходит в статью обязательных расходов это переменная А, то мы её теряем и теперь нужно написать самому код для ELSE, т.е. написать код, чтобы мы возвращались на цикл обратно, пока не будет выполнено первое условие, именно не будет заполнена переменна А. 
// Это делаем самостоятельно.     

for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
		console.log("done"); //Проверка кода в консоли браузера
		appData.expenses[a] = b;
	} else {
	}
}


// Здесь запишем бюджет на один день. Оринтируясь на ответ пользователя.
// Сначала пишем наш глобальный объект appData, затем создаем новое свойство внутри него и назовем его moneyPerDay и в него записываем вот эту конструкцию appData.budget / 30, теперь в нашем appData появилась новая статья, которая будет содержать кол-во денег на один день в расчете из того что нам ввел пользователь. Далее выводим эту информацию в красивом виде на страницу. 
// Чтобы использовать переменную в выводе на экран ставим + и саму переменную смотри ниже.   
appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

// теперь от уровня бюджета вывидим уровень достатка человека. Для этого напишем большое условие, в котором будем проверять appData.moneyPerDay. Цифры пока берем с потолка, но можно будет подстроить и под свою видение достатка.
// Теперь в Услвиях проипишем, что если appData.moneyPerDay < 100, то пропишем, чтоб в консоли вышло сообщение, что это минимальный достаток на 1 день. Далее вновь прописываем, но только в else новое вложенное условие IF если у нас appData.moneyPerDay > 100  && appData.moneyPerDay < 2000, то вывидем в консоль сообщение, что у нас средний уровень достатка. Теперь снова прописываем Else и новое условия, т.е. наша переменная appData.moneyPerDay > 2000, тогда выполняется условие, которое выводит в консоль сообщение, что у нас высокий уровень достатка.  
// Однако если не одно из вышеуказанных условий не выполнится, тогда пропишем ELSE и в выполняемых действиях пропишем, что в консоли надо вывести сообщение, что произошла ошибка.   
// Вот сам код условия.

if(appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка");
	// alert("Минимальный уровень достатка"); 
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка");
	// alert("Средний уровень достатка");
} else if(appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
	// alert("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка");
	// alert("произошла ошибка");
}