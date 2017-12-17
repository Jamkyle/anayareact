const NavVrtReducer = ( state={ currentPage: 'Home' }, action ) => {
  switch (action.type) {
    case 'GET_CURRENT_PAGE':
      return { currentPage : action.current }
    default:
      return state
  }

}

export default NavVrtReducer
