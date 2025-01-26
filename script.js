document.querySelector('.card-container').addEventListener('click', () => {
  const card = document.querySelector('.card');
  card.classList.toggle('flipped');
});