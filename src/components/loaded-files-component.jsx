import { useEffect, useState } from 'react';

export const LoadedFiles = () => {
  const [uploads, setUploads] = useState([]);

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
      <div>
        <button onClick={refreshHandler}>Refresh</button>
        {uploads.map((obj) => (
          <div>
            <img
              src={`https://careerf-tester.s3.amazonaws.com/${obj.Key}`}
              alt='file from storage'
            ></img>
            <h1 key={obj.key}>{obj.Key}</h1>
          </div>
        ))}
      </div>
    </>
  );
};
