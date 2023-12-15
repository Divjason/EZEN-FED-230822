const login = (id, password) => {
  return (dispatch) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
  };
};

export const authenticateAction = { login };
