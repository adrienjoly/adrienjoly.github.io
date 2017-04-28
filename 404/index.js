var match = window.URLMap[location.pathname];
if (match) {
  location.href = match + (location.search || '');
}
