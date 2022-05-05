$(document).ready(function(){

   setTitle();

   let okretanjeSlova = setInterval(function(){
      let rand = Math.floor(Math.random() * 16);
      let izabrani = $('.letter').eq(rand);
      if(izabrani.hasClass('rotiraj')){
         izabrani.removeClass('rotiraj');
      } else {
         izabrani.addClass('rotiraj');
      }
   }, 1000);

   function setTitle(){
      let titleLetters = $('.letter');
      titleLetters.each(function(i, el){
         let r = Math.floor(Math.random() * 255);
         let g = Math.floor(Math.random() * 255);
         let b = Math.floor(Math.random() * 255);
         let color = `rgb(${r},${g},${b})`;
         $(el).css('color', `${color}`);
      })
   }

   $('.start').on('click', function(){
      $(this).hide();
      $('.broj').prop("disabled", false);
      $('.broj').focus();
      let randomNumber = Math.floor(Math.random() * 1000);
      let poruka = $('.poruke');
      let pokusaj = 1;
      poruka.text('Možemo da počnemo. Ja sam već zamislio broj!');

      $('.btnSubmit').on('click', checkNumber());
      $('.broj').on('keypress', function(e){
         if(e.which == 13){
            checkNumber();
         }
      })

      function checkNumber(){
         let mojBroj = parseInt($('.broj').val());
         if(mojBroj == randomNumber){
            poruka.text('Bravo! Pogodio si broj! Broj pokušaja: ' + pokusaj);
            $('.broj').prop("disabled", true);
         }else if(mojBroj < randomNumber){
            poruka.text('Moj broj je veći! Pokušaj ponovo.');
         }else if(mojBroj > randomNumber){
            poruka.text('Moj broj je manji! Pokušaj ponovo.');
         }
         if(!mojBroj){
            $('.zamisljeni-broj').text("???");
         }else{
            $('.zamisljeni-broj').text(mojBroj);
         }
         $('.broj').val('');
         $('.broj').focus();
         pokusaj++;
      }
   });
})