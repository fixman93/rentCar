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

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((resp) => {
      return firestore.collection('users').doc(resp.user.uid).set({
        id: resp.user.uid,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initial: newUser.firstName[0] + newUser.lastName[0],
        phoneNumber: newUser.phoneNumber,
        accountType: newUser.accountType,
        userAddress: newUser.userAddress,
        role: 'user'
      })
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' })
    }).catch(err => {
      dispatch({ type: 'SIGNUP_ERROR', err })
    })
  }
}