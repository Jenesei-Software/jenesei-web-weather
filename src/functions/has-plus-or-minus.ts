export function hasPlusOrMinus(num: number): boolean {
  const numString: string = num.toString()
  return numString.includes('+') || numString.includes('-')
}
