const makeStarRating = function ({ defaultRating = 0, noOfStars = 5 }) {
  let rating = 0;
  let containerEl;
  let starEl;
  let feedbackEl;
  const starFilledClass = "star-filled";

  function changeRating(newRating) {
    rating = Number(newRating);
  }

  function getStarComponent() {
    if (!starEl) {
      rating = defaultRating;
      // create Star Component
      containerEl = document.createElement("span");
      containerEl.className = "container";

      feedbackEl = document.createElement("span");
      feedbackEl.className = "feedback";

      starEl = document.createElement("span");
      starEl.className = "rating-root";

      for (let index = 0; index < noOfStars; index++) {
        const singleStar = document.createElement("span");
        singleStar.dataset.rating = index + 1;
        singleStar.classList.add("star");
        if (index < defaultRating) {
          singleStar.classList.add(starFilledClass);
        }
        starEl.append(singleStar);
      }

      starEl.addEventListener("mouseover", onMouseOver);
      starEl.addEventListener("mouseleave", onMouseLeave);
      starEl.addEventListener("click", onMouseClick);

      containerEl.append(starEl, feedbackEl);
    }

    return containerEl;
  }

  function getFeedbackText(rating) {
    let feedbackText;
    switch (rating) {
      case 1:
        feedbackText = "Useless";
        break;

      case 2:
        feedbackText = "Poor";
        break;

      case 3:
        feedbackText = "Ok";
        break;

      case 4:
        feedbackText = "Good";
        break;

      case 5:
        feedbackText = "Excellent";
        break;

      default:
        feedbackText = "";
        break;
    }

    return feedbackText;
  }

  function renderChanges(rating) {
    const _rating = Number(rating);
    // render UI changes as per rating passed
    for (let index = 0; index < _rating; index++) {
      starEl.children[index].classList.add(starFilledClass);
    }
    for (let index = _rating; index < noOfStars; index++) {
      starEl.children[index].classList.remove(starFilledClass);
    }

    feedbackEl.textContent = getFeedbackText(_rating);
  }

  function getRating() {
    return rating;
  }

  function onMouseClick(event) {
    // click event handler
    const isStar = event.target.classList.contains("star");
    if (isStar) {
      const newRating =
        event.target.dataset.rating === getRating()
          ? 0
          : event.target.dataset.rating;
      changeRating(newRating);
      renderChanges(rating);
    }
  }

  function onMouseOver(event) {
    // mouseover event handler
    const isStar = event.target.classList.contains("star");
    if (isStar) {
      renderChanges(event.target.dataset.rating);
    }
  }

  function onMouseLeave() {
    // mouseleave event handler
    renderChanges(rating);
  }

  return { getRating, getStarComponent };
};

// Utilization/Showcase
const hr = document.createElement("hr");

const starRatingModule1 = makeStarRating({});
const starRating1 = starRatingModule1.getStarComponent();

const starRatingModule2 = makeStarRating({ defaultRating: 3 });
const starRating2 = starRatingModule2.getStarComponent();

const mainEl = document.querySelector("main");
mainEl.append(starRating1, hr, starRating2);
