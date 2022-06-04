export const dateFormatter = (date: Date) => {
  const options: any = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

export const getDate = () => {
  const today = new Date();
  return dateFormatter(today);
};
