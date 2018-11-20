$(document).ready(function() {
  bodyHeight();
});
$(window).resize(function() {
  bodyHeight();
});
function verticalScroll(elem, startingColumn) {
  let top = startingColumn * $(window).width() - $(window).scrollTop();
  $(elem).css({ top: top, left: -$(window).width() * startingColumn });
}
function horizontalScroll(elem, startingRow) {
  let left = startingRow * $(window).height() - $(window).scrollTop();
  $(elem).css({ left: left, top: -$(window).height() * startingRow });
}
function bodyHeight() {
  $("body").css({ height: $(window).width() * 2 + $(window).height() * 4 });
}
function navHighlight(section) {
  $("#menu>li>a").css({ background: "black", color: "whitesmoke" });
  $(`#menu>li>a:eq(${section})`).css({
    background: "whitesmoke",
    color: "black"
  });
}
function sectionPosition(section) {
  return $(section).offset().top + $(section).offset().left;
}

document.querySelectorAll("#menu>li>a").forEach(function(link) {
  let id = link.getAttribute("href");
  link.addEventListener("click", function() {
    $(window).scrollTop(sectionPosition(id));
  });
});

$(document).on({
  scroll: function() {
    let winTop = $(window).scrollTop();
    let winHeight = $(window).height();
    let winWidth = $(window).width();
    let main = $("#scroll-main");
    switch (true) {
      case winTop >= 2 * winWidth + 3 * winHeight - 10:
        verticalScroll(main, 2);
        navHighlight(5);
        break;
      case winTop >= 2 * winWidth + 2 * winHeight:
        verticalScroll(main, 2);
        navHighlight(4);
        break;
      case winTop >= winWidth + 2 * winHeight:
        horizontalScroll(main, 2);
        navHighlight(3);
        break;
      case winTop >= winWidth + winHeight:
        verticalScroll(main, 1);
        navHighlight(2);
        break;
      case winTop >= winHeight:
        horizontalScroll(main, 1);
        navHighlight(1);
        break;
      case winTop < winHeight:
        verticalScroll(main, 0);
        navHighlight(0);
        break;
    }
  }
});
