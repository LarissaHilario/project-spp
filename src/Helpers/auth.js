export const deleteToken = () => {
  localStorage.removeItem('token');
};

export const setTokens = token => {
  localStorage.setItem('token', token);
};
