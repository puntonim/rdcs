const onDocumentReadyAppartamenti = () => {
  showEmail();
  showPhone();
  initCollapsable();
  initRoomSlider();
};
document.addEventListener("DOMContentLoaded", onDocumentReadyAppartamenti);

const showEmail = () => {
  const emailSpans = document.querySelectorAll(".emailjs-nim");
  emailSpans.forEach((i) => {
    i.innerHTML = `<a href="mailto:info@rdcs.it" title="Email">info@rdcs.it</a>`;
  });
};

const showPhone = () => {
  const emailSpans = document.querySelectorAll(".phonejs-nim");
  emailSpans.forEach((i) => {
    i.innerHTML = `<a href="tel:+393479999999" title="Telefono">+39 347 9999999</a>`;
  });
};

const initCollapsable = () => {
  $toggleroom = $(".room-title");
  if ($toggleroom.length)
    $toggleroom.click(function () {
      var $this = $(this);
      $this.next().stop().slideToggle("slow");
      $("html, body").animate(
        {
          scrollTop: $(this).offset().top - 190,
        },
        500
      );
      if ($this.find(".icon").hasClass("icon-schliessen") === true) {
        $this.find(".icon").removeClass("icon-schliessen");
        $this.find(".icon").addClass("icon-more");
      } else {
        $this.find(".icon").addClass("icon-schliessen");
        $this.find(".icon").removeClass("icon-more");
      }
      setTimeout(function () {
        $.stellar("refresh");
      }, 500);
    });
  Mfpopup(".mfp-room");
};

const initRoomSlider = () => {
  Slickslider(".room-slider");
  // var timesRun = 0
  //   , interval = setInterval(function() {
  //     timesRun += 1;
  //     if (timesRun === 10)
  //         clearInterval(interval);
  //     $('.room-slider.slick-initialized').slick('setPosition')
  // }, 500)
};
