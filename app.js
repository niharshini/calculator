function getInput(){
	return document.getElementById("input-value").innerText;
}
function printInput(num){
	document.getElementById("input-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="all-clear"){
			printInput("");
			printOutput("");
		}
		else if(this.id=="clear"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var Input=getInput();
			if(output==""&&Input!=""){
				if(isNaN(Input[Input.length-1])){
					Input= Input.substr(0,Input.length-1);
				}
			}
			if(output!="" || Input!=""){
				output= output==""?output:reverseNumberFormat(output);
				Input=Input+output;
				if(this.id=="="){
					var result=eval(Input);
					printOutput(result);
					printInput("");
				}
				else{
					Input=Input+this.id;
					printInput(Input);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}