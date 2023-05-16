const getIsLoggendIn = state => state.auth.isLoggendIn;

const getUsername = state => state.auth.user.selectorUsername;

const authSelectors = {
  getIsLoggendIn,
  getUsername,
};

export default authSelectors;
