export function getUsEPAIndexToTitle(
  usEpaIndex: number,
  postTitle?: string
): string {
  let title = postTitle || ''

  switch (usEpaIndex) {
    case 1:
      title += ' Good'
      break
    case 2:
      title += ' Moderate'
      break
    case 3:
      title += ' Unhealthy for Sensitive Groups'
      break
    case 4:
      title += ' Unhealthy'
      break
    case 5:
      title += ' Very Unhealthy'
      break
    case 6:
      title += ' Hazardous'
      break
    default:
      title += ' Good'
  }

  return title.trim()
}
