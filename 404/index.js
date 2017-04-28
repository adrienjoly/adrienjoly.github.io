var match = window.URLMap[location.pathname];
if (match) {
  document.body.innerHTML = 'Redirecting to ' + location.pathname + '...';
  location.href = match + (location.search || '');
}
