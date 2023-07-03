export const convertPrice = (price, currency = "đ") =>
  price?.toLocaleString("en-US") + currency;
