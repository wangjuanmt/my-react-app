import React from 'react';
class Header extends React.Component {

  render() {
    return (
      <ul>
        {/* <li><a class="active" href="#">Home</a></li> */}
        <li>
          <a href="#">
-              <img src="./src/images/logo.svg"/>
-         </a>
        </li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Movie</a></li>
        <li><a href="#">Music</a></li>
        <li><a href="#">Book</a></li>
        <li><a href="#">About</a></li>
    </ul>
    );
  }
}

export default Header;