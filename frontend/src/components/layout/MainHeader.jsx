import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/new-nutcache-logo.png';

export default class MenuHeader extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className='header-content'>
        <div className='logo-container'>
          <img
            className='logo-header'
            src={logo}
            alt='Nutcache'
          />
        </div>
        <div className='menu'>
          <Menu pointing vertical floated className='Menu'>
            <NavLink to='/'>
              <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
              />
            </NavLink>
          </Menu>
        </div>
      </div>
    )
  }
}