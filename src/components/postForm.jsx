import React, {Component, Fragment} from 'react';
import db from "../config/database";
import fire from "../config/firebase";


class PostForm extends Component {
    state = {
        value: "",
        postPictureURL: "",
        user: "",
    };

    //    constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        this.authListener();
    }
  
    authListener() {
        fire.auth().onAuthStateChanged(user => {
          if (user) {
            // console.log('user', user);
            this.setState({ user });
          } else {
            this.setState({ user: null });
          }
        });
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = event => {
       
        let userEmail = this.state.user.email;
        let value = this.state.value;

        db.collection("profile")
            .doc()
            .set({
                email: userEmail,
                value: value,
                postPictureURL: "111this.state.postPictureURL",
          });

        event.preventDefault();
    }
   
    render() { 
        
        return ( 
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label> Post: </label>
                    <textarea type="text" value={this.state.value} onChange={this.handleChange} />
                    <button style={{margin: '1vh'}} type="submit">Post</button>
                    
                </form>
            </Fragment>
        );
    }
}
 
export default PostForm;
