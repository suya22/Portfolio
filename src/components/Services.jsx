"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FiGrid, FiUsers, FiLayers, FiZap } from "react-icons/fi"
import UI_Design from "../assets/UI.png"
import UX_Research from "../assets/UX.png"
import Product_Design from "../assets/product.jpg"
import Interactive from "../assets/interactive.jpg"

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      icon: <FiGrid />,
      title: "UI Design",
      description:
        "I specialize in creating interfaces that not only look beautiful but also enhance usability and drive engagement",
      image: UI_Design,
    },
    {
      icon: <FiUsers />,
      title: "UX Research",
      description:
        "Delving deep into user minds and behaviours, I conduct research to unveil valuable insights driving design decisions",
      image: UX_Research, 
    },
    {
      icon: <FiLayers />,
      title: "Product Design",
      description:
        "I collaborate closely with you to transform ideas into tangible, user-centred solutions that convert users to long-lasting customers.",
      image: Product_Design,
    },
    {
      icon: <FiZap />,
      title: "Interactive",
      description:
        "From intuitive gestures to immersive animations, I leverage interactivity to create memorable user journeys.",
      image: Interactive,
    },
  ]

  return (
    <section id="services" className="services-section">
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
              <h2 className="section-title green-text">What I do</h2>
              <div className="title-line"></div>
            </motion.div>
          </div>
        </div>

        <div className="row g-4 mb-5">
          {services.map((service, index) => (
            <div key={index} className="col-lg-6 col-xl-3">
              <motion.div
                className="service-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`service-image-overlay ${hoveredService === index ? "active" : ""}`}>
                  <img src={service.image || "/placeholder.svg"} alt={service.title} />
                </div>

                <div className={`service-content ${hoveredService === index ? "hidden" : ""}`}>
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
