import React from 'react'
import '../stylesheets/LandingPage.css'


function LandingPage( { setStart } ) {
    return (
        <div className='landing-container'>
            <h1>Jeopardy!</h1>
            <div className='btn-container'>
                <button onClick={() => setStart(true)}>Let's play!</button>
            </div>
            
        </div>
    )
}

export default LandingPage
