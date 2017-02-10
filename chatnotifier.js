(function () {
  var chatIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABi0lEQVQ4EXWSsS4EURSGZ3bHRhSyEhKFrEbsC0iwjYhIvINottAovYGoNB7CEwgKRKVQEFQahYiCRCIRIgpmff+dc8bYHTf55pz7n3PP3HPvjTudTuQjjuMq82+fl1lyEnK+8pgKWBEF3F8l4QTu4AHOYROGunNjCV4VO03SPgyYvcK+wRgswiSssGbX1zCPtG3ZKZCzAaGw9CLo8/AILVtTzRMQb6DtC/CTLmq2aAH92PyK97yEuGdiDf+/HfhuD8lpKL+CozEBF8GLopTA79WYaMb1lHkszQs84TckMEIgc7MvB6bRT90UO4tax7+X6C30IV7DjP1c/VeNvB3mI/AMy4W8/BbmCNzCqIJF0IZhHdTCti3OzsMmFbOnJAzCOFyCHpCKqucX0BvARCFffkIbmqi3JoE6tGENDkALX+GMnCOsHl3Pc/er2SL+DjvQVPVu0PPn7rFwQARUuYX5JKCta66DDfs1W3q9xQK6Pp2ybuADtHVp1Mwax+8Zfwp4In/39xEWoOssSscPiGYkD2vHJ+IAAAAASUVORK5CYII=";
  var originalLink = document.querySelector('[rel="shortcut icon"],[rel="icon"]');
  var originalIcon = originalLink.href;

  function setImage(href) {
    var elts = document.querySelectorAll('[rel="shortcut icon"],[rel="icon"]');
    for (var i = 0; i < elts.length; i++) {
      elts[i].dataset.oldHref = elts[i].href;
      elts[i].href = href;
    }
  }

  function resetImage() {
    var elts = document.querySelectorAll('[rel="shortcut icon"],[rel="icon"]');
    for (var i = 0; i < elts.length; i++) {
      if (elts[i].href === chatIcon) {
        elts[i].href = elts[i].dataset.oldHref;
      }
    }
  }

  var title = document.querySelector('title');
  var observer = new MutationObserver(function () {
    if (title.innerHTML.indexOf('says...') > -1) {
      setImage(chatIcon);
    } else {
      resetImage();
    }
  });
  observer.observe(title, { childList: true, subtree: true });
})()
