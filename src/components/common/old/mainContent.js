import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div id="class" className="">
            <div className="content-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="rs-team-1 mb-5">
                                <div className="media">
                                    <img src={require("../../assets/images/dummy-img-600x600.jpg")} alt="" className="img-fluid" />
                                    <div className="sosmed-icon">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                    </div>
                                </div>
                                <div className="body">
                                    <div className="title">Dr. John Doel</div>
                                    <div className="text-primary">Veterinary</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-8">
                            <h3 className="text-secondary mb-1">Dr. John Doel</h3>
                            <p className="text-primary">Veterinary</p>
                            <p className="lead text-black">We are pets clinic dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Quisque ut dolor gravida, placerat libero vel, euismod. Ut enim ad minim veniam, quis nostrud exercitation. Quam temere in vitiis, legem sancimus haerentia. Pellentesque habitant morbi tristique senectus et netus. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore.</p>
                            <div className="spacer-30"></div>
                            <h3 className="text-secondary mb-4">Availability</h3>
                            <p>Mon - Fri : 08.00 am - 20.00 pm</p>
                            <p>Saturday : 09.00 am - 20.00 pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
        
  }
}

export default withRouter(MainContent);
