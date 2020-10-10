export function getPrevMonday() {
  let prevMonday = new Date();

  return prevMonday.setDate(
    prevMonday.getDate() - ((prevMonday.getDay() + 6) % 7)
  );
}

export function getFirstDayOfMonth() {
  var currentDate = new Date();
  return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
}
