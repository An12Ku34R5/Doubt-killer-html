
const form = document.querySelector("form");
const input = document.querySelector("textarea");
const output = document.querySelector("#output");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const question = input.value.trim();
  if (!question) return;

  output.innerText = "Thinking... 🤔";

  try {
    const res = await fetch("https://doubt-killer-api.onrender.com/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ question })
    });

    const data = await res.json();

    if (data && data.answer) {
      output.innerText = "Answer: " + data.answer;
    } else {
      output.innerText = "Sorry, couldn't get an answer.";
    }
  } catch (err) {
    console.error(err);
    output.innerText = "Error: Failed to fetch answer.";
  }
});
