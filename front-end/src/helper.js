const handleAlert = (context, text, type) => {
  context({ text, type });
  setTimeout(() => {
    context({ text: "", type: "" });
  }, 3000);
};

const checkCardCount = (num, current) => {
  if (num > current.length - 1) {
    return 0;
  }
  if (num < 0) {
    return current.length - 1;
  }
  return num;
};

export { handleAlert, checkCardCount };
