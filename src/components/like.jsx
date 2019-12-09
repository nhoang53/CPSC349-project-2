import React, {Component, Fragment} from 'react';

class Like extends Component {
    state = {
        likeCount: 300,
        likeActive: 0
    };

    handleLikeActive = () => {
        console.log('Like is clicked');
        if(this.state.likeActive === 0) {
            this.setState({likeActive: 1});
        }
        else {
            this.setState({likeActive: 0});
        }
    }

    handleLikeCount = () => {
        if(this.state.likeActive === 0) {
            this.setState({likeCount: this.state.likeCount+1});
        }
        else {
            this.setState({likeCount: this.state.likeCount-1});
        }
    }

    handleLikeClick = () => {
        this.handleLikeActive();
        this.handleLikeCount();
    }

    render() { 
        
        
        return ( 
            <Fragment>
                <button 
                    style={{margin: '1vh'}}
                    type="button" 
                    className={this.getBadgeClasses()}
                    onClick={this.handleLikeClick}    
                >
                    Like <span className="badge badge-light"> {this.state.likeCount} </span>
                </button>
            </Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "btn btn-";
        classes += (this.state.likeActive === 0 ? "light" : "primary");
        return classes;
    }
    formatCount() {

    }

    
}
 
export default Like;

