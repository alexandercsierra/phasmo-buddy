import React, {useState} from 'react'
import { objectives } from '../constants'
import { Dialog, DialogTitle } from '@material-ui/core'

const Objectives = () => {
    const [open, setOpen] = useState(false)
    const [btnClass, setBtnClass] = useState("button objective")
    const [selectedObjectives, setSelectedObjectives] = useState(["identify ghost"])
    const [completed, setCompleted] = useState([])

    const handleOpen=()=>{
        setSelectedObjectives(["identify ghost"])
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
            <Dialog open={open} PaperProps={{ className: "objectiveDialog", style: {margin: '0'}}}>
                <DialogTitle style={{color: 'white'}}>
                    <i className="fas fa-times" style={{float:'right', cursor: 'pointer', color: "#961210"}} onClick={handleClose}></i>
                    <div className="centered">
                    <h3 >Objectives</h3>
                    </div>
                </DialogTitle>
                <div className="centered wrap">
                    {objectives.map(obj=>{
                        const isSelected = selectedObjectives?.includes(obj)
                        const isDisabled = selectedObjectives?.length === 4 && !selectedObjectives?.includes(obj)
                        return <button 
                            key={obj}
                            disabled={isDisabled}
                            className={isSelected ? "selectedButton selectedObjective" : "button objective"}
                            onClick={()=>handleClick(obj)}
                        >{obj}</button>
                    })}
                </div>
                <button 
                    className="button" 
                    style={{
                        margin:'10px auto',
                        width:'70px',
                        background:'#7A848F',
                        color: 'white'
                    }} 
                    onClick={handleClose}
                >done</button>
            </Dialog>
            </div>
            <div className="centered column flexStart">
                <h4>Objectives</h4>
                <div className="objectiveContainer">
                    {selectedObjectives.length ? (
                        selectedObjectives?.map(obj=>{
                            return <p onClick={()=>toggleComplete(obj)} style={{textDecoration: completed?.includes(obj) ? 'line-through' : 'none', cursor:'pointer'}}>{obj}</p>
                        })
                    ) : (
                        <p>no objectives selected</p>
                    )}
                </div>
            </div>
            <div>
                <button 
                    onClick={handleOpen} 
                    className="button"
                    style={{
                        padding: '5px',
                        background: '#7A848F',
                        color: 'white'
                    }}
                >{selectedObjectives?.length ? "reset objectives" : "set objectives"}</button>
            </div>
        </div>
    )
}

export default Objectives