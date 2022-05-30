import { useState, useEffect, createContext, useContext } from "react"
import {getAuth, GoogleAuthProvider,signInWithPopup, setPersistence, browserLocalPersistence, onAuthStateChanged} from 'firebase/auth'


export const AuthContext = createContext()

export function useAuth() {
    return useContext( AuthContext )
}

export const AuthProvider = ( { children } ) => {
    const [currentUser, setCurrentUser] = useState({ loggedIn: false })

    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    const signIn = () => {
        return setPersistence( auth, browserLocalPersistence )
        .then ( () =>{
            signInWithPopup( auth, provider )
            .then (result => {
                console.log('User logged in succesfully')
            } )
        } )
        .catch(err => console.log(err))
    }

    useEffect(() =>{
        onAuthStateChanged( auth, user => {
            if ( user ){
                console.log ( user )
                setCurrentUser({
                    id: user.uid,
                    username: user.displayName,
                    email: user.email,
                    loggedIn: true
                })
            }
        } )
        //make useEffect render whenever you want to 
        //render once = [ ]
        //render everytime the component updates = ''
        //render whenever data changes  = [ data ]
    }, [ auth ])

    const context = {
        currentUser, signIn
    }
    return (
        <AuthContext.Provider value={ context }>
            { children }
        </AuthContext.Provider>         
    )
}

