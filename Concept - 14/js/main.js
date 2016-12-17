var mousePointer = document.getElementById('blockMove')
document.addEventListener('mousemove', function (e) {
  var w = getComputedStyle(document.documentElement).width.slice(0, -2),
      h = getComputedStyle(document.documentElement).height.slice(0, -2),
      rx = (h / 2 - e.pageY) / 35,
      ry = (w / 2 - e.pageX) / 35;
  mousePointer.style.transform = 'rotateX(' + rx + 'deg) rotateY(' + -ry + 'deg)';
})
