function blowCandles() {
  const candles = document.getElementById('candles');
  const wishMessage = document.getElementById('wish-message');

  candles.style.display = 'none';
  wishMessage.innerText = "🎇 The candles are out... but your wish is written in the stars. 🌌\nWhatever you long for, the universe just heard it.";
}
