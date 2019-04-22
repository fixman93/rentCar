export const signIn = (credentiala) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    firebase.auth().signInWithEmailAndPassword(
      credentiala.email,
      credentiala.password
    ).then(() => {
      console.log('success')
      dispatch({ type: 'LOGIN_SUCCESS' })
    }).catch((err) => {
      console.log('error')
      dispatch({ type: 'LOGIN_ERROR', err })
    })
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    })
  }
}