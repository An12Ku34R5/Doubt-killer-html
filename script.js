async function askDoubt() {
  const question = document.getElementById('question').value;
  const responseDiv = document.getElementById('response');
  responseDiv.innerHTML = "Soch raha hoon... 🤔";

  try {
    const res = await fetch("https://api.ankurai.tech/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ question })
    });

    const data = await res.json();
    responseDiv.innerHTML = data.answer || "Koi jawaab nahi mila.";
  } catch (err) {
    responseDiv.innerHTML = "Error: " + err.message;
  }
}
