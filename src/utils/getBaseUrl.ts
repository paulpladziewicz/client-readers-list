export const getBaseUrl = () => {
  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  // backend port
  const port = ':5003';

  // production hostname
  if (
    hostname === 'freereaderslist.com' ||
    hostname === 'www.freereaderslist.com'
  ) {
    return `${protocol}//${hostname}`;
  }

  return `${protocol}//${hostname}${port}`;
};
