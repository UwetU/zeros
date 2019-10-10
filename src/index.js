module.exports = function zeros(expr) {

  let numbersOne = '';
  let zero = 0;
  let evenNumbers = 0;
  let numbers = 0;

  for(let i = 0; i < expr.length; i++){
    //добовляем цифры из строки в переменную получая при этом конечные числа
    if(isNaN(parseInt(expr[i])) == false ){
      numbersOne += expr[i];
    } else {
      numbers++;
      numbersOne = parseInt(numbersOne);
      if (numbersOne % 2 == 0)
        evenNumbers++;
      
      //проверяем надо ли нам находить ! или !!
      if (expr[i] == '!' && expr[i+1] != '!'){
        while(numbersOne > 0){
          if (numbersOne % 5 == 0 )
            zero++;
          if (numbersOne % 25 == 0)
            zero++;
          numbersOne--;
        }
      }  

      if (expr[i] == '!' && expr[i+1] == '!'){
        while(numbersOne > 0){
          if (numbersOne % 5 == 0)
            zero++;
          if (numbersOne % 25 == 0)
            zero++;
          numbersOne -= 2;
        }
      }
      
      //если * то обрезаем строку 
      if (expr[i] == '*') {
        expr = expr.slice(i+1);
        i = -1;
      } else {
        if (expr[i+1] == '*') {
          expr = expr.slice(i+2);
          i = -1;
        }
      }
      numbersOne = '';
    } 
  }
  //если чисел несколько и они нечетные
  if (evenNumbers == 0 && numbers > 2)
    return 0;
  return zero;
}
