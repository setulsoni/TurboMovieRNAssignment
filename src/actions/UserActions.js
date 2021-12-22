export const TYPES = {
  CLEAR_STORE: 'CLEAR_STORE',
  LOGIN: 'LOGIN',
};

export const login = (user) => ({
  type: TYPES.LOGIN,
  payload: { user },
});

export const logout = () => ({
  type: TYPES.CLEAR_STORE,
  payload: null,
});
