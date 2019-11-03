const getToken = (): string | null => {
  const token = localStorage.getItem("token");

  if (!token || token === "") {
    return null;
  }
  return token;
};

export default (): string | null => {
  const token = getToken();

  if (!token) {
    return null;
  }
  return token;
};
