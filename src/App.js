import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import AppIndex from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/customStyle.css';
import SingleProduct from './components/SingleProduct';
import shop from './components/shop';
import blog from './components/blog';
import blogsingle from './components/blogsingle';
import privacyPolicy from './components/privacyPolicy';
import termCondition from './components/termCondition';


function App() {
  return (
    <Router>
      <div className='App'>
      <Switch>
        <Route path="/" exact component={AppIndex} />
        <Route path="/singleproduct" component={SingleProduct} />
        <Route path="/shop" component={shop} />
        <Route path="/blog" component={blog} />
        <Route path="/blogsingle" component={blogsingle} />
        <Route path="/privacypolicy" component={privacyPolicy} />
        <Route path="/termcondition" component={termCondition} />
     </Switch>
    </div>
  </Router>
  );
}

export default App;
