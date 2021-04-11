import React from 'react';
import {
    Card,
    CardTitle,
    CardText,
    Badge,
    Col,
} from 'reactstrap';
import { numberWithCommas } from '../utils/CommonFunction';


export function Summary(name, delta, data, color, textColor) {
    return <Col xs='12' sm='6' md='6' lg='3'>
        <Card body outline color={color} className=' shadow m-3 bg-dark rounded'>
            <h5>
                <CardTitle className={`${textColor} font-weight-bold`}>
                    {name} &nbsp; &nbsp; &nbsp; &nbsp;
            {delta ? <Badge pill color={color}>
                        &#8593;
              {numberWithCommas(delta)}
                    </Badge> : null}
                </CardTitle>
            </h5>
            <h4>
                <CardText className={`${textColor} float-left font-weight-bold`}>
                    {numberWithCommas(data)}
                </CardText>
            </h4>
        </Card>
    </Col>;
};