"use client"
import { motion } from "framer-motion"
import { FiSmartphone, FiEye, FiUser, FiHeart, FiTrendingUp, FiBarChart } from "react-icons/fi"

const Offer = () => {
  const skills = [
    {
      id: 1,
      icon: <FiSmartphone className="skill-icon" />,
      title: "Responsive Design",
      description:
        "Let's embark on a journey where your design not only looks great but also functions flawlessly across all platforms.",
    },
    {
      id: 2,
      icon: <FiEye className="skill-icon" />,
      title: "Accessibility",
      description:
        "I believe in breaking down barriers and ensuring that everyone, regardless of ability, can interact with digital content seamlessly.",
    },
    {
      id: 3,
      icon: <FiUser className="skill-icon" />,
      title: "User-Focused Design",
      description:
        "I believe that truly impactful digital experiences are born from a deep understanding of user needs, behaviours, and preferences.",
    },
    {
      id: 4,
      icon: <FiHeart className="skill-icon" />,
      title: "Brand-Focused",
      description:
        "Creating cohesive brand experiences that resonate with your target audience and strengthen brand identity.",
    },
    {
      id: 5,
      icon: <FiTrendingUp className="skill-icon" />,
      title: "Interactive",
      description:
        "Designing engaging interactions that guide users through meaningful journeys and enhance overall experience.",
    },
    {
      id: 6,
      icon: <FiBarChart className="skill-icon" />,
      title: "Creatively Unique",
      description:
        "Pushing creative boundaries to deliver distinctive solutions that stand out in the digital landscape.",
    },
  ]

  return (
    <section className="offer-section py-5">
      <div className="container">
        <div className="section-header mb-5">
          <h2 className="section-title green-text">What can I offer</h2>
          <div className="title-line"></div>
        </div>

        <div className="row g-4">
          {skills.map((skill) => (
            <div key={skill.id} className="col-lg-4 col-md-6">
              <motion.div className="skill-card" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                {skill.icon}
                {skill.experience && <span className="skill-experience">{skill.experience}</span>}
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>

    
  )
}

export default Offer
