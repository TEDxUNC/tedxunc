var initMap=function(){var e={lat:35.9111,lng:-79.0519},o=new google.maps.Map(document.getElementById("map"),{zoom:14,center:e,scrollwheel:!1});new google.maps.Marker({position:e,map:o})};$(document).ready(function(){function e(){o.height($(window).height())}var o=$(".anchor .container");$(window).resize(e),e();var t=$(".nav").height(),s=$("#home").offset().top,l=$("#speakers").offset().top-t,a=$("#faq").offset().top-t,n=$("#sponsors").offset().top-t,c=$("#contact").offset().top-t;$(document).scroll(function(){$(document).scrollTop()>=s&&$(document).scrollTop()<l?($("nav li a").each(function(){$(this).removeClass("selected")}),$("#navHome").addClass("selected")):$(document).scrollTop()>=l&&$(document).scrollTop()<a?($("nav li a").each(function(){$(this).removeClass("selected")}),$("#navSpeakers").addClass("selected")):$(document).scrollTop()>=a&&$(document).scrollTop()<n?($("nav li a").each(function(){$(this).removeClass("selected")}),$("#navFaq").addClass("selected")):$(document).scrollTop()>=n&&$(document).scrollTop()<c?($("nav li a").each(function(){$(this).removeClass("selected")}),$("#navSponsors").addClass("selected")):$(document).scrollTop()>=c&&($("nav li a").each(function(){$(this).removeClass("selected")}),$("#navContact").addClass("selected"))});for(var i=$(".accordion"),d=0;d<i.length;d++)i[d].onclick=function(){this.classList.toggle("active");var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block",e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}});