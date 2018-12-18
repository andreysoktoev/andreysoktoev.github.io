window.onload = function () {
  document.documentElement.style.opacity = '1';
}
function menu() {
  if (event.target.dataset.hidden == 1) {
    document.querySelectorAll('.nav_item').forEach(i => i.classList.add('open'));
    event.target.dataset.hidden = '0';
  }
  else {
    document.querySelectorAll('.nav_item').forEach(i => i.classList.remove('open'));
    event.target.dataset.hidden = '1';
  }
}