let current = 0
const nodes = document.querySelectorAll('.image')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const lib = document.querySelectorAll('.lib')

window.open()

lib.addEventListener('click', () => {
  window.open('http://gum.co/humaaans')
})

function previous() {
  nextBtn.disabled = false

  nodes[current].classList.remove('active')
  current--
  nodes[current].classList.add('active')

  if (current === 0) {
    prevBtn.disabled = true
  }
}

function next() {
  prevBtn.disabled = false

  nodes[current].classList.remove('active')
  current++
  nodes[current].classList.add('active')

  if (current + 1 === nodes.length) {
    nextBtn.disabled = true
  }
}

function init() {
  prevBtn.addEventListener('click', function () {
    previous()
  })

  nextBtn.addEventListener('click', function (e) {
    next()
  })
}

init()
