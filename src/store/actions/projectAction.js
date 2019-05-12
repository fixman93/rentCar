import firebase from '../../fbConfig'

import 'firebase/storage'

const storage = firebase.storage().ref()

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore()
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid
    console.log('oooooo', project)
    storage.child(`profile/${new Date().getTime()}`).put(project.picture).then((downloadURL) => {
      console.log('snapshot', downloadURL)
      firestore.collection('project').add({
        // ...project,
        createdAt: new Date(),
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authhorId: authorId,
        Currency: project.currency,
        carPrice: project.carPrice,
        carYear: project.carYear,
        carType: project.carType,
        carModel: project.carModel,
        // UserImage: downloadURL.metadata.fullPath
        userImage: 'https://via.placeholder.com/300'
      }).then(() => {
        dispatch({ type: 'CREATE_PROJECT', project })
      }).catch((err) => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err })
      })
    })



  }
}