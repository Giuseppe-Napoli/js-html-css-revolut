$(function(){
  // MENU A TENDINA //
  /* creo degli eventi che facciano apparire/scomparire i menù */

  /* al passaggio del mouse sul 'menu a tendina' si aggiungerà la classe active al 'td-menu' */
  $('.menu-tendina').mouseenter(function(){
    $(this).find('.td-menu').addClass('active')
  })
  /* al click del mouse sul 'menu a tendina' si rimuoverà la classe active al 'td-menu' */
  $('.menu-tendina').click(function(){
    $(this).find('.td-menu').removeClass('active')
  })
  /* all'uscita del mouse sul 'menu a tendina' si rimuoverà la classe active al 'td-menu' */
/*   $('.menu-tendina').mouseleave(function(){
    $(this).find('.td-menu').removeClass('active')
  }) */

});