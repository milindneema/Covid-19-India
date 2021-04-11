import React from 'react';
import { Table, Badge, Row, Col } from 'reactstrap';
import { numberWithCommas } from '../utils/CommonFunction';

const AllCountry = ({ CountryData }) => {
  const rows = CountryData.map((country) => {
    return (
      <tr key={country.country}>
        <td>{country.country}</td>
        <td>
          {numberWithCommas(country.cases)}
          <br />
          <Badge className='.todayData' pill color='danger'>
            &#8593; {numberWithCommas(country.todayCases)}
          </Badge>
        </td>
        <td>{numberWithCommas(country.active)}</td>
        <td>{numberWithCommas(country.recovered)}</td>
        <td>{numberWithCommas(country.deaths)}</td>
      </tr>
    );
  });
  return (
    <Row>
      {/* <Col xs='12' md='6'></Col> */}
      <Col xs='12' md='6'>
        <Table className='table' responsive size='sm'>
          <thead>
            <tr>
              <th style={{ width: '20%' }}>
                {window.innerWidth <= 769
                  ? window.innerWidth <= 576
                    ? 'CN'
                    : 'CONTRY'
                  : 'Country Name'}
              </th>
              <th style={{ width: '20%' }}>
                {window.innerWidth <= 769
                  ? window.innerWidth <= 576
                    ? 'Cfd'
                    : 'Cnfmd'
                  : 'Confirmed'}
              </th>
              <th style={{ width: '20%' }}>
                {window.innerWidth <= 769
                  ? window.innerWidth <= 576
                    ? 'AT'
                    : 'ATV'
                  : 'Active'}
              </th>
              <th style={{ width: '20%' }}>
                {window.innerWidth <= 769
                  ? window.innerWidth <= 576
                    ? 'RCD'
                    : 'RECVD'
                  : 'Recovered'}
              </th>
              <th style={{ width: '20%' }}>
                {window.innerWidth <= 769
                  ? window.innerWidth <= 576
                    ? 'D'
                    : 'DTH'
                  : 'Deaths'}
              </th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AllCountry;
