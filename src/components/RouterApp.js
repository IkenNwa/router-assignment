import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Page from './Pages';
import PageNotFound from './404Page';

function RouterApp() {
  return (
    <div className="route">
      <Routes>
          <Route exact path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/page" exact element={<Page />} />
          <Route path="*" component={PageNotFound} />
      </Routes>
    </div>
  );
}

export default RouterApp;
