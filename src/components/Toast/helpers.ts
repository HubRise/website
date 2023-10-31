import { IconCode } from "@components/Icon"

export type ToastVariant = "success" | "error"

export interface IToast {
  id: number
  variant: ToastVariant
  title: string
  text: string
  timeout?: number
}

type TimingFunction = (t: number) => number

export async function animate(
  draw: (progress: number) => void,
  duration: number,
  timing: TimingFunction = (fraction) => fraction,
): Promise<void> {
  return new Promise((resolve, _reject) => {
    const start = performance.now()

    requestAnimationFrame(function animate(time) {
      // timeFraction goes from 0 to 1
      let timeFraction = (time - start) / duration
      if (timeFraction > 1) timeFraction = 1

      // calculate the current animation state
      const progress = timing(timeFraction)

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

export function getIcon(variant: IToast["variant"]): IconCode {
  switch (variant) {
    case "success":
      return "done"
    case "error":
      return "error"
  }
}
