export const getJWT = () => {
  const isServer = typeof window === 'undefined';
  if (!isServer) {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      return jwt;
    }
    return null;
  }
};
