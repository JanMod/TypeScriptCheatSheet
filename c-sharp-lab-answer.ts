module Katas {
	export class StringCalculator {
			
			Calculate(s: string): number{
				if(s.indexOf('-')>-1 && s.indexOf('+')>-1) return 0;
				
				if(s.indexOf('-')>-1){
					var valuesSplitedByMinus = s.split('-');					
					var firstNumber = valuesSplitedByMinus[0];
					var result = parseInt(firstNumber);
					valuesSplitedByMinus.splice(0,1);
					valuesSplitedByMinus.forEach((str)=>{
						result = result - parseInt(str);
					});
					
                	return result;								
				}
				
				var valuesSplitedByPlus = s.split('+');
				var total = 0;
				valuesSplitedByPlus.forEach((str)=> {
					total = total + parseInt(str);
				});				
				return total;
			}
	}
}

var calc = new Katas.StringCalculator();
alert("Add: " + calc.Calculate("10+1+5"));
alert("Subtract: " + calc.Calculate("10-1-5"));
