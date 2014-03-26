
/*  
	patrón prototype

	url: https://developer.mozilla.org/en-US/docs/prototype
	url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype 
	url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype
*/

function Gato(caracteristicas){
	var datos = caracteristicas || {};
	this.nombre    = datos.nombre || 'michifuz';
	this.color     = datos.color  || 'negro';
	this.raza      = datos.raza   || 'chusco';
	this.tipo      = datos.tipo   || 'salvaje';
};

Gato.prototype.dormir = function() {
	if (this.tipo === "salvaje") {
		console.log('Como es un gato '+ this.tipo +' duerme en el piso o duerme en cualquier sitio.');
	}else{
		console.log('Como es un gato '+ this.tipo +' no duerme en cualquier sitio.');
		this.tomarLeche();
		this.dormirEnSuCasita();
	};
};

Gato.prototype.tomarLeche = function() {
	console.log('Toma su leche.');
}

Gato.prototype.dormirEnSuCasita = function() {
	console.log('Se dirije a su casita.');
}


var gatito = new Gato();