import * as path from "path"

export function getLayoutPath(layoutName: string): string {
  return path.resolve(`src/layouts/${layoutName}/index.tsx`)
}
