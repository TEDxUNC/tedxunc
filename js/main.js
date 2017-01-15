$(document).ready(function(){
    $('nav li a').on('click', function(){
        $('nav li a.selected').removeClass('selected');
        $(this).addClass('selected');
    });

    var top1 = $('#home').offset().top;
    var top2 = $('#speakers').offset().top;
    var top3 = $('#faq').offset().top;
    var top4 = $('#sponsors').offset().top;
    var top5 = $('#contact').offset().top;

    console.log(top1, top2, top3, top4, top5);

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

});