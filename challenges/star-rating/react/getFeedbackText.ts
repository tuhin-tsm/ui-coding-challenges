export function getFeedbackText(rating: number) {
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
