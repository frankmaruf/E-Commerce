import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <React.Fragment>
            <footer>
                <Container>
                    <Row>
                        <Col className="text-center py3">Copyright &copy; YooShop</Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    )
}

export default Footer
