const priceToggler = document.querySelector('.price-toggler');
const priceTogglers = document.querySelector('.price-togglers');
const price = document.querySelectorAll('.price')
const duration = document.querySelectorAll('.duration')
const prices = document.querySelectorAll('.prices')
const durations = document.querySelectorAll('.durations')

priceToggler.onclick = () => {
     priceToggler.classList.toggle('active');

     if (priceToggler.classList.contains('active')) {
          for (let i = 0; i < duration.length; i++) {
               duration[i].innerText = 'per year'
          }
          for (let k = 0; k < duration.length; k++) {
               price[k].innerText = price[k].innerText * 10
          }
     }
     else {
          for (let i = 0; i < duration.length; i++) {
               duration[i].innerText = 'per month'
          }

          for (let k = 0; k < duration.length; k++) {
               price[k].innerText = price[k].innerText / 10
          }
     }
}

priceTogglers.onclick = () => {
     priceTogglers.classList.toggle('active');

     if (priceTogglers.classList.contains('active')) {
          for (let i = 0; i < durations.length; i++) {
               durations[i].innerText = 'per year'
          }
          for (let k = 0; k < duration.length; k++) {
               prices[k].innerText = prices[k].innerText * 10
          }
     }
     else {
          for (let i = 0; i < durations.length; i++) {
               durations[i].innerText = 'per month'
          }

          for (let k = 0; k < durations.length; k++) {
               prices[k].innerText = prices[k].innerText / 10
          }
     }
}



function myFunction() {
     var dots = document.getElementById("dots");
     var moreText = document.getElementById("more");
     var btnText = document.getElementById("myBtn");


     if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
     } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
     }
}


document.addEventListener("domcontentload", function () {

     const tabs = document.querySelectorAll(".btn-hover")

     tabs.forEach(function (tab) {
          tab.addEventListener("click", function () {
               tab.classList.remove("active")
          });
          tab.classList.add("active")
     })

});


 
$(document).ready(function(){
     $('.dropdown').on('show.bs.dropdown', function() {
       $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
     });
     // Add slideUp animation to Bootstrap dropdown when collapsing.
     $('.dropdown').on('hide.bs.dropdown', function() {
       $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
     });
     $('#searchlink').on('click', function(e) {
           e.preventDefault();
           $(this).parent().toggleClass('open');
      });
      $(document).on("click", function(e) {
         if ($(e.target).parent().is("#searchlink") === false &&
           $(e.target).is("#search") === false ) {
           $("#search-wrapper").removeClass("open");
         }
       });
   });

   
   