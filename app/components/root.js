import React from 'react'
import CandyList from './CandyList';
import { Route, Switch, NavLink } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <nav>
        <NavLink to='/'>Goodie Bag</NavLink>
        <NavLink to='/candies'>See All Candies</NavLink>
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Switch>
            <Route path="/candies" component={CandyList} />
        </Switch>
      </main>
    </div>
  )
}

export default Root
