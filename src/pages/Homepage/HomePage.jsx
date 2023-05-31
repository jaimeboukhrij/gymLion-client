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
        <a href="" style={{ padding: "85px 60px" }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <p>Entrenamiento</p>
            <img src="../../../entrenamientoIcon.png" alt="" />
        </a>
        <a href="#" >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <p>LionClub</p>
            <img src="../../../socialIcon.png" alt="" />
        </a>


    </div>
    );
}

export default HomePage;