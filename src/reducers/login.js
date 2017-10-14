const login = (state = {loginSuccess : false}, action) => {
  switch (action.type) {
    case 'ON_LOGIN':
      return { ...state, loginSuccess : true};
    default:
      return state
  }
}

export default login;
