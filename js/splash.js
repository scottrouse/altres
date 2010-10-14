$(document).ready(function(){
	$('a#industrial').click(function(){
		$('#feature .feature').hide();
		$('#primary-links a span').hide();
		$('#feature-industrial').show();
		$('#primary-links a#industrial span').show();
	});
	$('a#office').click(function(){
		$('#feature .feature').hide();
		$('#primary-links a span').hide();
		$('#feature-office').show();
		$('#primary-links a#office span').show();
	});
	$('a#technical').click(function(){
		$('#feature .feature').hide();
		$('#primary-links a span').hide();
		$('#feature-technical').show();
		$('#primary-links a#technical span').show();
	});
	$('a#medical').click(function(){
		$('#feature .feature').hide();
		$('#primary-links a span').hide();
		$('#feature-medical').show();
		$('#primary-links a#medical span').show();
	});
});