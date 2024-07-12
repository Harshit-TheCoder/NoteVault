import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Modals from "./modal";

const LangButton = ({ lang, files }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleSelect = (file) => setSelectedFile(file);

  const langLogos = {
    "C": "/c1.png",
    "C++": "/cpp (2).png",
    "JAVA": "/java (2).png",
    "WEB": "/web (2).png",
    "PYTHON": "/py.png",
    "ML": "/ml (2).png",
  };

  return (
    <div className="d-flex flex-column align-items-center mb-4">
      <img src={langLogos[lang]} alt={`${lang} logo`} style={{ width: "150px", height: "150px" }} />
      <DropdownButton id="dropdown-basic-button" title={lang} variant="secondary">
        {files.map(file => (
          <Dropdown.Item key={file.name} onClick={() => handleSelect(file)}>
            {file.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      {selectedFile && <Modals {...selectedFile} />}
    </div>
  );
};

export default LangButton;
