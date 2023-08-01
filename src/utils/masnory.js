import Masonry from 'masonry-layout'

//Masonry Layout
document.addEventListener('DOMContentLoaded', function () {
  const grid = document.getElementById('grid')
  const msnry = new Masonry(grid, {
    itemSelector: '.CourseCard',
    columnWidth: '.CourseCard',
    percentPosition: true,
    gutter: 24,
    resize: true,
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  })
})

//if there are less than or equal to 2 cards, remove id grid from that specific Catalog__body using index and add class Flex
const gridElement = document.querySelectorAll('.GridElement')
gridElement.forEach((item, index) => {
  if (item.childElementCount <= 2) {
    item.removeAttribute('id')
    item.classList.add('Flex')
  }
})

export default Masonry
