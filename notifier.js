function runMyScript() {
    alert()
async function logIP() {
  const response = await fetch("https://ipapi.co/json");
  const data = await response.json();
  console.log(data);
}
logIP();
}
