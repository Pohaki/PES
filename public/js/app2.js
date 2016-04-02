$(function(){
	$('.dropdown').dropdown();

	$('#competence1').progress({
		percent : 75
	});
	$('#competence2').progress({
		percent : 80
	});
	$('#competence3').progress({
		percent : 85
	});
	$('.badge').popup({
		on : 'click'
	});
});
