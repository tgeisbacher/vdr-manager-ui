import React, { Component } from 'react';


class APIError extends Component{
    render(){
        const {message} = this.props
        return(
            <div>
                <div className="alert alert-danger" style={{marginTop: '50px', fontSize: '22px'}}role="alert">{message ? message : 'unknown error'}</div>
            </div>
        )
    }
}

export default APIError