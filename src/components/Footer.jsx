"use client"
import { motion } from "framer-motion"
import { FiGlobe, FiGithub, FiLinkedin, FiInstagram, FiArrowUp } from "react-icons/fi"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <motion.div
              className="footer-column"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="footer-title">Contact</h4>
              <div className="footer-content">
                <p>suyash.joshi9925@gmail.com</p>
                <p>+91 9923391855</p>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-3">
            <motion.div
              className="footer-column"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="footer-title">Location</h4>
              <div className="footer-content">
                <p>Mumbai, India</p>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-3">
            <motion.div
              className="footer-column"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="footer-title">Follow</h4>
              <div className="footer-social">
                <a href="#" className="social-link">
                  <FiGlobe />
                </a>
                <a href="https://github.com/suya22" className="social-link">
                  <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/suyash-joshi-382699196/" className="social-link">
                  <FiLinkedin />
                </a>
                <a href="#" className="social-link">
                  <FiInstagram />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-3">
            <motion.div
              className="footer-column text-end"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="scroll-top-btn"
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiArrowUp />
              </motion.button>
            </motion.div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-6">
            <motion.p
              className="footer-copyright"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              © 2025 All Rights to SJ
            </motion.p>
          </div>
          <div className="col-lg-6 text-end">
            <motion.a
              href="#projects"
              className="project-collection-link"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Project Collection
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
