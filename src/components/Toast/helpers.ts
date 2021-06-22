import {
  faCheck,
  faTimes,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons'

export interface IToast {
  id: number
  variant: 'success' | 'error'
  title: string
  text: string
  timeout?: number
}

type TimingFunction = (t: number) => number

export async function animate(
  draw,
  duration: number,
  timing: TimingFunction = (fraction) => fraction
): Promise<void> {
  return new Promise((resolve, _reject) => {
    let start = performance.now()

    requestAnimationFrame(function animate(time) {
      // timeFraction goes from 0 to 1
      let timeFraction = (time - start) / duration
      if (timeFraction > 1) timeFraction = 1

      // calculate the current animation state
      let progress = timing(timeFraction)

      // draw it
      draw(progress)

      if (timeFraction < 1) {
        requestAnimationFrame(animate)
      } else {
        resolve()
      }
    })
  })
}

export function getIcon(variant: IToast['variant']): IconDefinition {
  switch (variant) {
    case 'success':
      return faCheck
    case 'error':
      return faTimes
  }
}
