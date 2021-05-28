/*********************CLICK POUR COPIER UN TEXTE*********************************/

console.log(document.getElementById('emailspan'));
console.dir(document.getElementById('emailspan'));

console.log(document.getElementsByClassName('copy'));
console.dir(document.getElementsByClassName('copy'));

document.getElementById('copy').addEventListener('click', function () {

     var copySpan = document.getElementById('spannumtel');
     copySpan.select();
     

     document.execCommand("copy");

     var tooltip = document.getElementById("myTooltip");
     tooltip.innerHTML = "Copied: " + copySpan.value;
      
});

document.getElementById('copy2').addEventListener('click', function () {

     var copySpan = document.getElementById('emailspan');
     copySpan.select();
     

     document.execCommand("copy");

     var tooltip = document.getElementById("myTooltip");
     tooltip.innerHTML = "Copied: " + copySpan.value;
      
});

function outFunc() {
     var tooltip = document.getElementById("myTooltip");
     tooltip.innerHTML = "Copy to clipboard";
   }

/*************BOUTON CHANGEMENT DE THEME***************/

 let switchTheme = document.getElementById('switchtheme');
 let header = document.querySelector('header');
 let aproposdeMoi = document.getElementById('aproposdemoiid');

 let test = false;
 console.log(test);


switchTheme.addEventListener('click', () => {

     test = !test;

          if (test == true) {
          document.documentElement.style.setProperty ('--couleurcinq', 'rgb(9, 104, 29)');
          document.documentElement.style.setProperty ('--couleurune', 'rgb(9, 104, 29)');
        
     
          switchTheme.style.backgroundColor = 'rgb(9, 104, 29)'; 
          console.log(test);
           
          } else {

               document.documentElement.style.setProperty ('--couleurcinq', '#0a4a85');
               document.documentElement.style.setProperty ('--couleurune', '#0a4985');
             
               header.style.backgroundColor = ('--couleurquatres', ''); 
               aproposdeMoi.style.backgroundColor = ('--couleurquatres', '');
          
               switchTheme.style.backgroundColor = '#0a4985'; 
               console.log(test);

          }
      
});


/****************** MOUSE OVER NOM DES PROJETS*************************/

let titreTrois = document.querySelector('h3');
let lienProjets = document.getElementsByClassName('lpsenfant')[0];
console.log(lienProjets);

lienProjets.addEventListener('mouseenter', () => {


});

lienProjets.addEventListener('mouseleave', () => {

    
});

