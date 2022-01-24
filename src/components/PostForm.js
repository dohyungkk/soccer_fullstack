import React, { Component, useState } from 'react'

function MyTextInput(props){
    function handleChange(event){
         if (props.onChange) props.onChange(event)  
    }
    return (
         <p>
             <input type='text' value={props.value} name={props.name} ref={props.inputRef} onChange={handleChange} />
         </p>
     )
}

class PostForm extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            team: '',
            coach: '',
            uniform: '',
            stadium: ''
        }
        this.inputTeam = React.createRef()
        this.inputCoach = React.createRef()
        this.inputUniform = React.createRef()
        this.inputStadium = React.createRef()
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log("The soccer team has", data)
    }

    handleInputChange = (event) => {
        event.preventDefault()
       this.setState({
           [event.target.name]: event.target.value
       })
    }

  render () {
    const {team} = this.state
    const {coach} = this.state
    const {uniform} = this.state
    const {stadium} = this.state
    return (
      <div>
        <h1>{team}</h1>
        {/* <p>Coach name is: {coach}</p> */}
        
        <form onSubmit={this.handleSubmit}>
            <select value={team} inputRef={this.inputTeam} value={team} name="team" onChange={this.handleInputChange}>
                <option></option>
                <option>Manchester</option>
                <option>Chelsea</option>
                <option>Liverpool</option>
            </select>
            <hr></hr>
            Coach<MyTextInput inputRef={this.inputCoach} value={coach} name="coach" onChange={this.handleInputChange}/>
            Uniform<MyTextInput inputRef={this.inputUniform} value={uniform} name="uniform" onChange={this.handleInputChange}/>
            Stadium<MyTextInput inputRef={this.inputStadium} value={stadium} name="stadium" onChange={this.handleInputChange}/>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm;