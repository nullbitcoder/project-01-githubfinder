import React, { Component } from 'react';

export class UserItem extends Component {
  // constructor runs when component runs
  //dont need constructor to do all of this, old way
  // constructor() {
  //   super(); //call to use parent class constructor, mock API (Soon Fetch)
  //   this.state = {
  //     id: 'id',
  //     login: 'mojombo',
  //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
  //     html_url: 'https://github.com/mojombo',
  //   }; //JuSt object
  // }
  //better way to do it
  state = {
    id: 'id',
    login: 'mojombo',
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    html_url: 'https://github.com/mojombo',
  };

  render() {
    const { login, avatar_url, html_url } = this.state; //destructuring, no longer have to "this.state.avatar_url, or this.state.object-var-name"...looks cleaner
    return (
      <div className='card text-center'>
        {/* call object data */}
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className='btn btn-dark btn-sm my-1'>
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
