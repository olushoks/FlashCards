const handleAlert = (context, text, type) => {
  context({ text, type });
  setTimeout(() => {
    context({ text: "", type: "" });
  }, 3000);
};

export { handleAlert };
