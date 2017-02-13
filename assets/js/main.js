$( document ).ready(function() {
    var numeros = new Array();
	var $input = $("#numero");
	var $cnt_resultado = $("#resultado");
	var animNumeros;
	var timeInterval = 500; //imtervalo de tiempo entre un numero y otro en la animacion

	function add_numero()
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
		clearTimeout(animNumeros);
	}

	function ordenar()
	{

		//Se detiene animacion en caso de que se esté ejecutando
		clearTimeout(animNumeros);

		//validación duplicidad
		var SinDuplicados = [];
		$.each(numeros, function(i, el){
		    if($.inArray(el, SinDuplicados ) === -1) SinDuplicados .push(el);
		});

		//ordenamiento
		SinDuplicados = SinDuplicados.sort(deMenorAMayor);

		$cnt_resultado.removeClass('hide'); //mostrandop el contenedor de la animacion
		//animacion de ordenamiento
		for (i in SinDuplicados) {
			animNumeros = setTimeout(
				function(){
					$cnt_resultado.html(SinDuplicados[i])
				},
			timeInterval + timeInterval*i);
		}
	}


	function deMenorAMayor(elem1, elem2) {
		return elem1-elem2;
	}

	$("#btn_add").click(function() {
		add_numero();
	});

	$("#btn_ord").click(function() {
		ordenar();
	});
});