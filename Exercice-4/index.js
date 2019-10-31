'use strict';

//EXERCICE 4

var renderWorldMap = document.querySelector('#world-map');

renderWorldMap.addEventListener('load', function() {
	
    var caption = document.querySelector('#map-caption');
    var selectedCountries = document.getElementsByClassName('country');
    var countryList = document.querySelector('#country-name-list');
    
	for(var i = 0; i < selectedCountries.length; i++) {
		
		// add mouseover event listener on all selected countries
		selectedCountries[i].addEventListener("mouseover", function() {			
            var elemId = this.id; // stores current id
            elemId = elemId.split('_').join(' '); // remove the default "_" separator from country names
            caption.innerHTML = elemId; //get the id to write the name of the country
            this.style.fill = "blue"; //add background color on over the country
		});		
		
		// add mouseout event listener on all selected countries
		selectedCountries[i].addEventListener("mouseout", function() {
            caption.innerHTML = ""; //remove the country name
            this.style.fill = ""; //add background color on over the country
        });

    }

}, false);