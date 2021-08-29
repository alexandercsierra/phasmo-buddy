import React from 'react'

function InfoButton({onClick, isEvidenceButton=false, showInfo=false}) {
    return (
        <>
            <div 
                className="centered" 
                style={{
                cursor: 'pointer', 
                color: "black", 
                float:'right', 
                borderRadius:'100%', 
                padding:'6px', 
                background:'#7A848F', 
                width:'5px', 
                height:'5px',
                marginBottom:'10px',
                fontWeight: 700
                }}
                onClick={onClick}
            >i</div>
            {showInfo && isEvidenceButton && <div>
                <p style={{marginTop:'30px'}}>click button once to mark as evidence, again to eliminate as evidence, and again to de-select</p>
            </div>}
        </>
    )
}

export default InfoButton

