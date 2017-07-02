// Hobby.jsx 爱好组件
import React, { PropTypes } from 'react';

const propTypes = {
    hobby: PropTypes.string.isRequired
};

class Hobby extends React.Component {
    render() {
        return <li>{this.props.hobby}</li>
    }
}

Hobby.propTypes = propTypes;

export default Hobby;