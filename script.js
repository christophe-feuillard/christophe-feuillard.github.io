console.log(document.getElementById('emailspan'));
console.dir(document.getElementById('emailspan'));

console.log(document.getElementsByClassName('copy'));
console.dir(document.getElementsByClassName('copy'));

document.getElementById('copy').addEventListener('click', function () {


     var copySpan = document.getElementById('emailspan');
     copySpan.select();
      

});

document.getElementById('copy2').addEventListener('click', function () {


     var copySpan = document.getElementById('spannumtel');
     copySpan.select();
      

});