"use client"

import { motion } from "framer-motion"

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "REST API"],
    },
    {
      category: "Database",
      skills: ["FireBase", "MongoDB", "SQL", "MySQL"],
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "GitHub", "Vercel"],
    },
    // {
    //   category: "Design",
    //   skills: ["Figma", "Adobe XD", "UI/UX Design", "Wireframing", "Prototyping"],
    // },
    // {
    //   category: "Other",
    //   skills: ["Python", "React Native", "WordPress", "Stripe Payments", "Unit Testing"],
    // },
  ]

  return (
    <section className="skills-section">
      <div className="container">
        <motion.div
          className="section-header text-left green-text mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Skills</h2>
          <div className="section-underline"></div>
        </motion.div>

        <div className="row">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              className="col-lg-4 col-md-6 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="skill-category-card">
                <h4 className="category-title">{category.category}</h4>
                <div className="skills-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
