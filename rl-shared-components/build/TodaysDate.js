import React from "react";

var TodaysDate = function TodaysDate() {
  return React.createElement(
    "div",
    null,
    "Today's date is " + Date()
  );
};
export default TodaysDate;