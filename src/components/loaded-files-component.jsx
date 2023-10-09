import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Card, CardImg, CardBody, Button } from 'react-bootstrap';

import '../index.css';

export const LoadedFiles = () => {
  const [uploads, setUploads] = useState([]);
  const [query, setQuery] = useState('');

  const Url = 'http://3.84.49.24:8080/images';

  useEffect(() => {
    fetch(Url, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.Contents);
        setUploads(data.Contents);
      });

    console.log(uploads);
  }, []);

  const refreshHandler = () => {
    fetch(Url, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setUploads(data.Contents);
      });
  };

  return (
    <>
      <Container fluid>
        <Row
          style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}
        >
          <input
            type='text'
            style={{ width: 200, marginRight: 10 }}
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            placeholder='Search'
          />
          <Button
            onClick={refreshHandler}
            style={{ width: 80, textAlign: 'center' }}
          >
            Refresh
          </Button>
        </Row>
        <Row className='justify-content-center' style={{ marginTop: 20 }}>
          {!query
            ? uploads.map((obj) => (
                <Col xs={12} sm={12} md={4} lg={4} key={obj.Key}>
                  <Card>
                    <CardImg
                      src={`https://careerf-tester.s3.amazonaws.com/${obj.Key}`}
                    />
                    <CardBody>
                      <p>{obj.Key}</p>
                    </CardBody>
                  </Card>
                </Col>
              ))
            : uploads
                .filter((obj) =>
                  obj.Key.toLowerCase().includes(query.toLowerCase())
                ) // Filter based on query
                .map((obj) => (
                  <Col xs={12} sm={12} md={4} lg={4} key={obj.Key}>
                    <Card>
                      <CardImg
                        src={`https://careerf-tester.s3.amazonaws.com/${obj.Key}`}
                      />
                      <CardBody>
                        <p>{obj.Key}</p>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
        </Row>
      </Container>
    </>
  );
};
