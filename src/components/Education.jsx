"use client"
import { motion } from "framer-motion"
import { FiCalendar, FiMapPin, FiAward } from "react-icons/fi"

const Education = () => {
  const educationData = [
    {
      id: 1,
      year: "2019-2022",
      degree: "Diploma in Computer Engineering",
      institution: "Vidylankar Polytechnic",
      location: "Wadala Road",
      // description: "Specialized in Human-Computer Interaction and User Experience Design. Graduated with honors.",
      cgpa: "8.4",
    },
    {
      id: 2,
      year: "2025 Batch",
      degree: "Bachelore in Artifical Intelligence and Machine Learning",
      institution: "SIES GST",
      location: "Nerul, Navi Mumbai",
      // description: "Advanced studies in digital product design, design thinking, and innovation methodologies.",
      cgpa: "7.89",
    },
    // {
    //   id: 3,
    //   year: "2023",
    //   degree: "UX Design Certification",
    //   institution: "Google UX Design Professional",
    //   location: "Online",
    //   description:
    //     "Comprehensive certification covering user research, wireframing, prototyping, and usability testing.",
    //   achievement: "Top 5% of cohort",
    // },
  ]

  return (
    <section className="education-section py-5">
      <div className="container">
        <div className="section-header mb-5">
          <h2 className="section-title green-text">Education Timeline</h2>
          <div className="section-underline"></div>
        </div>

        <div className="timeline-container">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <div className="timeline-year">
                  <FiCalendar className="timeline-icon" />
                  <span>{item.year}</span>
                </div>

                <div className="timeline-card">
                  <h3 className="timeline-degree">{item.degree}</h3>
                  <h4 className="timeline-institution">{item.institution}</h4>

                  <div className="timeline-location">
                    <FiMapPin className="location-icon" />
                    <span>{item.location}</span>
                  </div>

                  <p className="timeline-description">{item.description}</p>

                  {item.cgpa && (
                    <div className="timeline-achievement">
                      <FiAward className="achievement-icon" />
                      <span>CGPA: {item.cgpa}</span>
                    </div>
                  )}

                  {item.achievement && (
                    <div className="timeline-achievement">
                      <FiAward className="achievement-icon" />
                      <span>{item.achievement}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="timeline-dot"></div>
            </motion.div>
          ))}

          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  )
}

export default Education
