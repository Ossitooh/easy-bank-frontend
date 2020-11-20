var hamburgerBtn = document.getElementById('hamburgerBtn');
var nav = document.querySelector('.nav-ul');
var cta = document.querySelectorAll('.cta-links');

// Toggle On & Off Class for the navigation 
function btnClick() {
    hamburgerBtn.classList.toggle('close');
    hamburgerBtn.classList.toggle('open');
    nav.classList.toggle('show');
    nav.classList.toggle('site-nav--open');
}

// Set the Btn To Wait for a Click
hamburgerBtn.addEventListener("click", () => {
    btnClick();
});

// Close Nav When Click on Liks
for(var i = 0; i < cta.length; i++) {
    cta[i].onclick = function() {
        btnClick();
    }
}
    
// Jquey for the nav scrolling
$(document).ready(function() {

    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
});
   