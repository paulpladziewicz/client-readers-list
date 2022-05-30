export const getBaseUrl = () => {
  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  const port = ':5003';

  if (hostname === 'freereaderslist') {
    return `${protocol}//${hostname}`;
  }

  return `${protocol}//${hostname}${port}`;
};
