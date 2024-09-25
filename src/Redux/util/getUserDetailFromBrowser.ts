export const getToken = () => {
  const Istoken = localStorage.getItem("access_token");
  const token = Istoken ? JSON.parse(Istoken) : null
  return token;
};
