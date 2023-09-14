import React from 'react'
import { useState } from 'react'

const HOC = (WrappedComponent) => {
    const WithCounter = () => {
        const [Count, setCount] = useState(0)
        

        const handleInc = () => { setCount(Count + 1) };
        const handleDec = () => { setCount(Count - 1) };
    
        return (
            <div>
                <WrappedComponent
                    Count={Count}
                    handleInc={handleInc}
                    handleDec={handleDec} />
          
            </div>
        )
    }
    return WithCounter
}

export default HOC