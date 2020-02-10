const linear = (fraction) => fraction

export function animate({ timing = linear, draw, duration }) {
  return new Promise((resolve, reject) => {
    let start = performance.now()

    requestAnimationFrame(function animate(time) {
      // timeFraction goes from 0 to 1
      let timeFraction = (time - start) / duration
      if (timeFraction > 1) timeFraction = 1

      // calculate the current animation state
      let progress = timing(timeFraction)

      draw(progress) // draw it

      if (timeFraction < 1) {
        requestAnimationFrame(animate)
      } else {
        resolve()
      }
    })
  })
}
