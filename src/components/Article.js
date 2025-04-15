import React from "react";

export default function Article({
  title,
  date = "January 1, 1970",
  preview,
  minutes,
}) {
  //Bonus feature=minutes to read
  let displayText = "";
  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5);
    displayText = "☕️ ".repeat(cups) + `${minutes} min read`;
  } else {
    const bentos = Math.ceil(minutes / 10);
    displayText = "🍱".repeat(bentos) + `${minutes} min read`;
  }
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>

      <p>{preview}</p>
      <p>{displayText}</p>
    </article>
  );
}
