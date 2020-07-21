import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

import './quiz.css'

import data from  '../../data/data.json'

const newdata = data.map((data) =>{
    return  (
        <div key= {data.id}>
            <h1>{data.question}</h1>
                <Form.Group >
                        <Form.Check
                            type="radio"
                            label={data.a}
                            name={"checkboxName"+(data.id)}
                            id={"vata"+(data.id)}
                            className="vata"
                        />
                        <Form.Check
                            type="radio"
                            label={data.b}
                            name={"checkboxName"+(data.id)}
                            id={"pitta"+(data.id)}
                            className="pitta"
                        />
                        <Form.Check
                            type="radio"
                            label={data.c}
                            name={"checkboxName"+(data.id)}
                            id={"kapha"+(data.id)}
                            className="kapha"
                        />
                </Form.Group>
            </div> 
        )
    }
)




export default class Main extends Component {

    
    render() {
        
        return (
            
            <div>  {newdata}  </div>
        )

    }
}