import React, { useState, useEffect } from 'react'
import './style.scss'

const Nav = () => {
  const [navClass, setNavClass] = useState('')
  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navClass = ''
      if (window.scrollY >= 200) {
        navClass = 'scrolled'
      }
      setNavClass(navClass)
    })
  }, [])

  return (
    <nav id="header-navbar">
      <div className="container">
        <div className="row">
          <div className="col shadow-sm">
            <nav className={`navbar p-1 navbar-expand-lg ${navClass}`}>
              <a className="navbar-brand navbar-toggler border-0" href="#">
                {/* <img src="images/logo.png" className="img-fluid" style="max-width:90px" alt=""/> */}
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
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a
                      className="nav-link"
                      style={{ paddingLeft: '25px' }}
                      href="#"
                    >
                      融职教育<span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      style={{ paddingLeft: '25px' }}
                      href="#"
                    >
                      学习猿地
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      style={{ paddingLeft: '25px' }}
                      href="#"
                    >
                      智校云
                    </a>
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
                      培养模式
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
                      培养方向
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
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      Web全栈就业班 <i className="mark text-danger">￥9800</i>{' '}
                      <s>￥19800</s>
                    </a>
                  </li>
                </ul>
                <div className="form-inline my-2 my-lg-0 nav-item dropdown">
                  <a
                    style={{ paddingLeft: '25px' }}
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    咨询微信
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
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
