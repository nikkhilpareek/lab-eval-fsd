import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card } from 'react-bootstrap';

function Home() {
    return (
        <div className="container">
            <h2>Welcome to the home page.</h2>
            <p>This is the protected page accessible after login.</p>
            <h2>It is the h2 heading.</h2>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>Card A</Card.Title>
                                <Card.Text>
                                    Some quick example text.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>Card B</Card.Title>
                                <Card.Text>
                                    Some quick example text.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>Card C</Card.Title>
                                <Card.Text>
                                    Some quick example text.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>Card D</Card.Title>
                                <Card.Text>
                                Some quick example text.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;