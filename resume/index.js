window.onload = function () {
  document.documentElement.style.opacity = '1';
}
function menu() {
  document.querySelectorAll('.nav_item').forEach(i => i.classList.add('hidden'));
  event.target.style.background = 'rgba(255, 255, 255, .95)';
  event.target.style.color = '#282828';
}