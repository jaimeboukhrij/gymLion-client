import NutritionalInfoComponent from "../../services/food.services";
import "./HomePage.css"



function HomePage() {


    return (<div className="homePage">
        <a href="/nutrition" style={{ padding: "85px 100px" }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <p>Nutrition</p>
            <img src="../../../alimentacionIcon.png" alt="" />
        </a>
        <a href="/training" style={{ padding: "85px 120px" }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <p>Training</p>
            <img src="../../../entrenamientoIcon.png" alt="" />
        </a>

        <a href="/social" style={{ padding: "85px 80px" }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <p>Social Club</p>
            <img src="../../../socialIcon.png" alt="" />
        </a>



    </div>
    );
}

export default HomePage;