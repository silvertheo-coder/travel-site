class RevealOnScroll {
  constructor(els, thresholdPercent) {
     this.thresholdPercent = thresholdPercent
    this.itemsToReveal = els
    this.hideInitially()
    this.events()
  }

  events() {
    window.addEventListener('scroll', () => {

      console.log("Scroll function Run")
      this.itemsToReveal.forEach((element) => {
        this.calculateIfScrolledTo(element)
      })
    })
  }

  calculateIfScrolledTo(element) {
    let scrollPercent = (element.getBoundingClientRect().top / window.innerHeight) * 100
    if(scrollPercent < this.thresholdPercent){
      element.classList.add("reveal-item--is-visible")
    }
  }

  hideInitially() {
    this.itemsToReveal.forEach((element) => {
      element.classList.add('reveal-item')
    })
  }
}
