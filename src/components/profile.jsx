import React, {Component} from 'react';

class Profile extends Component {
    state = {  }
    style_container = {
        margin: '3vh',
        backgroundColor: '#efefef',

    };
    style_info = {
        margin: '1vh'
    };


    render() { 
        
        
        return (  
                
                <div class="container" style={this.style_container}>
                    <div class="row">
                        {/* <div class="col-md-3"> */}
                        <img style={{marginTop: '2vh'}} className="rounded-circle z-depth-2 col-md-12" alt="A beautiful girl" src="http://www.inspiredluv.com/wp-content/uploads/2016/09/27-beautiful-girl-image.jpg" />
                        {/* </div> */}
                    </div>
                    <div class="row" style={this.style_info}>

                        <div class="col-lg-12 ">
                            <p>user: </p>
                            <p>Slogan: </p>
                            <p>Location: </p>
                            <p>Website: </p>
                            <p>date: </p>
                        </div>

                    </div>



                </div>

                
        );
    }
}
 
export default Profile; 