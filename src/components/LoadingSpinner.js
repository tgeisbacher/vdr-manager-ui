import React, {Component} from 'react';

class LoadingSpinner extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>
            </div>
        )
    }
}

export default LoadingSpinner;