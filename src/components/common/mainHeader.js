import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
render() {
    return (
<div className="eco--header--wraper eco--header--1">
    <div className="eco--header--top">
        <div className="container">
            <div className="row">
                <div className="col-md-2 col-xs-4">
                    <div className="eco--logo">
                        <a href="#">Pets Care</a>
                    </div>
                </div>
                <div className="col-md-10 col-xs-8">
                    <div className="eco--header--btn text-right">
                        <a href="#" className="eco--btn">Purchase</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="eco--header--bottom">
        <div className="container">
            <div className="row">
                <div className="col-md-7 eco--menu--col col-sm-6 clearfix">
                                    <nav className="eco--main--menu">
                        <ul>
                            <li className="current-menu-item"><a onClick={()=>this.props.history.push('/')}>Home</a>
                            </li>
                            <li><a onClick={()=>this.props.history.push('/shop')}> Shop</a></li>
                            <li><a onClick={()=>this.props.history.push('/singleproduct')}> Products</a></li>
                            <li><a onClick={()=>this.props.history.push('/blog')}> Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>                </div>
                <div className="col-md-5 col-sm-6  clearfix">
                    <nav className="eco--right--nav">
                        <ul>
                        <li><a onClick={()=>this.props.history.push('/privacypolicy')}>Privacy Policy</a></li>
                            <li><a onClick={()=>this.props.history.push('/termcondition')}>Terms & Conditions</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div> 
    );
        
  }
}

export default withRouter(MainHeader);
