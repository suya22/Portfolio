"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Scrolling Text Banner */}
      <div className="scrolling-banner">
        <div className="scrolling-text">
          <span>
            Building Lasting Experiences Through Digital Media • Building Lasting Experiences Through Digital Media •
            Building Lasting Experiences Through Digital Media •{" "}
          </span>
        </div>
      </div>

      {/* Navigation */}
      <motion.nav
        className="navbar navbar-expand-lg custom-navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <a className="navbar-brand" href="#home">
            <div className="logo-icon">
              <div className="logo-square"></div>
            </div>
            Suyash Joshi
          </a>

          <div className="navbar-nav ms-auto d-none d-lg-flex">
            <a className="nav-link" href="#home">
              Home
            </a>
            <a className="nav-link" href="#about">
              About Me
            </a>
            <a className="nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </div>

          <button className="menu-toggle d-lg-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </motion.nav>
    </>
  )
}

export default Header
