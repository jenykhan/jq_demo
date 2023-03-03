//jquery
$(document).ready(function(){

	$('.hide').click(function(){
		$('h3').hide("fast");
	});
	$('.show').click(function(){
		$('h3').show();
	});
	$('.toggle').click(function(){
		$('h3').toggle("slow");
	});
});


//jquery
$(document).ready(function(){

	$('#hide').click(function(){
		$('h4').fadeOut(300);
	});
	$('#show').click(function(){
		$('h4').fadeIn(300);
	});
	$('#toggle').click(function(){
		$('h4').fadeToggle(3000);
	});
});
//jquery
$(document).ready(function(){
	$('.pannel').click(function(){
		$('.text').slideToggle(3000);
	});
});


$(document).ready(function(){
	$( "ul.topnav > li" ).css( "border", "3px double red" );
});


$(document).ready(function(){
$( "div:contains('John')" ).css( "text-decoration", "underline" )
});

$(document).ready(function(){
$( "ul li" ).even().addClass( "highlight" );
});