import moment from 'moment';

export const formatPrice = (amount, truncate = false) => {
  const number = truncate ? Math.round(amount * 100) / 100 : amount;
  const string = number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  if (string[0] === '-') {
    return `-$${string.substr(1)}`;
  }
  // const string = number.toString();

  return `$${string}`;
};

export const formatDate = (dateStr) => moment(dateStr).format('MMM/DD/YYYY');

export const formatMonth = (dateStr) => moment(dateStr).format('MMM YYYY');

export const sumAmount = (arr, field) => arr.reduce((x, y) => x + parseInt(y[field], 10), 0)
