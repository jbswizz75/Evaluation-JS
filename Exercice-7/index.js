'use strict';

//EXERCICE 7

function computeNotes() {

	//define rates
	var m = [12, 13, 14, 11, 20, 19, 15];
    var n = 0.0;
    var i = 0;

	//'while' is used until the sum of all values is done
	while (i < m.length) {
		n += m[i];
		i+=1;
	}
	//divide sum by rate number
	return (n / tab.length);
}
//Get the overall average
computeNotes();