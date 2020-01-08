import React from 'react'
import PropTypes from 'prop-types'

class ContactCard extends React.Component {
    render() {
        return <div>
            <p>Name: {this.props.contactName}</p>
            <p>Mobile Number: {this.props.mobileNumber}</p>
            <p>Work Number: {this.props.workPhoneNumber}</p>
            <p>Email: {this.props.email}</p>
            <br/>
        </div>;
    }
}

//<ContactCard contactName = "" mobileNumber = "" workPhoneNumber = "" email = ""/>



ContactCard.propTypes = {
    contactName: PropTypes.string.isRequired,
    mobileNumber: PropTypes.number.isRequired,
    workPhoneNumber: PropTypes.number,
    email: PropTypes.string.isRequired
}

export default ContactCard;