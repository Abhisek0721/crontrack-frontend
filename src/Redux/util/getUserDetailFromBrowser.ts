
export const getUserInfo = () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    return user;
}

export const getAccessToken = () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    const token = user.token;
    return token;
}