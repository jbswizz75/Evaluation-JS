'use strict'

//EXERCICE 6

//Create checkPhoneNumber variable
var checkPhoneNumber = document.querySelector('#submit');

checkPhoneNumber.addEventListener('click', function checkPhoneNumber(){
	var num = document.querySelector('#num').value;
	var numRegex = new RegExp('01|06|07)\d{10}$');

	//Result
	if (numRegex.test(num) == true){
		this.innerHtml = '<p>valid phone number</p>';
	}else{
		this.innerHtml= '<p>this phone number is not valid </p>';
	}
});