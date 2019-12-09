import React, {Component, Fragment} from 'react';
import db from "../config/database";
import fire from "../config/firebase";


class EditProfileForm extends Component {
    state = {
        avatarURL: "",
        date: "",
        email: "",
        location: "",
        slogan: "",
        userID: "",
        username: "",
        website: "",
    };

    //    constructor(props) {
    //     super(props);
        
    // }

    // handleAvatar() {

    // }

    componentDidMount() {
        this.authListener();
    }
  
    authListener() {
        fire.auth().onAuthStateChanged(user => {
          if (user) {
            this.setState({ user });
          } else {
            this.setState({ user: null });
          }
        });
    }

    handleDateChange = (event) => {
        this.setState({date: event.target.value});
    }
    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }
    handleLocationChange = (event) => {
        this.setState({location: event.target.value});
    }
    handleSloganChange = (event) => {
        this.setState({slogan: event.target.value});
    }
    handleUsernameChange = (event) => {
        this.setState({username: event.target.value});
    }
    handleWebsiteChange = (event) => {
        this.setState({website: event.target.value});
    }



    handleSubmit = event => {

        alert(`
                "date: " ${this.state.date}
                "email: " ${this.state.user.email}
                "location: " ${this.state.location}
                "slogan: " ${this.state.slogan}
                ${this.state.userID}
                "username: " ${this.state.username}
                "website:" ${this.state.website}
            `)
        
        // let avatarURL = this.state.avatarURL;
        let date      = this.state.date;
        let email     = this.state.user.email;
        let location  = this.state.location;
        let slogan    = this.state.slogan;
        // let userID    = this.state.userID;
        // let username  = this.state.user.name;
        let website   = this.state.website;
        

        // let docref = db.collection("profile");
        // let query = docref.where("email", "===", {email1});
        // console.log(email1)
        // var citiesRef = db.collection("cities");

        // var query = citiesRef.where("capital", "==", true);

        // query
        let ref = db.collection("profile")
        // db.collection("profile")
        ref
            .doc()
            .set({
                // avatarURL: avatarURL,
                date: date,
                email: email,
                location: location,
                slogan: slogan,
                // userID: userID,
                // username: username,
                website: website,

          });
        
        event.preventDefault();
    }
   
    render() { 

        return ( 
            <Fragment>
                {/* {userEmail} */}
                <form onSubmit={this.handleAvatar}>
                    <button style={{margin: '1vh'}} type="submit">Change Avatar</button>
                </form>

                <form className="container" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <label className="col-lg-5 col-md-4 col-sm-4"> User name: </label>
                        <input className="col-lg-7 col-md-8 col-sm-8" onChange={this.handleUsernameChange} type="text" value={this.state.username} />
                    </div>
                    <div className="row">
                        <label className="col-lg-5 col-md-4 col-sm-4"> Slogan: </label>
                        <input className="col-lg-7 col-md-8 col-sm-8" onChange={this.handleSloganChange}   type="text" value={this.state.slogan} />
                    
                    </div>                    
                    <div className="row">
                        <label className="col-lg-5 col-md-4 col-sm-4">Location: </label>
                        <input className="col-lg-7 col-md-8 col-sm-8" onChange={this.handleLocationChange} type="text" value={this.state.location} />
                    </div>                    
                    <div className="row">
                        <label className="col-lg-5 col-md-4 col-sm-4"> Website:  </label>
                        <input className="col-lg-7 col-md-8 col-sm-8" onChange={this.handleWebsiteChange}  type="text" value={this.state.website} />
                    </div>                    
                    <div className="row">
                        <label className="col-lg-5 col-md-4 col-sm-4">Date: </label>
                        <input className="col-lg-7 col-md-8 col-sm-8" onChange={this.handleDateChange}     type="text" value={this.state.date} />
                    </div>                    
                    <div className="row">
                    
                    </div>                    

                    <button style={{margin: '1vh'}} type="submit">Submit</button>
                    
                </form>
            </Fragment>
        );
    }
}
 
export default EditProfileForm;
