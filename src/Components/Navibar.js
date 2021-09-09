import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Navibar.css'

function Navibar() {
    return (
        <div style={{ paddingLeft: '70px' }} className="header">
            <Button.Group >
                <Link to='/'>
                    <div style={{ marginTop: '16px' }}>
                        <Button inverted color='black'>Home</Button>
                    </div>
                </Link>
                <Link to='/messages'>
                    <div style={{ marginLeft: '20px', marginTop: '16px' }}>
                        <Button inverted color='black'>
                            Messages
                        </Button>
                    </div>
                </Link>
                <Link to='/personal-space'>
                    <div style={{ marginLeft: '20px', marginTop: '16px' }}>
                        <Button inverted color='black'>
                            Personal Space
                        </Button>
                    </div>
                </Link>
            </Button.Group>
        </div>
    )
}
export default Navibar