$(document).ready(function(){
	//loadint=g the content of the home page
	$('main').load('content.php #home');

	$('#home').click(function(){
			$('main').html('<div class="loading"><img src="img/loading.gif" alt="loading"></div>');
			$('main').load('content.php #home');
		});

	$('#about').click(function(){
			$('main').html('<div class="loading"><img src="img/loading.gif" alt="loading"></div>');
			$('main').load('content.php #about');
		});

	$('#services').click(function(){
			$('main').html('<div class="loading"><img src="img/loading.gif" alt="loading"></div>');
			$('main').load('content.php #services');
		});

	$('#contact').click(function(){
			$('main').html('<div class="loading"><img src="img/loading.gif" alt="loading"></div>');
			$('main').load('content.php #contact');
		});

	// checking the id of the link clicked
	
	// $('a').click(function(){
	// 	$('main').html('<div class="loading"><img src="img/loading.gif" alt="loading"></div>');

	// 	var clickedLink = $(this).attr('id');
	// 	$('main').load('content.php #'+clickedLink);
	// });


});