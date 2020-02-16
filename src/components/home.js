import React, { Component } from 'react';
import Logo from "./logo"
import SearchBar from './searchbar';
import RecentPosts from './recentposts';
import Results from './results'

export default class Home extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <div>
            <Logo />
            <SearchBar/>
            <RecentPosts />
            <Results />
          </div>
        </div>
      </div>
    );
  }
}
