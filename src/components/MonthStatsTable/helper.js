export const formatDate = date => {
  const year = date.getFullYear();
  const mongth = getMonthName(date.getMonth());

  return `${mongth}, ${year}`;
};

function getMonthName(monthNumber) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return monthNames[monthNumber] || 'Січень';
}
