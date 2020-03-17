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
			className="navbar is-fixed-top"
        role="navigation"
		aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item"
                      onClick={e => {
                          e.preventDefault()
                          window.location.href = "/";
                      }}>
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
            <a className="navbar-item"
                      onClick={e => {
                          e.preventDefault()
                          window.location.href = "/";
                      }}>
                Home
              </a>
              <div class="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link"
                      onClick={e => {
                          e.preventDefault()
                          window.location.href = "/new-zealand-wine-regions";
                      }}>
                NZ Wine Regions                
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item"
                   onClick={e => {
                          e.preventDefault()
                          window.location.href = "/new-zealand-wine-regions";
                      }}>
                  All Regions
                </a>
                <a class="navbar-item"
                   onClick={e => {
                          e.preventDefault()
                          window.location.href = "/wines-north-island";
                      }}>
                North Island
                </a>
                <a class="navbar-item" 
                   onClick={e => {
                          e.preventDefault()
                          window.location.href = "/wines-south-island";
                      }}>
                South Island
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item"
                   onClick={e => {
                          e.preventDefault()
                          window.location.href = "/auckland-region";
                      }}>
                Auckland Region
                </a>
                <a class="navbar-item"
                   onClick={e => {
                          e.preventDefault()
                          window.location.href = "/canterbury-and-north-canterbury";
                      }}>
                Canterbury &amp; North Canterbury
                </a>
                <a class="navbar-item"
                   onClick={e => {
                          e.preventDefault()
                          window.location.href = "/central-otago";
                      }}>
                Central Otago
                </a>                     
                <a class="navbar-item"
                   onClick={e => {
                          e.preventDefault()
                          window.location.href = "/gisborne";
                      }}>
                Gisborne
                </a>
                <a class="navbar-item"
                   onClick={e => {
                          e.preventDefault()
                          window.location.href = "/hawkes-bay";
                      }}>
                Hawke's Bay
                </a>                
                <a class="navbar-item"
                   onClick={e => {
                          e.preventDefault()
                          window.location.href = "/marlborough";
                      }}>
                Marlborough
                </a>
                <a class="navbar-item"
                   onClick={e => {
                          e.preventDefault()
                          window.location.href = "/nelson";
                      }}>
                Nelson
                </a>
                <a class="navbar-item"
                   onClick={e => {
                          e.preventDefault()
                          window.location.href = "/northland";
                      }}>
                Northland
                </a>
                <a class="navbar-item"
                   onClick={e => {
                          e.preventDefault()
                          window.location.href = "/waikato";
                      }}>
                Waikato & Bay of Plenty
                </a>
                <a class="navbar-item"
                   onClick={e => {
                          e.preventDefault()
                          window.location.href = "/wairarapa";
                      }}>
                Wairarapa
                </a>
                <a class="navbar-item"
                   onClick={e => {
                          e.preventDefault()
                          window.location.href = "/waitaki-valley";
                      }}>
                Waitaki Valley
                </a>
                <a class="navbar-item"
                   onClick={e => {
                          e.preventDefault()
                          window.location.href = "/wellington";
                      }}>
                Wellington
                </a>
              </div> 

              </div>
              <a className="navbar-item"
                      onClick={e => {
                          e.preventDefault()
                          window.location.href = "/";
                      }}>
                Wine Map
              </a>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>             

            </div>

            
            <div className="navbar-end has-text-centered">
            
              <a className="navbar-item"
                      onClick={e => {
                          e.preventDefault()
                          window.location.href = "/session/register";
                      }}>
                      Register
              </a>
            
              <div class="buttons">
                <a class="button is-primary"
                    onClick={e => {
                          e.preventDefault()
                          window.location.href = "/pricing";
                      }}>
                  <strong>List with Us</strong>
                </a>
                <a class="button is-light"
                    onClick={e => {
                          e.preventDefault()
                          window.location.href = "/session/login";
                      }}>
                  Sign in
                </a>
              </div>

            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
