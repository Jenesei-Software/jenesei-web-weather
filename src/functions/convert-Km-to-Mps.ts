export function convertKmToMps(kilometersPerHour: number): number {
  return Number((kilometersPerHour * (1000 / 3600)).toFixed(1))
}
