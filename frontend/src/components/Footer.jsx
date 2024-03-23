import { Contrainer, Row, Col } from "react-bootstrap";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <Contrainer>
                <Row>
                    <Col className="text-center py-3">
                        <p>ProShop &copy; {currentYear}</p>
                    </Col>
                </Row>
            </Contrainer>
        </footer>
    );
};
export default Footer;
