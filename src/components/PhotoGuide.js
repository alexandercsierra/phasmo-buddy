import React from 'react'

export default function PhotoGuide() {

    const photoList = [
        {
            text: "Ghost Photo",
            emoji: "🖼"
        },
        {
            text: "Fingerprints",
            emoji: "🖐"
        },
        {
            text: "Bone",
            emoji: "🦴"
        },
        {
            text: "Ouija Board",
            emoji: "👁‍🗨"
        },
        {
            text: "Interactions",
            emoji: "❗"
        },
    ]


    return (
        <div className="photoGuideContainer flexStartColumn evidenceWrapper">
            <h3>📸 Photo Guide</h3>
            <p >Photo types ranked by most points</p>
            <div className="w100" style={{textAlign:'left', marginLeft: '10px'}}>
                {photoList.map((photo, i)=>{
                    return <div className="centered flexStart">
                        <p style={{marginRight:'5px'}}>{i+1}.{" "}</p>
                        <p className="centered" style={{width:'20px', marginTop:'12px'}}>{photo.emoji}</p> 
                        <p style={{marginLeft:'5px'}}>{photo.text}</p> 
                    </div>
                })}
                {/* <div className="centerd ">1. <p style={{width:'10px'}}>🖼</p> Ghost photo</div>
                <div className="centerd ">2. <p style={{width:'10px'}}>🖐</p> Fingerprints</div>
                <div className="centerd ">3. <p style={{width:'10px'}}>🦴</p> Bone</div>
                <div className="centerd ">4. <p style={{width:'10px'}}>👁‍🗨</p> Ouija Board</div>
                <div className="centerd ">5. <p style={{width:'10px'}}>❗</p> Interactions</div> */}
            </div>
        </div>
    )
}
