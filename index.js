window.onload = function () {
  document.documentElement.style.display = 'inline';
  document.documentElement.style.opacity = '1';
  document.body.style.minHeight = window.innerHeight + 'px';
}

function heightChecker() {
  let scrollHeight = Math.max(
    // document.body.scrollHeight, document.documentElement.scrollHeight,
    // document.body.offsetHeight, document.documentElement.offsetHeight,
    // document.body.clientHeight, document.documentElement.clientHeight
    window.innerHeight
  );
  alert('Высота с учетом прокрутки: ' + scrollHeight);
}