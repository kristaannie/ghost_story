var app={};app.showInitialPage=function(){document.body.insertAdjacentHTML("beforeend","<h2>TODO: Remove example.js</h2><p>And change init.js to do whatevz you need</p>")},$(function(){console.log("ready!"),$(".slide, .super-late, .left-arrow, .right-arrow").hide(),$(".welcome-slide").show().click(function(){function e(){$(".slide-1").hide(),$(".slide-1").delay(2100).fadeIn(6500,"linear").animate({opacity:.2},15e3),setTimeout(i,4200)}function i(){$(".slide-2").hide(),$(".text-ease-in").hide(),$(".slide-2").delay(2e3).fadeIn(5e3).animate({opacity:.16},46e3),$(".text-ease-in").fadeIn(17e3),setTimeout(t,17e3)}function t(){$(".slide-3").hide(),$(".slide-3").delay(2e3).fadeIn(6e3).animate({opacity:.2},57e3),setTimeout(a,4e3)}function a(){$(".slide-4").hide(),$(".slide-4").delay(2e3).fadeIn(3500).animate({opacity:.2},77e3),$(".right-arrow, .left-arrow").fadeIn(500),setTimeout(n,9e3)}function n(){$(".slide-5").hide(),$(".text-ease-in-2").hide(),$(".slide-5").delay(2e3).fadeIn(2e3).animate({opacity:.2},97e3),$(".text-ease-in").fadeIn(17e3),$(".right-arrow, .left-arrow").fadeIn(500),setTimeout(d,9e3)}function d(){$(".slide-6").hide(),$(".slide-6").delay(2e3).fadeIn(2e3).animate({opacity:.2},117e3),$(".right-arrow, .left-arrow").fadeIn(500),setTimeout(o,9e3)}function o(){$(".slide-7").hide(),$(".slide-7").delay(2e3).fadeIn(2e3).animate({opacity:.2},137e3),$(".right-arrow, .left-arrow").fadeIn(500),setTimeout(l,9e3)}function l(){$(".slide-8").hide(),$(".slide-8").delay(2e3).fadeIn(2e3),setTimeout(s)}function s(){$(".super-late").hide(),$(".super-late").delay(1e3).fadeIn(8e3)}$(".welcome-slide").fadeOut(2e3),e()}),window.onscroll=function(e){window.innerHeight+window.scrollY>=document.body.offsetHeight&&($(".right-arrow, .left-arrow").hide("slow"),console.log("biatch!"))}});
//# sourceMappingURL=app.js.map
