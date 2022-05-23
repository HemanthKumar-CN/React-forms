import React from "react";

const Child = ({value}) =>
{
    return(
        <div>
            <h1>Count is: {value}</h1>
            
        </div>
    )
}

const Button=({value,handleClick})=> {
    return (
            <button onClick={handleClick}>{value}</button>
    )
}

function Siblings() {

    const [count,setCount]=React.useState(0);
    // const handleChange = (value) => {
    //     setCount(count + value);
    // };

    const handleDecrement=()=> {
        setCount(count-1)
    }
    const handleIncrement=()=> {
        setCount(count+1)
    }

    return (
        <div>
            <h1>Sibling</h1>
            <Child value={count} 
             handleDecrement={handleDecrement}
             handleIncrement={handleIncrement}
             />
             <Button value={"-"} handleClick={handleDecrement} ></Button>
             <Button value={"+"} handleClick={handleIncrement} ></Button>

        </div>
    )

}

export {Siblings}