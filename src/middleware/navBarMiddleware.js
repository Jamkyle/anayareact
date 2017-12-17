const navBarMiddleware = store => next => action => {
 var sens
(store.getState().slidePage.page - action.page < 0) ? sens = 'slide' : sens = 'rslide'
switch (action.type) {
  case 'CHANGE_PAGE':
    return next({...action, sens : sens})
  case 'GET_CURRENT_PAGE':
    return next(action)
  default:
    return next(action)
}

}

export default navBarMiddleware
