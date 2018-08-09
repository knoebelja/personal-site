export const getDay = d => {
  const dayNo = d.getDay()
  const dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
  return dayArray[dayNo]
}

export const getMonth = d => {
  const monthNo = d.getMonth()
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  return monthArray[monthNo]
}

export const getYear = d => {
  return d.getFullYear()
}

export const getDate = d => {
  const date = d.getDate()
  return date
}

export default () => {
  const d = new Date()
  const day = getDay(d)
  const month = getMonth(d)
  const date = getDate(d)
  const year = getYear(d)
  return `${day}, ${month} ${date}, ${year}`
}
