export const getMonthName = (date) => {
  const monthNumber = date.getMonth();
  let monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DIC"]
  return monthNames[monthNumber]
}