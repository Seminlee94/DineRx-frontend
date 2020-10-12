import React from 'react'
import './OrderAhead.css'
import RightSideItem from './Cart/RightSideItem'
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
                <RightSideItem />
            </div>
        )
    }
}



export default RightSidebar