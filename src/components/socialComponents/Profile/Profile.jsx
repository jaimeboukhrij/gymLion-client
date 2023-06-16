import { useState } from "react";
import Post from "../Post/Post"
import Body from "./Body"
import Header from "./Header"
import Pictures from "./Pictures";
import ProfilePost from "../ProfilePost/ProfilePost";

const Profile = ({ gymFamilyIds, profileClick }) => {

    const [activeButton, setActiveButton] = useState('Button 1');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };


    return (
        <div className="post">
            <Header gymFamilyIds={gymFamilyIds} />
            <Body handleButtonClick={handleButtonClick} activeButton={activeButton} />
            {activeButton === "Button 1" && <ProfilePost gymFamilyIds={gymFamilyIds} activeButton={activeButton} profileClick={profileClick} />}
            {activeButton === "Button 2" && <Pictures gymFamilyIds={gymFamilyIds} activeButton={activeButton} />}


        </div>
    )

}


export default Profile
