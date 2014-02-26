


//key, value


var miObjeto = { "clave" : 'valor', "clave2" : 'valor2'};

var miObjeto = {};



// namespace


miObjeto.clave

miObjeto.clave2


miObjeto.clave = 'valor';






//var miArreglo = [{}, {}, {}];
























Object = {
	String : String,
	Number : Number
}


HumanBe = {
	Head : Head,
	Hand : Hand
}


Function < Object tiene el metodo prototype

el cual hereda Function






String.method('trim', function ( ) {
	return this.replace(/^\s+|\s+$/g, '');
});









                        Object

String     Number   Date    Function     Boolean







Object, // {}

String,  // 'cadena', "cadena"
Number, // 1, 2, -1, 2.0
Boolean,  // true o false // 1 o 0
Array, // [1,2,3]

Undefined
Null, 
Function,
Date




// asignado el valor 1 a la variable booleano
var booleano = 1; // = | operador de asignacion

var noExiste;

// si noExiste no tiene valor
// entonces su valor por default será 0
var stock = noExiste || 1; // || = or



if (!active) {
	// si la variable activa no existe
	return false;
};

if (booleano) {
	// == | operador de comparacion simple
	// si la variable booleano es verdadero(osea 
	//	verdadero )
};

if (booleano == true) { 
	// == | operador de comparacion simple
	// si la variable booleano es verdadero(osea 
	//	verdadero )
};

if (booleano === true) {
	// === | operador de comparacion estricto
	// si la variable booleano es verdadero(osea 
	//	verdadero ) 
	// Y compara tambien el tipo de dato
};




if (booleano != true) { 
	// != | operador de comparacion simple 
	// si la variable booleano no es verdadero(osea 
	//	falso )
};


if (booleano !== true) { 
	// !== | operador de comparacion estricto
	// si la variable booleano no es verdadero(osea 
	// falso )
	// Y no son del mismo tipo
};
















var Objeto = {};

Objeto.method('nombre', function(){
	console.log('echo');
})

// como puedo almacenar funciones en una variable?


Function.prototype.method = function (name, func) {
	this.prototype[name] = func;
	return this;
};



var that = this;

// comentario de una linea

/*  comentario de multiples lineas */

// la forma mala
/*
var rm_a = /a*/.match(s);
*/

// var rm_a = /a*/.match(s);

/*var rm_a = /a.match(s);
var rm_a = /a.match(s);
var rm_a = /a.match(s);
var rm_a = /a.match(s);
var rm_a = /a.match(s);
var rm_a = /a.match(s);*/



/*asdfasdfasdf
asdfasdfasdfasdf
asdfasdfasdfasdfasdf
asdfasdfasdfasdfasdf
asdfasdfasdf
asdfasdfasdfasdf*/

//var rm_a = /a*/.match(s);

/*asdfasdfasdfasdfasdf
asdfasdfasdfasdfasdf
asdfasdfasdf
asdfasdfasdfasdf
asdfasdfasdfasdfasdf
asdfasdfasdfasdfasdf*/


abstract
boolean break byte
case catch char class const continue
debugger default delete do double
else enum export extends
false final finally float for function
goto
if implements import in instanceof int interface
long
native new null
package private protected public
return
short static super switch synchronized
this throw throws transient true try typeof
var volatile void
while with




var hola;
var h2000;
var h_o_l_a;

var __aa;

var $elemento = $('')


var 55asas; // no funciona




