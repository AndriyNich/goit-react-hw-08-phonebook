const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUser = state => state.auth.user;

const getUsername = state => state.auth.user.name;

const getEmail = state => state.auth.user.email;

const getIsRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  getIsLoggedIn,
  getUser,
  getUsername,
  getEmail,
  getIsRefreshing,
};

export default authSelectors;
