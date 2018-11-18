<!-- AJAX = Asynchronous Javascript And XML -->

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Jquery AJAX load Method</title>
	<script src="jquery.js"></script>
	<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> -->
</head>
<body>
	<h1>Jquery AJAX load method example</h1>
	<button>Load Content</button>
	<div class="content">
		
	</div>

<script>
	$(document).ready(function(){
		$('button').click(function(){
			$('.content').load('content.php');
		});
	});
</script>

</body>
</html>















