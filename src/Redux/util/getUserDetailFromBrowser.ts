export const getToken = () => {
  const user = localStorage.getItem("user");
  const header = `Authorization : Bearer ${user?.access_token} `;
  return header;
};

export const isUSerVerified = () => {
  const storedValue = localStorage.getItem("isVerified");
  const isVerified = storedValue !== null ? JSON.parse(storedValue) : false;
  return isVerified;
};

export const setIsUserVerified = (payload: Boolean) => {
  localStorage.setItem("isVerified", JSON.stringify(payload));
};
