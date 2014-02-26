
// Funcion global

function mostrarMensaje(){
	console.log('mostrando un mensaje');
	// su ambito es window osea this === window
	console.log(this);
}

function mostrarMensaje2(){
	if (this === window) {
		console.log('pintando un mensaje solo si su ambito es global');
	}else{
		console.log('no pinto un mensaje por que mi ambito no es global');
		console.log(this);
	}
}

function mostrarMensaje3(){
	if (arguments[0]) {
		console.log('no acostumbro recibir parametros')
		console.log('pero me enviaron: ' + arguments[0]);
	}else{
		console.log('mostrando un mensaje');
	}
}

mostrarMensaje3.call({}, 'un mensaje secreto desde call');
mostrarMensaje3.apply({},['un mensaje secreto desde apply']);


// Functions can be stored in variables.

var variableAlmacenaFuncion = function(){
	console.log('almacena funcion');
};

// Functions can be stored in objects.

var objeto = {
	keyFuncion: function(){
		console.log('ejecutando funcion');
	}
};

// Functions can be stored in arrays.
var array = [1,function(){},3];


// Functions can be passed as arguments to functions

function recibeFuncion(funcion){
	function();
}

recibeFuncion(variableAlmacenaFuncion);


// Functions can be returned from functions

function retornaUnaFuncion(){
	return function(){
		console.log('retornando una funcion.');
	};
};

