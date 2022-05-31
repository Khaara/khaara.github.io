var navbarTogglerObject = document.getElementById("navbarToggler");

function changeNavbarMenuPositionAttribute(){
  
  console.log("probando");
  var navbarMenuObject = document.getElementById("navbarMenu");
  console.log(navbarMenuObject);
  console.log(navbarTogglerObject);
  var seeIfContainsCollapsedClass = navbarTogglerObject.classList.contains("collapsed");
  console.log(seeIfContainsCollapsedClass);

  if(!navbarTogglerObject.classList.contains("collapsed")){
    navbarMenuObject.style.position = "absolute";

  }else{
    navbarMenuObject.style.position = "initial";
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

  