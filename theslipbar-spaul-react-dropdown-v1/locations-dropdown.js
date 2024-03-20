import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import '../css/index.css'; // Importing the CSS file

function LocationDropdown() {
  return (
    <DropdownButton id="dropdown-item-button" title="Dropdown button">
      <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
      <Dropdown.Item as={Link} to="/sub-page1">Sub Page 1</Dropdown.Item>
      <Dropdown.Item as={Link} to="/sub-page2">Sub Page 2</Dropdown.Item>
      <Dropdown.Item as={Link} to="/something-else">Something else</Dropdown.Item>
    </DropdownButton>
  );
}

export default LocationDropdown;
