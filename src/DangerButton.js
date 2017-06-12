/**
 * Created by kaishui on 17-6-12.
 */
import React, { Component } from 'react';
import Button from './Button'; // Import a component from another file

class DangerButton extends Component {
    render() {
        return <Button color="red" />;
    }
}

export default DangerButton;
