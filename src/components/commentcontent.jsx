import React, {Component, Fragment} from 'react';

class CommentContent extends Component {
   
    render() { 
        return (  
            <Fragment>
                <h6>User</h6>
                <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </p>
            </Fragment>
        );
    }
}
  
export default CommentContent; 




// <button 
//                     style={{margin: '1vh'}}
//                     type="button" 
//                     class={this.getBadgeClasses()}
//                     onClick={this.handleLikeClick}    
//                 >
//                     Like <span class="badge badge-light"> {this.state.likeCount} </span>
//                 </button>