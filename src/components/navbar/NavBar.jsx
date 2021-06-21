import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import './style.scss'

const Nav = () => {
  const [navClass, setNavClass] = useState('')
  const history = useHistory()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navClass = ''
      if (window.scrollY >= 200) {
        navClass = 'scrolled'
      }
      setNavClass(navClass)
    })
  }, [])

  const toHome = useCallback(() => {
    history.push('/home')
  })

  const toDocs = useCallback(() => {
    history.push('/docs')
  })

  return (
    <nav id="header-navbar">
      <div className="container">
        <div className="row">
          <div className="col shadow-sm">
            <nav className={`navbar p-1 navbar-expand-lg ${navClass}`}>
              <a className="navbar-brand navbar-toggler border-0">
                <h1 className="text-light">FlyDocs</h1>
              </a>
              <button
                className="navbar-toggler btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-sliders-h text-light"></i>
              </button>

              <div
                className="collapse navbar-collapse d-flex justify-content-between"
                id="navbarSupportedContent"
              >
                <div className="lg-brand d-none d-lg-inline-block">
                  <span className="navbar-brand border-0 " onClick={toHome}>
                    <h3 className="text-light">FlyDocs</h3>
                  </span>
                </div>
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item" onClick={toHome}>
                    <div className="nav-link">HOME</div>
                  </li>
                  <li className="nav-item" onClick={toDocs}>
                    <span className="nav-link">DOCS</span>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      BUY NOW
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      LOGIN
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
