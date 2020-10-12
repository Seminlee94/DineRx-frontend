import React from 'react'
import '../../Order/OrderAhead.css'
// import { connect } from 'react-redux'
// import { getMeal } from '../../Redux/actions'

class RightSidebar extends React.Component {

    state = {
        showSide: false
    }

    checkScrollTop = () => {    
        if (window.pageYOffset > 1000){
            this.setState({ showSide: true })
        } else if (window.pageYOffset <= 1000){
           this.setState({ showSide: false })
        }  
     };

    componentDidMount() {
        window.addEventListener('scroll', this.checkScrollTop)
    }

    render() {

        return(
            <div className={this.state.showSide ? "right-sidebar" : "right-sidebar-inactive"}>
                <ul className="right-sidebar-ul">
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                </ul>
            </div>
        )
    }
}



export default RightSidebar