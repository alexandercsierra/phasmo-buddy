import React, {useState} from 'react'

function NameObjectives() {

    const [ghostName, setGhostName] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setGhostName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    const handleEdit = () => {
        setSubmitted(false)
    }

    return (
        <div className="evidenceWrapper">
            {!submitted && <form className="centered column" onSubmit={handleSubmit}>
                <label style={{alignSelf:'flex-start', marginBottom:'5px', marginLeft:'2px'}} htmlFor="ghostName">Ghost Name</label>
                <div className="w100 centered">
                    <input className="ghostNameInput" placeholder="enter name" id="ghostName" onChange={handleChange} value={ghostName}/>
                    <button className="button submitButton">Submit</button>
                </div>
            </form>}
            {submitted && <div className="centered">
                <p 
                    style={{cursor:'pointer'}}
                    onClick={handleEdit}
                >Ghost Name: <span style={{
                    color: 'white'
                }}>{ghostName}</span></p>
                <i 
                    class="fas fa-edit editButton"
                    onClick={handleEdit}
                ></i>
            </div>}
        </div>
    )
}

export default NameObjectives
