let wd = $(window);
$("section[data-type=background]").each(function () {
  let bg = $(this);
  wd.scroll(function () {
    let yPos = -(wd.scrollTop() / bg.data("speed"));
    let coords = "50%" + yPos + "px";
    bg.css({ backgroundPosition: coords });
  });
});
