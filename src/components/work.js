import React from "react"
import PropTypes from 'prop-types'
import { Icon } from 'rsuite'

const Work = ({ pageData, serviceData }) => {
  const styles = {
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
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
    service: {
      height: '250px',
      width: '200px',
      margin: '50px',
      paddingTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      overflowX: 'auto',
      color: 'black',
    },
    serviceName: {
      fontSize: '1.2rem',
    },
    serviceDescription: {
      fontSize: '0.9rem',
      color: '#a9a9a9',
    },
  }
  return (
    <div name="work" className="section-wrapper">
      <div style={styles.header}>
        <h2 style={styles.title}>What We Do</h2>
        <p style={styles.description}>{pageData.service_description}</p>
      </div>
      <div className="wrapper-content services" style={styles.container}>
        {serviceData.map(service => (
          <div key={service.node.title} style={styles.service}>
            <Icon size="3x" icon={service.node.metadata.icon} />
            <h5 style={styles.serviceName}>{service.node.title}</h5>
            <p style={styles.serviceDescription}>{service.node.metadata.summary}</p>
            <p style={styles.serviceDescription}>{service.node.metadata.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

Work.propTypes = {
  pageData: PropTypes.object.isRequired,
  serviceData: PropTypes.array.isRequired,
}

export default Work
