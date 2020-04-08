import React from "react"
import PropTypes from "prop-types"

const About = ({ peopleData, pageData }) => {
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
    person: {
      width: '25%',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textDecoration: 'none'
    },
    personName: {
      marginTop: '0',
      color: 'black',
      fontSize: '1rem'
    },
    personTitle: {
      color: 'grey',
      fontSize: '0.8rem',
    }
  }
  return (
    <div name="about" className="section-wrapper">
      <div style={styles.header}>
        <h2 className="section-title" style={styles.title}>Who We Are</h2>
        <p style={styles.description}>{pageData.people_description}</p>
      </div>
      <div className="wrapper-content people" style={styles.container}>
        {peopleData.map(person => {
          return (
            <div key={person.node.title} style={styles.person}>
              <div
                style={{
                  background: `url(${person.node.metadata.image.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  marginBottom: '14px',
                  width: '100%',
                  height: '200px',
                }}
              />
              <h5 style={styles.personName}>{person.node.title}</h5>
              <h6 style={styles.personTitle}>{person.node.metadata.job_title}</h6>
            </div>
          )
        })}
      </div>
    </div>
  )
}

About.propTypes = {
  pageData: PropTypes.object.isRequired,
  peopleData: PropTypes.array.isRequired,
}

export default About
