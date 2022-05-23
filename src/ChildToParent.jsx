import React from "react";

const Child = ({value, handleIncrement, handleDecrement}) =>
{
    return(
        <div>
            <h1>Count is: {value}</h1>
            <div>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement}>-</button>
            </div>
        </div>
    )
}

function ChildToParent() {

    const [count,setCount]=React.useState(0);
    const handleChange = (value) => {
        setCount(count + value);
    };

    const handleDecrement=()=> {
        setCount(count-1)
    }
    const handleIncrement=()=> {
        setCount(count+1)
    }

    return (
        <div>
            <h1>Child to Parent</h1>
            <Child value={count} 
             handleDecrement={handleDecrement}
             handleIncrement={handleIncrement}
             />
        </div>
    )

}

export {ChildToParent}