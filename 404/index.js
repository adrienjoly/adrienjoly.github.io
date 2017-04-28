var match = window.URLMap[location.pathname];
if (match) {
  document.body.innerHTML = 'Redirecting to ' + match + '...';
  location.href = match + (location.search || '');
}
