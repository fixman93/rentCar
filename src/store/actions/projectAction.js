import firebase from '../../fbConfig'

import 'firebase/storage'

const storage = firebase.storage().ref()

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore()
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid
    console.log('oooooo', project)
    const newImageName = new Date().getTime()
    storage.child(`profile/${newImageName}`).put(project.picture).then(() => {
      storage.child(`profile/${newImageName}`).getDownloadURL().then(function (downloadURL) {
        firestore.collection('project').add({
          createdAt: new Date(),
          authorFirstName: profile.firstName,
          authorLastName: profile.lastName,
          authhorId: authorId,
          Currency: project.currency,
          carPrice: project.carPrice,
          carYear: project.carYear,
          carType: project.carType,
          carModel: project.carModel,
          carDescription: project.carDescription,
          feedback: 0,
          carStatistick: project.listElements,
          userImage: downloadURL,
          carCity: project.carCity,
          carCountry: project.carCountry
        }).then(() => {
          dispatch({ type: 'CREATE_PROJECT', project })
        }).catch((err) => {
          dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })
      })

    })

  }
}

export const updateProject = (info) => {
  console.log('aaaaaaaaaaaaa', info)
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('project').doc(info.carID).update({
      feedback: info.feedback
    })
  }
}

export const sendMessageToClient = (message) => {
  console.log(message)
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('messages').add({
      phoneNumber: message.phoneNumber,
      city: message.yourCity,
      date: message.date,
      OwnerID: message.userID,
      projectID: message.projectID,
      messageStatus: 0
    }).then((resp) => {
      console.log('messID:', resp)
    })
  }
}