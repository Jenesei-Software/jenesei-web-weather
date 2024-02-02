import { ScrollableProps, ScrollableWrapper } from '.'
import React, { useState, useEffect, FC } from 'react'

export const Scrollable2: FC<ScrollableProps> = (props) => {
  const [innerScrollTop, setInnerScrollTop] = useState(0)
  const [touchStartY, setTouchStartY] = useState(0)

  const handleInnerScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setInnerScrollTop((e.target as HTMLDivElement).scrollTop)
  }

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartY(e.touches[0].clientY)
  }

  const handleTouchMove = (e: TouchEvent) => {
    const deltaY = (e as TouchEvent).touches[0].clientY - touchStartY

    const scrollableDiv = document.getElementById(props.id)

    if (
      scrollableDiv &&
      deltaY > 0 &&
      innerScrollTop === 0 &&
      scrollableDiv.scrollTop === 0
    ) {
      e.preventDefault()
    }
  }

  useEffect(() => {
    const scrollableDiv = document.getElementById(props.id)

    if (scrollableDiv) {
      scrollableDiv.addEventListener('touchstart', handleTouchStart)
      scrollableDiv.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      })

      return () => {
        scrollableDiv.removeEventListener('touchstart', handleTouchStart)
        scrollableDiv.removeEventListener('touchmove', handleTouchMove)
      }
    }
  }, [innerScrollTop])

  return (
    <ScrollableWrapper id={props.id} onScroll={handleInnerScroll}>
      {props.children}
    </ScrollableWrapper>
  )
}
