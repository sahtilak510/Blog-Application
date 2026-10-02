import { useEffect, useState } from "react"

const cache = new Map()

const loadImageSize = (src) =>
  new Promise((resolve, reject) => {
    const cached = cache.get(src)
    if (cached) {
      resolve(cached)
      return
    }
    const img = new Image()
    img.onload = () => {
      const size = {
        width: img.naturalWidth,
        height: img.naturalHeight,
        ratio: img.naturalWidth / img.naturalHeight,
      }
      cache.set(src, size)
      resolve(size)
    }
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
    img.src = src
  })

export const useImageSize = (src) => {
  const [size, setSize] = useState(() => (src ? (cache.get(src) ?? null) : null))

  useEffect(() => {
    if (!src || cache.has(src)) return
    let active = true
    loadImageSize(src).then(
      (result) => {
        if (active) setSize(result)
      },
      () => {
        if (active) setSize(null)
      },
    )
    return () => {
      active = false
    }
  }, [src])

  if (!src) return null
  return cache.get(src) ?? size
}