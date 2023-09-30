import '../index.css';
import { LoadedFiles } from './loaded-files-component';
import { useState } from 'react';

//import for our drop zone for files
import Dropzone from 'react-dropzone';

export const UploadComponent = () => {
  //This state will hold the formdata file that we want to upload
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const Url = 'http://3.84.49.24:8080/images';

  //This function is going to handle setting our files state to hold our formdata file that we would like to use
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setMessage('No file was chosen for upload');
      return;
    }
    //restore this with the correct endpoint and run node app on instance to test
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch(Url, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred during the upload.');
    }
  };

  const onDrop = (acceptedFiles) => {
    // Assuming you want to handle only the first dropped file
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setMessage('');
    } else {
      setFile(null);
      setMessage('No file was chosen for upload');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 20,
      }}
    >
      <h1>Image Upload</h1>
      <form onSubmit={handleSubmit}>
        <Dropzone onDrop={onDrop} accept='image/*'>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className='dropzone'>
              <input {...getInputProps()} />
              <p>Drag & drop an image here, or click to select one</p>
            </div>
          )}
        </Dropzone>
        <div style={{ marginTop: 20 }}>
          <button type='submit'>Upload Image</button>
        </div>
      </form>
      {message && <p>{message}</p>}
      {/* <div>
        <LoadedFiles />
      </div> */}
    </div>
  );
};
