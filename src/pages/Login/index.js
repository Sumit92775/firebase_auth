import React, { useState, useEffect } from 'react';
import HomePage from '../HomePage/HomePage.jsx';
import firebase from './../../firebase.js'

import './style.scss'

const LogIn = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [User, setUser] = useState(null);

    
    const userLogin = () =>{
        try{
            firebase.auth().signInWithEmailAndPassword(Email,Password).then((response) => {

                if(response.user != User){
                    console.log("Different User Login!!");
                }
                console.log(response.user.uid);
                    setUser(response.user.uid);
                    window.location.assign("http://fauth.herokuapp.com/homepage");

            })

        }catch(error){
            console.log(error);
        }
    }

    useEffect(() =>{
        console.log("Run : 1");
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                setUser(user.uid);
                alert(User);
            }
        })
    },[User])

    const userLogout = () =>{
        firebase.auth().signOut().then(() => {
                setUser(null);
        })
    }

        return(
         
                <div>
                    {User ? 
                    (
                    <>
                        <HomePage user={User}>
                        </HomePage>
                       

                    </>

                    )
                    :

                    (
                    <>
                        <input className="email" placeholder="Email" value={Email} onChange={(text)=> setEmail(text.target.value)}></input>
                        <input className="password" placeholder="Password" value={Password} onChange={(text)=> setPassword(text.target.value)} ></input>
                        <button className="submit" onClick={()=>{userLogin()}}>Submit</button>
                     </>

                    )
                     }
                </div>
          
        )

}


export default LogIn;   