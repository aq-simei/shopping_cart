export const formatCurrency = (value, currency) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  });
  return formatter.format(value);
};
