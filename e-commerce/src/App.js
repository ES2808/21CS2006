import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductListPage from './components/ProductListPage';
import ProductDetailPage from './components/ProductDetailPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductListPage} />
        <Route path="/product/:id" component={ProductDetailPage} />
      </Switch>
    </Router>
  );
}

export default App;
