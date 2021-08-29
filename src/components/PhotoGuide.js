import React from 'react'

export default function PhotoGuide() {

    const photoList = [
        {
            text: "Ghost Photo",
            emoji: "👻"
        },
        {
            text: "Bone",
            emoji: "🦴"
        },
        {
            text: "Ouija Board",
            emoji: "😱"
        },
        {
            text: "Fingerprints",
            emoji: "🖐"
        },
        {
            text: "Interactions",
            emoji: "❗"
        },
    ]


    return (
        <div className="photoGuideContainer flexStartColumn" style={{paddingBottom:'25px'}}>
            <h3>📸 Photo Guide</h3>
            <p >Photo types ranked by most points</p>
            <div className="w100" style={{textAlign:'left', marginLeft: '10px'}}>
                {photoList.map((photo, i)=>{
                    return <div key={i} className="centered flexStart">
                        <p style={{marginRight:'5px'}}>{i+1}.{" "}</p>
                        <p className="centered" style={{width:'20px', marginTop:'12px'}}>{photo.emoji}</p> 
                        <p style={{marginLeft:'5px'}}>{photo.text}</p> 
                    </div>
                })}
                
            </div>
            <a
              href="https://youtu.be/Ruzsm01eqpQ?t=1430"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "inherit",
                fontSize:'.8rem',
                marginTop:'10px'
              }}
            >
                source: Insym - YouTube
            </a>
        </div>
    )
}
