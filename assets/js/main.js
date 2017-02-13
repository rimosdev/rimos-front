$( document ).ready(function() {
    var numeros = new Array();
	var $input = $("#numero");
	var $cnt_resultado = $("#resultado");
	var animNumeros;
	var timeInterval = 100; //imtervalo de tiempo entre un numero y otro en la animacion
	var sinDuplicados = [];
	var cadenaOrdenada = "";
	var $btn_ord = $("#btn_ord"); //boton ordenar

	function addNumero()
	{
		input_val = $input.val(),
		item_val = ( /^[0-9]+$/.test(input_val) && input_val >= 0 ?  input_val : -1 );
		if(item_val >= 0)
		{
			numeros.push(item_val);
		}
		$input.val('');
		$input.focus();
		//Se detiene animacion en caso de que se esté ejecutando
		detenerAnimacion();
		if(numeros.length > 0)
		{
			$btn_ord.removeClass('disabled');
		}
		else
		{
			$btn_ord.addClass('disabled');
		}
	}

	function ordenar()
	{
		//Se detiene animacion en caso de que se esté ejecutando
		detenerAnimacion();

		//validación duplicidad
		sinDuplicados = [];
		$.each(numeros, function(i, el){
		    if($.inArray(el, sinDuplicados ) === -1) sinDuplicados .push(el);
		});

		//ordenamiento
		numeros = sinDuplicados.sort(deMenorAMayor);

		$cnt_resultado.removeClass('hide'); //mostrandop el contenedor de la animacion
		$cnt_resultado.html('...');
		//animacion de ordenamiento
		animNumeros = setTimeout(function(){
					 muestraNumero(0)
				},timeInterval);
	}

	function muestraNumero(i)
	{
		if(i < numeros.length)
		{
			cadenaOrdenada += " " + numeros[i];
			$cnt_resultado.html(numeros[i]);
			animNumeros = setTimeout(function(){
					 muestraNumero(i + 1)
				},timeInterval);
		}
		else
		{
			$cnt_resultado.html(cadenaOrdenada);
			cadenaOrdenada = '';
			numeros = [];
			$btn_ord.addClass('disabled');
		}
	}

	function detenerAnimacion()
	{
		cadenaOrdenada = "";
		$cnt_resultado.addClass('hide');
		clearTimeout(animNumeros);
	}


	function deMenorAMayor(elem1, elem2) {
		return elem1-elem2;
	}

	$("#btn_add").click(function() {
		addNumero();
	});

	$btn_ord.click(function() {
		ordenar();
	});
});