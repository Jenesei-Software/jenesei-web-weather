export function getUVIndexToTitle(
  uvIndex: number | string,
  postTitle?: string
): string {
  let title = postTitle || ''
  switch (+uvIndex) {
    case 0:
      title += ' Low'
      break
    case 1:
      title += ' Low'
      break
    case 2:
      title += ' Low'
      break
    case 3:
      title += ' Moderate'
      break
    case 4:
      title += ' Moderate'
      break
    case 5:
      title += ' Moderate'
      break
    case 6:
      title += ' High'
      break
    case 7:
      title += ' High'
      break
    case 8:
      title += ' Very High'
      break
    case 9:
      title += ' Very High'
      break
    case 10:
      title += ' Very High'
      break
    default:
      title += ' Extreme'
  }

  return title.trim()
}
