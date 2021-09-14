import React, { useContext } from 'react'
import { UserContext } from "../context/UserContex";

export default function WelcomePage() {

    const {loggedInUser} = useContext(UserContext)
    console.log(loggedInUser)

    return (
        <div>
            Welcome, {loggedInUser.fName}
        </div>
    )
}
