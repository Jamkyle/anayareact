const slidePageReducer = ( state={ sens: 'slide'}, action ) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return { page : action.page, sens : action.sens }
    default:
      return state
}

}

export default slidePageReducer
