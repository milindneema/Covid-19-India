import React, { Component } from 'react';
import { Card, CardTitle, Badge, Progress, Row, Col } from 'reactstrap';
import Table from './TableComponent'

class States extends Component {


    constructor(props) {
        super(props)

        this.state = {
            stateindex: null,
            stateData: null,
        }
    }

    handleState = (index) => {
        if (this.state.stateindex === null || this.state.stateindex !== index) {
            const state = this.props.total.statewise[index].state
            this.setState({ stateData: state, stateindex: index })
        }
        else {
            this.setState({ stateData: null, stateindex: null })
        }
    }

    render() {
        const card = this.props.total.statewise.map((state, index) => {
            if (state.state !== "Total") {
                const activePercent = (state.active / state.confirmed) * 100;
                const recoveredPercent = (state.recovered / state.confirmed) * 100;
                const deathsPercent = (state.deaths / state.confirmed) * 100;
                return (
                    <Col key={index} xs="12" sm="12" md="6" lg="4" >
                        <Card body outline color="primary" className="shadow m-3 bg-white rounded" onClick={() => { this.handleState(index) }} >
                            <CardTitle className="text-primary font-weight-bold">
                                <h4>
                                    {state.state} &nbsp;&nbsp;
                                    <Badge pill color="primary">
                                        &#8593; {state.deltaconfirmed}
                                    </Badge>
                                </h4>
                            </CardTitle>
                            <div>
                                <div className="text-center font-weight-bold">confirmed : {state.confirmed}</div>
                                <Progress style={{ height: "22px" }} value={state.confirmed !== "0" ? 100 : 0}>100%</Progress>
                                <div className="text-center font-weight-bold">Recovered : {state.recovered}</div>
                                <Progress style={{ height: "22px" }} color="success" value={recoveredPercent ? recoveredPercent : 0}>{recoveredPercent ? recoveredPercent.toFixed(1) : 0}%</Progress>
                                <div className="text-center font-weight-bold">Active : {state.active}</div>
                                <Progress style={{ height: "22px" }} color="warning" value={activePercent ? activePercent : 0}>{activePercent ? activePercent.toFixed(1) : 0}%</Progress>
                                <div className="text-center font-weight-bold">Deaths : {state.deaths}</div>
                                <Progress style={{ height: "22px" }} color="danger" value={deathsPercent ? deathsPercent : 0}>{deathsPercent ? deathsPercent.toFixed(1) : 0}%</Progress>
                                <p className="text-muted">*This card is clickable</p>
                            </div>
                        </Card>
                        {this.state.stateindex === index ? <Table stateDistrict={this.state.stateData} /> : <div></div>}
                    </Col>
                )
            }
            else {
                return (
                    <div key={state.state}></div>
                )
            }
        })
        return (
            <Row>
                {card}
            </Row >
        );
    }
}
export default States;