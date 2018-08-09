const sleep = "sleeping like a baby"
const work = "working at the office"
const eatChipotle = "eating a Chipotle burrito"
const eatShakeShack = "eating out at Shakeshack"
const eatMcMorning = "having a McMorning"
const play = "playing Octopath Travellers"
const tv = "watching Rick and Morty"
const study = "studying a foreign language"
const shop = "shopping with my wife"
const movie = "at the movies"
const pool = "swimming in the pool"
const dinner = "making dinner for my wife"
const code = "coding something fun"

const getWeekDayActivity = hour => {
  if (hour < 7) {
    return sleep
  } else if (hour < 8) {
    return study
  } else if (hour < 12) {
    return work
  } else if (hour < 13) {
    return eatChipotle
  } else if (hour < 17) {
    return work
  } else if (hour < 20) {
    return play
  } else if (hour < 23) {
    return tv
  } else {
    return sleep
  }
}

const getSaturdayActivity = hour => {
  if (hour < 9) {
    return sleep
  } else if (hour < 10) {
    return study
  } else if (hour < 11) {
    return eatMcMorning
  } else if (hour < 18) {
    return pool
  } else if (hour < 19) {
    return dinner
  } else if (hour < 23) {
    return code
  } else {
    return sleep
  }
}

const getSundayActivity = hour => {
  if (hour < 9) {
    return sleep
  } else if (hour < 12) {
    return study
  } else if (hour < 13) {
    return eatShakeShack
  } else if (hour < 19) {
    return shop
  } else if (hour < 20) {
    return dinner
  } else if (hour < 23) {
    return code
  } else {
    return sleep
  }
}

export default () => {
  const d = new Date()
  const hour = d.getHours()
  const day = d.getDay()
  if (day === 0) {
    return getSundayActivity(hour)
  } else if (day === 6) {
    return getSaturdayActivity(hour)
  }
  return getWeekDayActivity(hour)
}
