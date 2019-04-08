import React, { Component } from 'react';

class TVShow extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div class="row">
                <div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <img src="" alt="TV Show" />
                        <div class="caption">
                            <h3>{this.props.showTitle}</h3>
                            <p>{this.props.showSubtitle}</p>
                            <p><a href="#" class="btn btn-primary" role="button">Switch</a> <a href="#" class="btn btn-default" role="button">Recording</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TVShow;