import './profile.css';
import ProfileIcon from '../../../src/assets/profile-icon.png';

function Profile() {
    return(
        <div id="profile">
            <div><img width="250" src={ProfileIcon}/></div>
            <div id="profile-info">
                <h1>Alani Thomas</h1>
                <p>Software Developer</p>
                <p>Boston University Student</p>
                <div classname="icons">
                    <a target="_blank" href="https://www.linkedin.com/in/alani-thomas-592593219/"><img id="linkedin-img" width="60" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/></a>
                    <a target="_blank" href="https://github.com/soupdude"><img id="github-img" width="60" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/></a>
                </div>
            </div>
        </div>
    )
}

export default Profile;