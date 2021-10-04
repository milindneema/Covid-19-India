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
              {tableHead('CN', 'CONTRY', 'Country Name')}
              {tableHead('Cfd', 'Cnfmd', 'Confirmed')}
              {tableHead('AT', 'ATV', 'Active')}
              {tableHead('RCD', 'RECVD', 'Recovered')}
              {tableHead('D', 'DTH', 'Deaths')}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Col>
    </Row>
  );
};

function tableHead(short, mid, long) {
  return <th style={{ width: '20%' }}>
    {window.innerWidth <= 769
      ? window.innerWidth <= 576
        ? short
        : mid
      : long}
  </th>;
}

export default AllCountry;
