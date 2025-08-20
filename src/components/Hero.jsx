"use client"
import { motion } from "framer-motion"
import profile_pic from "../assets/Me2.jpg"

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="green-line-container">
                <div className="green-line"></div>
                <div className="bouncing-ball"></div>
              </div>
              <motion.h1
                className="hero-title"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Web & App
                <br />
                Designer
              </motion.h1>
              <motion.p
                className="hero-description"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                With a blend of creativity and technical expertise, I create designs that not only look great but also
                enhance user experience and engagement. Explore my work and see how I bring concepts to life
              </motion.p>
              <motion.button
                className="btn btn-message"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>✈</span> Message
              </motion.button>
            </div>
          </div>
          <div className="col-lg-6">
            <motion.div
              className="hero-image"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img src= {profile_pic} alt="Suyash Joshi" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
