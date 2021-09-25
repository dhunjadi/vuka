import React, {useContext} from 'react'
import Navbar from '../components/Navbar/Navbar'
import { UserContext } from '../context/UserContex'

export default function SettingsPage() {

    const {loggedInUser} = useContext(UserContext)

    return (
        <div id='settings'>
            <Navbar />
            <div className="container">
                <div className="student-info">
                    <div className="student-info-pair">
                        <h3>First Name:</h3>
                        <p>{loggedInUser.fName}</p>
                    </div>
                    <div className="student-info-pair">
                        <h3>Last Name:</h3>
                        <p>{loggedInUser.lName}</p>
                    </div>
                    <div className="student-info-pair">
                        <h3>E-mail:</h3>
                        <p>{loggedInUser.email}</p>
                    </div>
                    <div className="student-info-pair">
                        <h3>Status:</h3>
                        <p>{loggedInUser.status.charAt(0).toUpperCase() + loggedInUser.status.slice(1)}</p>
                    </div>
                    <div className="student-info-pair">
                        <h3>Studies:</h3>
                        <p>{loggedInUser.study.charAt(0).toUpperCase() + loggedInUser.study.slice(1)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
