"use client"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <motion.div
              className="section-header"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title green-text">A Bit About Me</h2>
              <div className="title-line"></div>
            </motion.div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.h3
              className="about-title"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Unveiling the Creative Journey of Suyash Joshi
            </motion.h3>
          </div>
          <div className="col-lg-6">
            <motion.p
              className="about-description"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
            Currently honing my skills as a Full Stack Web Developer, I immerse myself in creating modern, responsive, and high-performing web applications that seamlessly adapt to user needs. With expertise in the MERN stack, Flutter, and a range of frontend and backend technologies, I craft digital solutions that blend functionality with an engaging user experience. From developing e-commerce platforms with secure authentication to building interactive UIs, I approach every project with a passion for problem-solving and a commitment to quality. I’m driven by the challenge of turning ideas into impactful digital experiences that inspire and deliver results.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
