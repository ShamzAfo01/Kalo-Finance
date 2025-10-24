
document.addEventListener('DOMContentLoaded', () => {
  const subtext = document.getElementById('subtext');
  if (subtext) {
    const lines = subtext.querySelectorAll('.line');
    lines.forEach(line => {
      const words = line.textContent.trim().split(' ');
      line.innerHTML = ''; // Clear existing content
      words.forEach(word => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';
        wordSpan.textContent = word;
        line.appendChild(wordSpan);
        line.appendChild(document.createTextNode(' ')); // Add space between words
      });
    });

    const wordSpans = subtext.querySelectorAll('.word');
    let delay = 0;
    wordSpans.forEach(span => {
      setTimeout(() => {
        span.classList.add('revealed');
      }, delay);
      delay += 1000;
    });
  }
});
