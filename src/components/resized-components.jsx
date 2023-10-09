import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Card, CardImg, CardBody, Button } from 'react-bootstrap';

import '../index.css';

export const ResizedFiles = () => {
  const [pics, setPics] = useState([]);
  const [search, setSearch] = useState('');

  const Url = 'http://3.239.16.85:8080/images';

  useEffect(() => {
    fetch(Url, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.Contents);
        //need to add the filter for the resized-picture/ prefix here
        //setPics(data.Contents);
        setPics(
          data.Contents.filter((obj) => {
            return obj.Key.includes('edited-image/');
          })
        );
      });

    console.log(pics);
  }, []);

  const refreshHandler = () => {
    fetch(Url, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setPics(
          data.Contents.filter((obj) => {
            return obj.Key.includes('edited-image/');
          })
        );
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
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
          {pics.length === 0 ? (
            <Col>
              <h2>No resized pictures have been uploaded yet</h2>
            </Col>
          ) : !search ? (
            pics.map((obj) => (
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
          ) : (
            pics
              .filter((obj) =>
                obj.Key.toLowerCase().includes(search.toLowerCase())
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
              ))
          )}
        </Row>
      </Container>
    </>
  );
};

/*<Row className='justify-content-center' style={{ marginTop: 20 }}>
          {!search
            ? pics.map((obj) => (
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
            : pics
                .filter((obj) =>
                  obj.Key.toLowerCase().includes(search.toLowerCase())
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
        </Row> */
