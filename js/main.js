var initMap = function(){
    var loc = {lat: 35.9111, lng: -79.0519};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: loc,
        scrollwheel: false
    });
    var marker = new google.maps.Marker({
        position: loc,
        map: map
    });
}

$(document).ready(function(){
    //initMap();

    var top1 = $('#home').offset().top;
    var top2 = $('#speakers').offset().top;
    var top3 = $('#faq').offset().top;
    var top4 = $('#sponsors').offset().top;
    var top5 = $('#contact').offset().top;

    $(document).scroll(function() {
        if ($(document).scrollTop() >= top1 && $(document).scrollTop() < top2) {
            $('nav li a').each(function(){
                $(this).removeClass('selected');
            });
            $('#navHome').addClass('selected');
        } else if ($(document).scrollTop() >= top2 && $(document).scrollTop() < top3) {
            $('nav li a').each(function(){
                $(this).removeClass('selected');
            });
            $('#navSpeakers').addClass('selected');
        } else if ($(document).scrollTop() >= top3 && $(document).scrollTop() < top4) {
            $('nav li a').each(function(){
                $(this).removeClass('selected');
            });
            $('#navFaq').addClass('selected');
        } else if ($(document).scrollTop() >= top4 && $(document).scrollTop() < top5) {
            $('nav li a').each(function(){
                $(this).removeClass('selected');
            });
            $('#navSponsors').addClass('selected');
        } else if ($(document).scrollTop() >= top5) {
            $('nav li a').each(function(){
                $(this).removeClass('selected');
            });
            $('#navContact').addClass('selected');
        }
    });

    var accordion = $(".accordion");

    for (var i = 0; i < accordion.length; i++) {
        accordion[i].onclick = function(){
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            } 
        }
    }
});
