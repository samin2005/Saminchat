import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'




function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <Button className='btn'  style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={signInWithGoogle} variant="contained" >Sign In With Google</Button>
            <h1 style={{position:"absolute",bottom:"10px",margin:"auto",fontWeight:'300',fontSize:'30px'}}>Devoloped By Samin</h1>
        </div>
    )
}

export default SignIn

