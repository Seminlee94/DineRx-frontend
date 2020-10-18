import React from 'react'
import './OrderAhead.css'
import RightSideItem from './Cart/RightSideItem'

class RightSidebarNow extends React.Component {

    state = {
        showSide: false
    }

    checkScrollTop = () => {    
        if (window.pageYOffset > 600){
            this.setState({ showSide: true })
        } else if (window.pageYOffset <= 600){
           this.setState({ showSide: false })
        }  
     };

    componentDidMount() {
        window.addEventListener('scroll', this.checkScrollTop)
    }

    render() {
        
        return(
            <div className={this.state.showSide ? "right-sidebar" : "right-sidebar-inactive"}>
                <RightSideItem schedule={this.props.schedule} />
            </div>

        )
    }
}



export default RightSidebarNow