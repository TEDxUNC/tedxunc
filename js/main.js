var initMap=function(){var e={lat:35.9111,lng:-79.0519},o=new google.maps.Map(document.getElementById("map"),{zoom:14,center:e,scrollwheel:!1});new google.maps.Marker({position:e,map:o})};$(document).ready(function(){var e=$(".nav").height(),o=$("#home").offset().top,t=$("#speakers").offset().top-e,l=$("#faq").offset().top-e,s=$("#sponsors").offset().top-e,n=$("#contact").offset().top-e;$(document).scroll(function(){$(document).scrollTop()>=o&&$(document).scrollTop()<t?($("nav li a").each(function(){$(this).removeClass("selected")}),$("#navHome").addClass("selected")):$(document).scrollTop()>=t&&$(document).scrollTop()<l?($("nav li a").each(function(){$(this).removeClass("selected")}),$("#navSpeakers").addClass("selected")):$(document).scrollTop()>=l&&$(document).scrollTop()<s?($("nav li a").each(function(){$(this).removeClass("selected")}),$("#navFaq").addClass("selected")):$(document).scrollTop()>=s&&$(document).scrollTop()<n?($("nav li a").each(function(){$(this).removeClass("selected")}),$("#navSponsors").addClass("selected")):$(document).scrollTop()>=n&&($("nav li a").each(function(){$(this).removeClass("selected")}),$("#navContact").addClass("selected"))});for(var a=$(".accordion"),c=0;c<a.length;c++)a[c].onclick=function(){this.classList.toggle("active");var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block",e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"};var i=$(".modal"),d=$(".headshot"),r=$(".close");d.toArray().map(function(e,o){e.onclick=function(){i[o].style.display="block"}}),r.toArray().map(function(e,o){e.onclick=function(){i[o].style.display="none"}}),window.onclick=function(e){for(var o=0;o<i.length;o++)e.target==i[o]&&(i[o].style.display="none")}});