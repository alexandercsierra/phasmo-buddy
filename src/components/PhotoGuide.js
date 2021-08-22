import React from 'react'

export default function PhotoGuide() {
    return (
        <div className="photoGuideContainer flexStartColumn evidenceWrapper">
            <h3>📸 Photo Guide</h3>
            <p>photo types ranked by most points</p>
            <ol className="w100" style={{textAlign:'left', marginLeft: '10px'}}>
                <li>Ghost photo</li>
                <li>Fingerprints</li>
                <li>Bone</li>
                <li>Ouija Board</li>
                <li>Interactions</li>
            </ol>
        </div>
    )
}
