$(function(){
	$('.dropdown').dropdown();

	//Isotrope.js
	var $grid = $('.iso-grid').isotope({
	  itemSelector: '.grid-item',
	  layoutMode: 'fitRows',
	  transitionDuration: 0
	});

	$('.tabFilter').click(function(){
		$('.tabFilter').removeClass('active');
		$(this).addClass('active');
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
});
