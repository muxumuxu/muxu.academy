function toggleMenu() {
  var body = document.getElementsByTagName('BODY')[0]
  var x = document.getElementById('menu')
  body.classList.toggle('menu-open')
  x.classList.toggle('responsive')
}
