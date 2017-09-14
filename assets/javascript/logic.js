$(document).ready(function(){
    var config = {
    apiKey: "AIzaSyAqc7CcXb6NsIXUa8KY21zvKrB7Zgk6oBM",
    authDomain: "music-stalker.firebaseapp.com",
    databaseURL: "https://music-stalker.firebaseio.com",
    projectId: "music-stalker",
    storageBucket: "music-stalker.appspot.com",
    messagingSenderId: "685713629052"
  };
  firebase.initializeApp(config);

  // console.log(firebase);

  var database = firebase.database();
  var searches = [""];


  	
  		  	
  	var artists = "";

  


  	 $("#addArtist").on("click", function(event) {
  	 	event.preventDefault();
      console.log("Button was clicked");

      //Grabbed values from text boxes
      var artists = $("#artist-input").val().trim();
      console.log("artists", artists)


      console.log('before', searches)
      searches.splice(4)
      searches.splice(0,0,artists);
      console.log('after', searches)
      
      database.ref("searches").set(searches)

      // (Ife) Search Bands in Town for artists name and return tourdates
      var queryURL = "https://rest.bandsintown.com/artists/" + artists + "/events?app_id=codingbootcamp";
         $.ajax({
            url: queryURL,
            method: "GET"
          }).done(function(response) {
            
            if (response.length) {
              var trHTML = '';

              $.each(response, function(i, item) {
                  if (i === 5) {
                    console.log(5);
                    return false;
                  }
                  trHTML += 
                  '<tr><td>' + artists +
                  '</td><td>' + item.datetime + 
                  '</td><td>' + item.venue.name + 
                  '</td></tr>' 
              });

              $('tbody#test').append(trHTML)

            } 

          }); 

      });
     // End Bands in Town logic 


            
     

    

  	 database.ref("searches").on("value", function(snapshot) {
    
       searches = snapshot.val();
       if (!searches) searches=[];
       console.log(searches);

      // Console.loging the last user's data
      console.log(searches);
      



      $("#searchDisplay").html(searches.length > 0 ? searches[1] : "nothing");


      //for (var i = 0; i<searches.length; i++) {
         // console.log(searches[""]);

        
        
      
      //}

     
    }); 
});

//