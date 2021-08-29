import React, {useState} from 'react'
import { objectives } from '../constants'
import { Dialog, DialogTitle } from '@material-ui/core'

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
        <div>
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
            <Objectives/>
        </div>
    )
}

export default NameObjectives


const Objectives = () => {
    const [open, setOpen] = useState(false)
    const [btnClass, setBtnClass] = useState("button objective")
    const [selectedObjectives, setSelectedObjectives] = useState([])
    const [completed, setCompleted] = useState([])

    const handleOpen=()=>{
        setSelectedObjectives([])
        setCompleted([])
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const toggleComplete = (obj) => {
        if(completed.includes(obj)){
            const newCompleted = completed.filter(oldObj => oldObj !==obj)
            setCompleted(newCompleted)
        } else {
            setCompleted([...completed, obj])
        }
    }

    const handleClick = (obj) => {
        if(selectedObjectives.includes(obj)){
            const newObjs = selectedObjectives.filter(oldObj => oldObj !== obj)
            console.log(newObjs)
            setSelectedObjectives(newObjs)
        } else {
            setSelectedObjectives([...selectedObjectives, obj])
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleOpen} className="button">{"set objectives"}</button>
            </div>
            <div>
            <Dialog open={open} PaperProps={{ className: "objectiveDialog", style: {margin: '0'}}}>
                <DialogTitle style={{color: 'white'}}>
                    <i className="fas fa-times" style={{float:'right', cursor: 'pointer'}} onClick={handleClose}></i>
                    <div className="centered">
                    <h3 >Objectives</h3>
                    </div>
                </DialogTitle>
                <div className="centered wrap flexStart">
                    {objectives.map(obj=>{
                        const isSelected = selectedObjectives?.includes(obj)
                        const isDisabled = selectedObjectives?.length === 3 && !selectedObjectives?.includes(obj)
                        return <button 
                            key={obj}
                            disabled={isDisabled}
                            className={isSelected ? "selectedButton selectedObjective" : "button objective"}
                            onClick={()=>handleClick(obj)}
                        >{obj}</button>
                    })}
                </div>
                <button className="button" style={{margin:'10px auto'}} onClick={handleClose}>done</button>
            </Dialog>
            </div>
            {selectedObjectives?.map(obj=>{
                return <p onClick={()=>toggleComplete(obj)} style={{textDecoration: completed?.includes(obj) ? 'line-through' : 'none', cursor:'pointer'}}>{obj}</p>
            })}
        </div>
    )
}

//undo highlight on cross out

