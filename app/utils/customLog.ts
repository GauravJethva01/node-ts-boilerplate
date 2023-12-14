import { COLORS } from './consoleColors'

export const getColorCodes = (colors: string[]) => {
  return colors
    ?.map((cl) => COLORS[cl])
    .join('')
    .trim()
}

export const log = (
  color: string | string[] | null,
  text: string,
  ...rest: Array<string | object>
) => {
  const colors: string | undefined = color
    ? typeof color === 'string'
      ? COLORS[color] || ''
      : getColorCodes(color)
    : ''

  console.log(colors + text, ...rest, COLORS['reset'])
}
