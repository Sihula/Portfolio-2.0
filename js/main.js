$(function () {
  $(".menu__btn").on("click", function () {
    $(".menu__list").slideToggle();
  });

  //E-mail Ajax Send
  $("form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize(),
    }).done(function () {
      alert("Thank you!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  $(".slider__inner").slick({
    autoplay: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
  });

  var mixer = mixitup(".mixtup");
  var mixer = mixitup(mixtupEl);
  var mixer = mixitup(containerEl, {
    selectors: {
      target: ".blog-item",
    },
    animation: {
      duration: 300,
    },
  });
});
