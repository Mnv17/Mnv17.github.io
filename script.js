//submit button

function submitForm() {
  // Submit the form to Formspree
  document.getElementById('contactForm').submit();

  // Reset the form after submission
  document.getElementById('contactForm').reset();
}

$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });


  


  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

//change the file here
document.getElementById("resume-button-1").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1IQ5rU8lzC06mR_fGWQn2jLe8S7ljAbiL/view",
    `_blank`
  );
};

document.getElementById("resume-button-2").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1IQ5rU8lzC06mR_fGWQn2jLe8S7ljAbiL/view",
    `_blank`
  );
};

GitHubCalendar(".calendar", "Mnv17", {
  responsive: true,
  global_stats: true,
  tooltips: true,
});
