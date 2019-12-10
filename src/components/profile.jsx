import EditProfileForm from "./editProfileForm";
import React, {Component, Fragment} from 'react';

class Profile extends Component {
    // state1 = {
    //     show: true
    //   }
    // state2 = {
    //     show: false
    //   }
    
      constructor( props ) {
          super( props )
          this.state = { show: true };
        //   this.state2 = { show2: false};

          this.handlePrompEdit = this.handlePrompEdit.bind(this);
        //   this.handlePrompView = this.handlePrompView.bind(this);

      }



    style_container = {
        margin: '3vh',
        backgroundColor: '#efefef',

    };
    style_info = {
        margin: '1vh'
    };

   

    
 
    handlePrompEdit = () => {
        const { show } = this.state;
        // const { show2 } = this.state2;

        this.setState({show: !show})
        // this.setState(this.state2, {show: true})

    }
    // handlePrompEdit = () => {
    //         // // let style1 = "display: " + ""
    //         // console.log(this.state.style1);
    //         this.setState({style1: this.state.style1 = "{display: 'none'}"}); 
    //         this.setState({style2: this.state.style2 = "{ display: ''}"}); 
    //         console.log(this.state.style1);
    // }
    handlePrompView() {
        
        
    }

    render() { 
        
        
        return (  
            <Fragment>
                <div className="container" style={this.style_container}>
                    <div className="row">
                        {/* <div class="col-md-3"> */}
                        <img style={{marginTop: '2vh'}} className="rounded-circle z-depth-2 col-md-12" alt="A beautiful girl" src="http://www.inspiredluv.com/wp-content/uploads/2016/09/27-beautiful-girl-image.jpg" />
                        {/* </div> */}
                    </div>
                    <div className= "row">
                        
                        <div className="col-lg-12">
                            <p>user: </p>
                            <p>Slogan: </p>
                            <p>Location: </p>
                            <p>Website: </p>
                            <p>date: </p>
                            <button
                                type="button"
                                onClick={this.handlePrompEdit}
                            >
                                Edit Profile
                            </button>
                            
                        </div>

                        <div className="col-lg-12">
                            {this.state.show === false && <EditProfileForm />}
                            {/* {this.state.(!show) && <EditProfileForm />} */}
                            {/* <EditProfileForm /> */}
                            
                        </div>

                    </div>

                </div>
                
            </Fragment>    
            


    )}; // End render

    // getDisplayClasses() {
    //     let classes = "btn btn-";
    //     classes += (this.state.likeActive === 0 ? "light" : "primary");
    //     return classes;
    // }
} // End class
 
export default Profile; 