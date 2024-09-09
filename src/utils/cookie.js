const setCookie = (token) => {
  document.cookie = `accessToken=${token}; max-age=${1 * 24 * 60 * 60}`;
};

export { setCookie };
