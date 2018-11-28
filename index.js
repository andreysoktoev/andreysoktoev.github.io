window.onload = function () {
  document.documentElement.style.display = 'inline';
  document.documentElement.style.opacity = '1';
}
// Размеры окна
let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
function heightChecker() {
  alert('Высота с учетом прокрутки: ' + scrollHeight);
}