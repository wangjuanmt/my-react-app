import React from 'react';

function ComposeMenu(props) {
  return <li><a href={props.linked}>{props.title}</a></li>;
}

class Header extends React.Component {
  render() {
    return (
      <ul>
        {/* <li><a class="active" href="#">Home</a></li> */}
        {/* <li>
          <a href="#">
-              <img src="./src/images/logo.svg"/>
-         </a>
        </li> */}
        <ComposeMenu linked="#" title="Movie" />
        <ComposeMenu linked="#" title="Music" />
        <ComposeMenu linked="#" title="Book" />
        <ComposeMenu linked="#" title="About" />
    </ul>
    );
  }
}

export default Header;