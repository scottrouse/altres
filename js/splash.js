$(document).ready(function(){

$('a#industrial').click(function(){
	$('#feature .feature').hide();
	$('#feature-industrial').show();
});
$('a#office').click(function(){
	$('#feature .feature').hide();
	$('#feature-office').show();
});
$('a#technical').click(function(){
	$('#feature .feature').hide();
	$('#feature-technical').show();
});
$('a#medical').click(function(){
	$('#feature .feature').hide();
	$('#feature-medical').show();
});

});