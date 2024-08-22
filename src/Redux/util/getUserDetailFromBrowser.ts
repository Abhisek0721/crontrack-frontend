export const getToken = () => {
  const Isuser = localStorage.getItem("user");
  const userData = Isuser ? JSON.parse(Isuser) : null
  const token = userData?.access_token;
  return token;
};

export const isUSerVerified = () => {
  const storedValue = localStorage.getItem("isVerified");
  const isVerified = storedValue !== null ? JSON.parse(storedValue) : false;
  return isVerified;
};

export const setIsUserVerified = (payload: Boolean) => {
  localStorage.setItem("isVerified", JSON.stringify(payload));
};
