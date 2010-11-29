$(document).ready(function(){
	$('a#industrial').click(function(){
		$('#feature .feature').hide();
		$('#primary-links a span').hide();
		$('#feature-industrial').show();
		$('#primary-links a#industrial span').show();
		$('#primary-links ul li a.active').removeClass('active');
		$('#primary-links ul li a#industrial').addClass('active');
		$('#splash').removeClass().addClass('industrial-splash');
	});
	$('a#office').click(function(){
		$('#feature .feature').hide();
		$('#primary-links a span').hide();
		$('#feature-office').show();
		$('#primary-links a#office span').show();
		$('#primary-links ul li a.active').removeClass('active');
		$('#primary-links ul li a#office').addClass('active');
		$('#splash').removeClass().addClass('office-splash');
	});
	$('a#technical').click(function(){
		$('#feature .feature').hide();
		$('#primary-links a span').hide();
		$('#feature-technical').show();
		$('#primary-links a#technical span').show();
		$('#primary-links ul li a.active').removeClass('active');
		$('#primary-links ul li a#technical').addClass('active');
		$('#splash').removeClass().addClass('technical-splash');
	});
	$('a#medical').click(function(){
		$('#feature .feature').hide();
		$('#primary-links a span').hide();
		$('#feature-medical').show();
		$('#primary-links a#medical span').show();
		$('#primary-links ul li a.active').removeClass('active');
		$('#primary-links ul li a#medical').addClass('active');
		$('#splash').removeClass().addClass('medical-splash');
	});
});