import React from "react"
import PropTypes from 'prop-types'

const Projects = ({ projectData }) => {
  const styles = {
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    title: {
      paddingRight: '50px',
      marginRight: '100px',
      borderRight: 'thin solid black'
    },
    description: {
      maxWidth: '400px',
      fontSize: '1.25rem',
      margin: '0',
    },
    details: {
      height: '400px',
      width: '400px',
      padding: '30px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      overflow: 'auto',
      transition: '0.3s ease-in-out'
    }
  }

  return (
    <div name="projects" className="section-wrapper">
      <div className="section-header" style={styles.header}>
        <h2 className="section-title" style={styles.title}>Projects</h2>
        <p className="project-description" style={styles.description}>Browse our current Work</p>
      </div>
      <div className="wrapper-content projects" style={styles.container}>
        {projectData.map(project => {
          return (
            <div key={project.node.title} style={styles.details}>
              <div style={styles.header}>
                <h5 style={styles.title}>{project.node.title}</h5>
                <p style={styles.description}>{project.node.metadata.summary}</p>
              </div>
              {project.node.metadata.image ? <img src={project.node.metadata.image.url} alt={project.node.title} /> : null}
              <p style={styles.description}>{project.node.metadata.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Projects.propTypes = {
  projectData: PropTypes.array.isRequired,
}

export default Projects
