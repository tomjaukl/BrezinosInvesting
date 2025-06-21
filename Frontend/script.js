async function fetchStock() {
  const symbol = document.getElementById('symbol').value;
  const res = await fetch(`/api/quote?symbol=${symbol}`);
  const data = await res.json();
  document.getElementById('output').textContent = JSON.stringify(data, null, 2);
}
