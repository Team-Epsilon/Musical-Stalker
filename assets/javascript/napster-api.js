

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>


	$("#select-artist").click(function(){
  	event.preventDefault();
  	searchNapster($("#artist-input").val());
	});


  function searchNapster(artistname) {

    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "http://api.napster.com/v2.2/search?apikey=OTM2NzJhM2ItNTAyNS00NGRhLTk5YTMtNDA5MzA3ZDllYzQ1&query=weezer&type=artist";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
       console.log(response);

    });

     function searchNapster(tracks) {

    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "http://api.napster.com/v2.2/artists/art.954/tracks?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&limit=5";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
       console.log(response);

    });
  }

  // Create function(loop?) to query only the tour date and venue latitude and longitude


 // Create table using materialize to append artists tour dates and venue location
 



