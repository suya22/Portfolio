"use client"
import { motion } from "framer-motion"
import FashionStore from "../assets/FashionStore.jpg"
import TodoList from "../assets/todo_banner.jpg"
import EcoAction from "../assets/EcoAction.jpg"


const Projects = () => {
  const projects = [
    {
      // category: "Package Design Project",
      title: "FashionStore",
      description:
        "Developed a full-stack e-commerce platform using MongoDB, Express, React, and Node.js. Implemented secure user authentication, product catalogue with advanced filtering, shopping cart functionality, and an admin dashboard.",
      image: FashionStore,
      buttonText: "View Project",
      url: "https://github.com/suya22/FashionStore", 
    },
     {
      category: "Still in progress....",
      title: "EcoAction",
      description:
        "EcoAction is a MERN stack-based AI platform that I developed to enable communities to report and analyze environmental data. I designed the backend APIs, database schema, and integrated generative AI to automate data summarization and provide actionable insights",
      image: EcoAction,
      buttonText: "View Project",
      url: {}, 
    },
     {
      // category: "Package Design Project",
      title: "Todo List",
      description:
        "Built a feature-rich Todo List application using React.js, featuring task creation, editing, deletion, and completion tracking. Added real-time components, including dynamic date display and auto-updating time.",
      image: TodoList,
      buttonText: "View Project",
      url: "https://github.com/suya22/todo-app", 
    },
  ]

  return (
    <>
       <div className="title-line"></div>
      <div className="scrolling-banner">
      <div className="scrolling-text">
        Let's build together • Let's build together • Let's build together • Let's build together • Let's build
        together • Let's build together • Let's build together • Let's build together
      </div>
      </div>
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-12">
              <motion.div
                className="project-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="project-image">
                      <img src={project.image || "/placeholder.svg"} alt={project.title} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-content">
                      <div className="project-category">{project.category}</div>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-project btn-project-small"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>👁</span> {project.buttonText}
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Projects
