async function getQuote() {
  const symbol = document.getElementById("symbol").value.toUpperCase();
  const resultDiv = document.getElementById("result");

  try {
    const response = await fetch(`/api/quote?symbol=${symbol}`);
    const data = await response.json();

    if (data.c) {
      resultDiv.innerHTML = `
        <p>Current Price: $${data.c}</p>
        <p>High: $${data.h}</p>
        <p>Low: $${data.l}</p>
        <p>Open: $${data.o}</p>
      `;
    } else {
      resultDiv.innerHTML = `<p>No data found for "${symbol}"</p>`;
    }
  } catch (err) {
    resultDiv.innerHTML = `<p>Error fetching data</p>`;
  }
}
