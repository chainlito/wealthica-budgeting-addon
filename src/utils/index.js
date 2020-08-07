import moment from 'moment';

export const formatPrice = (amount, truncate = false) => {
  const number = truncate ? Math.round(amount * 100) / 100 : amount;
  /* const string = number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  if (string[0] === '-') {
    return `-$${string.substr(1)}`;
  } */
  const string = number.toString();

  return `$${string}`;
};

export const formatDate = (dateStr) => moment(dateStr).format('MMM/DD/YYYY');
