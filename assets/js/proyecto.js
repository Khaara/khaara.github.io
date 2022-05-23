function changeNavbarMenuPositionAttribute(){
  var navbarTogglerObject =document.getElementById("navbar-toggler");
  console.log("probando");
  var navbarObject = document.getElementById("navbarMenu");
  console.log(navbarObject)

  if(!navbarTogglerObject.classList.contains("collapsed")){
    navbarObject.style.position = "static";

  }else{
    navbarObject.style.position = "absolute";
  }

}

window.onresize = changeNavbarMenuPositionAttribute;




/*$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
});
document.querySelector(li).

$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $('nav').addClass('bg-dark');
    }

    else{
        $('nav').removeClass('bg-dark');
    }
})


$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  
.navbar-fixed-top.scrolled {
  background-color: #fff !important;
  transition: background-color 200ms linear;
}
  */

  