$('#Magnificent_toggler').click(function(){
    $('#gallery_Unrivalled').removeClass('tab_active');
    $('#gallery_Inimitable').removeClass('tab_active');
    $('#gallery_Magnificent').addClass('tab_active');
})

$('#Unrivalled_toggler').click(function(){
    $('#gallery_Magnificent').removeClass('tab_active');
    $('#gallery_Inimitable').removeClass('tab_active');
    $('#gallery_Unrivalled').addClass('tab_active');
})

$('#Inimitable_toggler').click(function(){
    $('#gallery_Unrivalled').removeClass('tab_active');
    $('#gallery_Magnificent').removeClass('tab_active');
    $('#gallery_Inimitable').addClass('tab_active');
})
$('#Magnificent_toggler_nav').click(function(){
    $('#gallery_Unrivalled').removeClass('tab_active');
    $('#gallery_Inimitable').removeClass('tab_active');
    $('#gallery_Magnificent').addClass('tab_active');
})

$('#Unrivalled_toggler_nav').click(function(){
    $('#gallery_Magnificent').removeClass('tab_active');
    $('#gallery_Inimitable').removeClass('tab_active');
    $('#gallery_Unrivalled').addClass('tab_active');
})

$('#Inimitable_toggler_nav').click(function(){
    $('#gallery_Unrivalled').removeClass('tab_active');
    $('#gallery_Magnificent').removeClass('tab_active');
    $('#gallery_Inimitable').addClass('tab_active');
})

$('.header_nav_toggler').click(function(){
    $('.header_nav_holder').toggleClass('nav_active');
    
})

$( "select" ).change(function(){
    if ($( "select option:selected" ).hasClass('Magnificent_toggler_mobile')) {
        $('#gallery_Unrivalled').removeClass('tab_active');
        $('#gallery_Inimitable').removeClass('tab_active');
        $('#gallery_Magnificent').addClass('tab_active');
    }
    
    if ($( "select option:selected" ).hasClass('Unrivalled_toggler_mobile')) {
        $('#gallery_Magnificent').removeClass('tab_active');
        $('#gallery_Inimitable').removeClass('tab_active');
        $('#gallery_Unrivalled').addClass('tab_active');
    }

    if ($( "select option:selected" ).hasClass('Inimitable_toggler_mobile')) {
        $('#gallery_Unrivalled').removeClass('tab_active');
        $('#gallery_Magnificent').removeClass('tab_active');
        $('#gallery_Inimitable').addClass('tab_active');
    }
})




var slideIndex = 1;

showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides1");
  var dots = document.getElementsByClassName("dots1");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
}

var slideIndex = 1;

showSlides2(slideIndex);

function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("slides2");
  var dots = document.getElementsByClassName("dots2");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
}

var slideIndex = 1;

showSlides3(slideIndex);

function currentSlide3(n) {
  showSlides3(slideIndex = n);
}

function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("slides3");
  var dots = document.getElementsByClassName("dots3");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


