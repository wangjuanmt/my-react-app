import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      active: !state.active
    }));
    console.log('active is:', this.state.active);
  }


  render() {
    return (
      <ul>
        {/* <li><a class="active" href="#">Home</a></li> */}
        {/* <li>
          <a href="#">
-              <img src="./src/images/logo.svg"/>
-         </a>
        </li> */}
        <li><a href="#" onClick={this.handleClick}>Movie</a></li>
        <li><a href="#" onClick={this.handleClick}>Music</a></li>
        <li><a href="#" onClick={this.handleClick}>Book</a></li>
        <li><a href="#" onClick={this.handleClick}>About</a></li>
    </ul>
    );
  }
}

export default Header;