import React from 'react'
import './Diet.css'

function DietSide() {

    let userDiet = localStorage.getItem("diet")

    return(
        <div className="diet-container">
            <div className="sidebar-div">
                <ul className="sidebar-ul">
                    {/* {dietSidebar.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => this.clickHandler(item)}
                            >
                                {item}
                            </li>
                        )
                    })} */}
                    <li><a href={`/about/${userDiet}`} >About <b>{userDiet}</b> Diet</a></li>
                    <li><a href="/allergies" >About my allergies</a></li>
                    <li><a href="/edu_diets" >Education about diets</a></li>
                    <li><a href="/eat_healthy" >Eating healthy</a></li>
                    <li><a href="/recommendation" >Recommendation</a></li>
                    <li><a href="/qna" >Q&A</a></li>
                </ul>
            </div>
        </div>
    )
    
}

export default DietSide