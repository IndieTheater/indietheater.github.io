// src/hooks.client.js
if (typeof window !== 'undefined') {
  const redirect = sessionStorage.redirect;
  if (redirect) {
    sessionStorage.removeItem('redirect');
    history.replaceState({}, '', redirect);
  }
}
