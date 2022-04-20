import React, { useState } from "react"

const Example = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>You clicked {count}</p>
            <button onClick={() => setCount(count + 1)}>Change count</button>
        </>
    )
}
export default Example