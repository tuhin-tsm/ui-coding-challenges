const makeStarRating = function ({ defaultRating = 0, noOfStars = 5 }) {
  let rating = 0;
  let starComponent;
  const starFilledClass = "star-filled";

  function changeRating(newRating) {
    rating = newRating;
    renderChanges(rating);
  }

  function getStarComponent() {
    if (!starComponent) {
      // create Star Component
      starComponent = document.createElement("ul");
      starComponent.className = "strcomp";

      for (let index = 0; index < noOfStars; index++) {
        const li = document.createElement("li");
        li.dataset.rating = index + 1;
        li.classList.add("star");
        if (index < defaultRating) {
          li.classList.add(starFilledClass);
        }
        starComponent.append(li);
      }

      starComponent.addEventListener("mouseover", onMouseOver);
      starComponent.addEventListener("mouseleave", onMouseLeave);
      starComponent.addEventListener("click", onMouseClick);
    }

    return starComponent;
  }

  function renderChanges(rating) {
    // render UI changes as per rating passed
    for (let index = 0; index < rating; index++) {
      starComponent.children[index].classList.add(starFilledClass);
    }
    for (let index = rating; index < noOfStars; index++) {
      starComponent.children[index].classList.remove(starFilledClass);
    }
  }

  function getRating() {
    return rating;
  }

  function onMouseClick(event) {
    // click event handler
    const star = event.target;
    const isStar = star.classList.contains("star");
    if (isStar) {
      const newRating =
        event.target.dataset.rating === getRating()
          ? 0
          : event.target.dataset.rating;
      changeRating(newRating);
    }
  }

  function onMouseOver() {
    // mouseover event handler
  }

  function onMouseLeave() {
    // mouseleave event handler
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
