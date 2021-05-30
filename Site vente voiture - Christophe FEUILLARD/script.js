$(document).ready(function() {
 
    var images = [
        "https://images2.alphacoders.com/104/thumb-1920-1046184.jpg",
        "https://www.grand-est-automobiles.fr/wp-content/uploads/2019/10/peugeot-e208-2019.jpg",
        "https://images6.alphacoders.com/310/310190.jpg"
      ]
    
    var imageHead = document.getElementById("image-head");
    
     var i = 0;
    setInterval(function() {
      imageHead.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
    }, 15000);


    /////////////////////burger///////////////////////////////////////
  
        $( ".cross" ).hide();
        $( ".menu" ).hide();
        $( ".hamburger" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
        $( ".hamburger" ).show();
        $( ".cross" ).show();
        });
        });
        
        $( ".cross" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
        $( ".cross" ).hide();
        $( ".hamburger" ).show();
        });
        });
        
       

   


});