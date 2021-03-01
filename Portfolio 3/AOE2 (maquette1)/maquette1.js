


/***********************FAUT QUE JE FASSE UNE BOUCLE ********************************/
/*********** 37 CIV EN TOUT (-1 avec aztecs)*****************/

document.write('<div class="big_container">');
 document.write('<nav class="nav_des_civ">');

 for (i = 0; i <= 37; i++) {

    for (u = 0; u <= 37; u++) {  

        if ([i] && [u] == 0) {
        document.write('<section class="forme" id="formeId">');
        }
                 
    }

           for (e = 0; e <= 37; e++) {
                           
            if (i == 0) {
              imgCiv = document.write('<div id="aztecs"></div>');   
            }
            else if (i == 1) {       
            imgCiv = document.write('<div id="berbers"></div>');    
            }   
            else if (i == 2) {
            imgCiv = document.write('<div id="britons"></div>');    
            } 
            else if (i == 3) {
            imgCiv = document.write('<div id="bulgarians"></div>');    
            } 
            else if (i == 4) {
            imgCiv = document.write('<div id="burgundians"></div>');    
            } 
            else if (i == 5) {
            imgCiv = document.write('<div id="burmese"></div>');    
            } 
            else if (i == 6) {
            imgCiv = document.write('<div id="byzantines"></div>');    
            } 
              
          } 
                             
          document.write('<p class="civname">aztèques');
           document.write('<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" id="return_button" class="bi bi-backspace-fill" viewBox="0 0 16 16">');
           document.write('<path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>');
           document.write('</svg>');               
          document.write('</p>');
          document.write('<p class="civ_descriptif"><br>');
           document.write('<span class="type_de_civ">Civilisation d\'infanterie et de moines</span> <br>  <br>');
           document.write('• Les villageois portent +3  <br>');
           document.write('• Les unités militaires sont créées 11 % plus vite  <br> ');
           document.write(' •  <span class="code_couleur_pv">+5 PV</span> pour les moines pour chaque technologie du monastère  <br> ');
           document.write('   • Commence avec <span class="code_couleur_gold">+50 d\'or</span>  <br></br><br> ');
           document.write('  Unité unique :  <br> Guerrier jaguar (infanterie)  <br>  <br> ');       
           document.write('Technologies uniques :  <br> • Propulseur (les tirailleurs ont <span class="code_couleur_atk">+1 d\'attaque</span> et de portée)  <br>• Guerres glorieuses (<span class="code_couleur_atk">+4 d\'attaque</span> d\'infanterie)  <br><br> ');
           document.write(' Bonus d\'équipe :  <br></br> Les reliques génèrent <span class="code_couleur_gold">+33 % d\'or</span>');
          document.write('</p>');
        
    document.write('</section>');

} 

 document.write('</nav>');
document.write('</div>');



/****************************************************************/

const sectionCiv = document.querySelector('#formeId');  
const sectionCivv = document.querySelector('#formeIddeux');  

/***********TROUVER UN MOYEN DE POUVOIR METTRE DES ADDEVENTLISTENER A TOUTES MES ID QUI BOUCLE*************/

/****************************************************************/

sectionCiv.addEventListener('click', function () {

  let quelqueChose = true;
  sectionCiv.style.marginLeft = '130px';
  sectionCiv.style.position = 'absolute'; 

  if (quelqueChose == true && sectionCiv.style.position == "absolute") {

   setTimeout(function () {

     sectionCiv.style.width = '600px';
     sectionCiv.style.height = '900px';
     sectionCiv.style.backgroundColor = 'rgb(53, 60, 128)';  
   
   }, 600);

 } 


});


document.getElementById('return_button').addEventListener('click', function (e) {

  let variableUne = document.getElementById('formeId');
  variableUne.style.height = '110px';

  setTimeout(function () {

    let variableUne = document.getElementById('formeId');
    variableUne.style.width = '110px';
    variableUne.style.marginLeft = '10px';
    variableUne.style.position = 'relative'; 
    variableUne.style.backgroundColor = 'rgb(13, 16, 41)';  
     
  }, 800);

  e.stopPropagation();
   
});

/**************************************************************/














