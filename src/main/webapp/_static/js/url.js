$(document).ready(function() {
	$('#url').focus();
	$('#showLinks').click(function() {
		$('#links').toggle('slow');
	});
	$('#shortener').submit(function(e){
		$('#url').hide();
		e.preventDefault();
		$.ajax({
			url: "/create",
			data: JSON.stringify({"url" : $("#url").val(), "short" : $('#short').val()}),
			processData: false,
			type: 'POST',
			contentType: 'application/json'
		}).done(function(data) {
			if(data.code == 200) {
				$('#url').val(window.location.protocol + "//" + window.location.host + "/" + data.urlObj.short);
			}
			else {

				alert("Error: " + data.message);
			}
		$('#url').toggle( "highlight" );
		$('#url').select();
		});
		return false;
	});
});