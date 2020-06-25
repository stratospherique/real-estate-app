import React from 'react';
import { connect } from 'react-redux';

const FlashBasic = ({ className, children, message, type }) => {
    return (
        <div className={className}>
            <strong>{type}</strong>
            <p>{message}</p>
            {children}
        </div>
    )
}

const mapStateToProps = ({ flash }) => ({
    type: flash.type,
    message: flash.message,
})

export default connect(mapStateToProps, null)(FlashBasic);
