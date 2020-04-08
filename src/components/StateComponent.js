import React, { Component } from 'react';
import { Card, CardTitle, CardText, Badge, Progress, Container, Row, Col } from 'reactstrap';

class States extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            total: null
        };
    }

    async componentDidMount() {

        const response = await fetch('https://api.covid19india.org/data.json');
        const data = await response.json();
        this.setState({ total: data, loading: false })
    }
    render() {

        return (
            <Container fluid={true} className="m-2 mb-5 d-flex justify-content-center" >
                <Row>
                    {this.state.loading ? <div>Loading</div> : this.state.total.statewise.map((state) => {
                        if (state.state !== "Total") {
                            return (
                                <Col xs="12" sm="12" md="6" lg="4">
                                    <Card body outline color="primary" className="shadow m-3 bg-white rounded" >
                                        <CardTitle className="text-primary font-weight-bold"><h4>{state.state} &nbsp;&nbsp;<Badge color="primary">{state.deltaconfirmed}</Badge></h4></CardTitle>
                                        <CardText>
                                            <div>
                                                <div className="text-center font-weight-bold">{state.confirmed}</div>
                                                <Progress value={100}>100%</Progress>
                                                <div className="text-center font-weight-bold">{state.recovered}</div>
                                                <Progress color="success" value={50} />
                                                <div className="text-center font-weight-bold">{state.active}</div>
                                                <Progress color="warning" value={75} />
                                                <div className="text-center font-weight-bold">{state.deaths}</div>
                                                <Progress color="danger" value="100" />
                                            </div>
                                        </CardText>
                                    </Card>
                                </Col>
                            )
                        }
                        else {
                            return (
                                <div></div>
                            )
                        }
                    })}
                </Row>
            </Container>
        );
    }
};
export default States;