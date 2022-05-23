import React from 'react'


const initState={
    name:"",
    email:"",
    password:""
}

const Form = () => {
    const [state, setState] = React.useState(initState)

    const handleSubmit=(e)=> {
      e.preventDefault();

      console.log(state)
      setState({
        name:"",
        email:"",
        password:""
      })
    }

    const handleChange=(e)=> {
      // console.log(e.target.name, e.target.value)
      const {name,value}=e.target;
      console.log(name,value,"l")

      setState({
        ...state, [name]:value
      })
    }
  return (
    <div>
        <h2>Form</h2>
        <form action="" onSubmit={handleSubmit}>
            <input type="text"  name='name' placeholder='name' value={state.name}  onChange={handleChange}/>
            <br />
            <input type="text" name='email' placeholder='email' value={state.email} onChange={handleChange}/>
            <br />
            <input type="text" name='password' placeholder='password' value={state.password} onChange={handleChange}/>
            <br />

            {/* or use destructuring  
            ex: const {name, email, password}=state
            */}
            <input type="submit" value="SubmitData" />
        </form>

    </div>
  )
}

export default Form