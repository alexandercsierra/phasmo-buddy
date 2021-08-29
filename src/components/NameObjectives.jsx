import React, {useState} from 'react'
import { objectives } from '../constants'
import { Dialog, DialogTitle } from '@material-ui/core'
import Objectives from './Objectives'

function NameObjectives() {

    const [ghostName, setGhostName] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [response, setResponse] = useState("")

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

    const handleRadioChange = e => {
        setResponse(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div style={{width:'340px', marginTop:'10px', height: '400px'}}>
            <div className="centered">
                {!submitted && <form className="centered column" style={{justifyContent:'space-around', height: '70px', width:'300px'}} onSubmit={handleSubmit}>
                    <div style={{width:'100px'}} className="">
                        <label  htmlFor="ghostName">Ghost Name:</label>

                    </div>
                    <div className="centered">
                        <input className="ghostNameInput" placeholder="enter name" id="ghostName" onChange={handleChange} value={ghostName}/>
                        <button className="button submitButton">save</button>
                    </div>
                </form>}
                
                {submitted && <div className="centered column" style={{height:'70px', width:'300px'}}>
                    <p 
                        style={{
                            cursor:'pointer',
                            margin:0
                        }}
                        onClick={handleEdit}
                    >Ghost Name: </p>
                    <div className="centered">
                        <p style={{
                            color: 'white',
                            overflow: "hidden",
                            margin:'9px'
                        }}>{ghostName}</p>
                        <i 
                            class="fas fa-edit editButton"
                            onClick={handleEdit}
                        ></i>

                    </div>
                    {/* <i className="fas fa-times" style={{cursor: 'pointer'}}></i> */}
                </div>}
                <div style={{marginLeft:'5px', width: '120px'}}>
                    <form className="centered column flexStartColumn">
                        <div>
                            <input 
                                type="radio" 
                                id="everyone" 
                                name="response" 
                                value={"everyone"} 
                                onChange={handleRadioChange}
                                
                            />
                            <label 
                                htmlFor="everyone"
                                style={{
                                    fontWeight: response === "everyone" ? '700' : 'inherit',
                                    color: response === "everyone" ? '#92782a' : 'inherit',
                        
                                }}
                            >everyone</label>
                        </div>
                        <div>
                            <input type="radio" id="alone" name="response" value={"alone"} onChange={handleRadioChange}/>
                            <label 
                                htmlFor="alone"
                                style={{
                                    fontWeight: response === "alone" ? '700' : 'inherit',
                                    color: response === "alone" ? '#92782a' : 'inherit',
                        
                                }}
                            >alone</label>
                        </div>
                    </form>
                </div>

            </div>
            <Objectives/>
        </div>
    )
}

export default NameObjectives