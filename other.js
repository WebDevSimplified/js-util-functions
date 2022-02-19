export function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function sleep(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}

// map a value from one range of values to another rabge of values
// mapRange(10, 0, 10, 0, 255) -> 255
// mapRange(1, 0, 10, 0, 100) -> 10
// mapRange(75, 0, 100, 0, 10) -> 7.5
export function mapRange(value, srcRangeMin, srcRangeMax, destRangeMin, destRangeMax) {
  return (value - srcRangeMin) * (destRangeMax - destRangeMin) / (srcRangeMax - srcRangeMin) + destRangeMin;
}

export function memoize(cb) {
  const cache = new Map()
  return (...args) => {
    const key = JSON.stringify(args)
    if (cache.has(key)) return cache.get(key)

    const result = cb(...args)
    cache.set(key, result)
    return result
  }
}
