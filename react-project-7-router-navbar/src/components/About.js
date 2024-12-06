import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate();

    function clickHandler(){
        navigate("/contact")
    }

    function goBack(){
        navigate(-1);
    }
  return (
    <div>
        
        <div>This is a About Page</div>
        <div>
            <button onClick={clickHandler}>Move to Contact Page</button>
            <button onClick={goBack}>Go Back</button>
            </div>


    </div>
  )
}

export default About