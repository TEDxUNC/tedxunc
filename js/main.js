$(document).ready(function(){$("nav li a").on("click",function(){$("nav li a.selected").removeClass("selected"),$(this).addClass("selected")});var e=$("#home").offset().top,s=$("#speakers").offset().top,o=$("#faq").offset().top,l=$("#sponsors").offset().top,c=$("#contact").offset().top;console.log(e,s,o,l,c),$(document).scroll(function(){$(document).scrollTop()>=e&&$(document).scrollTop()<s?($("nav li a").each(function(){$(this).removeClass("selected")}),$("#navHome").addClass("selected")):$(document).scrollTop()>=s&&$(document).scrollTop()<o?($("nav li a").each(function(){$(this).removeClass("selected")}),$("#navSpeakers").addClass("selected")):$(document).scrollTop()>=o&&$(document).scrollTop()<l?($("nav li a").each(function(){$(this).removeClass("selected")}),$("#navFaq").addClass("selected")):$(document).scrollTop()>=l&&$(document).scrollTop()<c?($("nav li a").each(function(){$(this).removeClass("selected")}),$("#navSponsors").addClass("selected")):$(document).scrollTop()>=c&&($("nav li a").each(function(){$(this).removeClass("selected")}),$("#navContact").addClass("selected"))})});