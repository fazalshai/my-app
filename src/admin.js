import React, { useState, useEffect } from 'react';
import './admin.css'; // Make sure to create this CSS file for styling

const Admin = () => {
  const [files, setFiles] = useState([]);

  // Function to fetch data from the server
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/search');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setFiles(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="admin-container">
      <h1>File Management</h1>
      <table className="file-table">
        <thead>
          <tr>
            <th>Filename</th>
            <th>Type</th>
            <th>Size</th>
            <th>Modified</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>
          {files.length > 0 ? (
            files.map((file, index) => (
              <tr key={index}>
                <td>{file.filename}</td>
                <td>{file.type}</td>
                <td>{file.size}</td>
                <td>{new Date(file.modified).toLocaleDateString()}</td>
                <td>
                  <a
                    href={`http://localhost:5000/uploads/${file.file}`}
                    className="view-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No files available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
