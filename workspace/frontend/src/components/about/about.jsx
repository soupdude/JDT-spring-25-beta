import './about.css';
import CSS from '../../../src/assets/css.svg';
import HTML from '../../../src/assets/html.svg';
import JS from '../../../src/assets/js.svg';
import PY from '../../../src/assets/py.svg';
import { useState } from 'react';

function About(){
    const [display , setDisplay] = useState("block");
    const[buttontext, setButtontext] = useState("Hide");

    function toggle(){
        if (display == 'none'){
            setDisplay('block');
            setButtontext('Hide');
        }
        else {
            setDisplay('none');
            setButtontext('Show');
        }
    }

    return (
        <div id="about">
            <h2>About</h2>
            <p>Hi! My name is Alani Thomas and I am a software developer. I am a student at Boston University. I have experience with the following technologies:</p>
            <div id="skills">
                <img width="50" src={CSS}/>
                <img width="50" src={HTML}/>
                <img width="50" src={JS}/>
                <img width="50" src={PY}/>
            </div>
            <button onClick={toggle}>{buttontext} Skills</button>
            <div id="skills-info" style={{display: display}}>
                <p>CSS</p>
                <p>HTML</p>
                <p>JavaScript</p>
                <p>Python</p>
            </div>
        </div>
    )
}

export default About;