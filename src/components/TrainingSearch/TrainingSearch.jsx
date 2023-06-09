import React, { useState } from "react";
import "./TrainingSearch.css";

const TrainingSearch = ({ setShowBodyTagPart }) => {

    const [showQuery, setShowQuery] = useState()


    const handleChange = ({ target }) => {
        const { value } = target
        setShowQuery(value)
    }


    const submitBodyExercise = (e) => {
        e.preventDefault()
        setShowBodyTagPart(showQuery)
        window.scrollTo(0, 1000)
    }


    return (
        <div id="cover">
            <form onSubmit={submitBodyExercise}>
                <div className="tb">
                    <div className="td">
                        <input onChange={handleChange} type="text" placeholder="Search" required />
                    </div>
                    <div className="td" id="s-cover">
                        <button style={{ background: "red" }} >
                            <div id="s-circle"></div>
                            <span></span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TrainingSearch;
