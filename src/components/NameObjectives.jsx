import React, {useState} from 'react'
import { objectives } from '../constants'
import { Dialog, DialogTitle } from '@material-ui/core'
import Objectives from './Objectives'

function NameObjectives() {

    const [ghostName, setGhostName] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        if(e.target.value.length > 27) return
        setGhostName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    const handleEdit = () => {
        setGhostName("")
        setSubmitted(false)
    }

    return (
        <div >
            {!submitted && <form className="centered column" onSubmit={handleSubmit}>
                <label style={{margin: '22px 0 5px 2px'}} htmlFor="ghostName">Ghost Name</label>
                <div className="w100 centered">
                    <input className="ghostNameInput" placeholder="enter name" id="ghostName" onChange={handleChange} value={ghostName}/>
                    <button className="button submitButton">Submit</button>
                </div>
            </form>}
            {submitted && <div className="centered w100">
                <p 
                    style={{
                        cursor:'pointer'
                    }}
                    onClick={handleEdit}
                >Ghost Name: <span style={{
                    color: 'white',
                    overflow: "hidden"
                }}>{ghostName}</span></p>
                <i 
                    class="fas fa-edit editButton"
                    onClick={handleEdit}
                ></i>
                {/* <i className="fas fa-times" style={{cursor: 'pointer'}}></i> */}
            </div>}
            <Objectives/>
        </div>
    )
}

export default NameObjectives