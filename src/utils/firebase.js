const firebase = require('firebase/app')
const { getStorage, uploadBytes, ref, getDownloadURL } = require('firebase/storage')

const config = require('../../config').api.firebase


const firebaseApp = firebase.initializeApp(config)

const storage = getStorage(firebaseApp)

// Peliculas

const addToFirebaseMovieVideo = async (file) => {
    const movieRef = ref(storage, `movieVideos/${Date.now()}-${file.originalname}`)

    await uploadBytes(movieRef, file.buffer)//Where / what
    
    const movieUrl = await getDownloadURL(movieRef)

    return movieUrl
}
// Cover peliculas

// Serie - Nombre - Temporada - Cover
// Serie - Nombre - Temporada - Capitulo