import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/cellardoor.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item" title="Logo">
              <img src={logo} alt="NZ Cellar Door" />
            </a>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <a href="/" className="navbar-item">
                Home
              </a>
              <a className="navbar-item" href="/new-zealand-wine-regions">
                NZ Wine Regions
              </a>
              <a className="navbar-item" href="/">
                Wine Map
              </a>
              <a className="navbar-item" href="/blog">
                Blog
              </a>
            </div>
            <div className="navbar-end has-text-centered">
              <a className="navbar-item" href="/pricing">
                List with us
              </a>
              <a className="navbar-item" href="/session/register">
                Sign up
              </a>
              <a className="navbar-item" href="/session/login">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
