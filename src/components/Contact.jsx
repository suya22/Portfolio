"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Contact_pp from "../assets/contact.jpg"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    message: "",
    workType: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              className="contact-form-wrapper"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="contact-title">Get In Touch</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Business Name *</label>
                      <input
                        type="text"
                        name="businessName"
                        className="form-control"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Message Me *</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Work Type</label>
                  <select name="workType" className="form-control" value={formData.workType} onChange={handleChange}>
                    <option value="">Select work type</option>
                    <option value="web-design">Web Design</option>
                    <option value="app-design">App Design</option>
                    <option value="branding">Branding</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
                <motion.button
                  type="submit"
                  className="btn btn-send"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send
                </motion.button>
              </form>
            </motion.div>
          </div>
          <div className="col-lg-6">
            <motion.div
              className="contact-image"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src= {Contact_pp} alt="Contact" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
