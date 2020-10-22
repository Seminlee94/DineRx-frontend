import React from 'react'
import './Diet.css'
import Diet from "../diet.json"


let userDiet = localStorage.getItem("diet")
class DietSide extends React.Component {

    // state = {
    //     clicked: false,
    //     obj: {}
    // }


    // clickHandler = (item) => {
    //     // let user_diet = item.split(" ")[1]
    //     let diet_obj = Diet.Diet.filter(obj => obj.diet===userDiet)
            
    //     this.setState(() => ({ clicked: !this.state.clicked, obj: diet_obj }))
    // }

    render() {
        // let dietSidebar = [`About ${userDiet}`, "About my allergies", "Education about diets", "Eating healthy", "Recommendation", "Q&A"]
        // let userAllergy = localStorage.getItem("allergies")
        // console.log(this.state)

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
}

export default DietSide