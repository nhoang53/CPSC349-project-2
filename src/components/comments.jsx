import React, {Component, Fragment} from 'react';
import CommentContent from "./commentcontent";

class Comments extends Component {
    state = {
        commentsCount: 1,
        collapse: 0
    };

    handleCollapse = () => {
        console.log('Like is clicked');
        if(this.state.collapse === 0) {
            this.setState({collapse: 1});
        }
        else {
            this.setState({collapse: 0});
        }
    }


    render() { 
    
        return ( 
            <Fragment>
                <button 
                    style={{margin: '1vh'}}
                    className="btn btn-secondary"
                    type="button" 
                    onClick={this.handleCollapse}
                >
                    Comments <span className="badge badge-light"> {this.state.commentsCount} </span>
                </button>

                <div className={this.getCollapseClasses()}>
                    <div className="card card-body">
                        <CommentContent />
                        <CommentContent />
                        <CommentContent />
                        <CommentContent />
                    </div>
                </div>


            </Fragment>
        );
    }

    getCollapseClasses() {
        let classes = "collapse ";
        classes += (this.state.collapse === 0 ? "" : "show");
        return classes;
    }
}
 
export default Comments;

