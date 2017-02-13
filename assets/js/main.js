$(document).ready({

	var numeros = [];
	var nombres = ["victor","pedro"];
	var $input = $("#numero");

	function add_numero()
	{
		input_val = $input.val(),
		item_val = ( /^[0-9]+$/.test(input_val) && input_val >= 0 ?  input_val : -1 );
		if(item_val >= 0)
		{
			numeros.push(item_val);
		}
	}

	function ordenar()
	{

	}

	$("#btn_add").click(function() {
		alert( "Handler for .click() called." );
	});
});