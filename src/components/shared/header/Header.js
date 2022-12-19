import React from "react";

function Header() {
  return (
    <div className="header">
        <h2>Student Manager</h2>
        <navbar>
          <ul>
            <li>Profile</li>
            <li>Manager</li>
            <li>Logout</li>
          </ul>
        </navbar>
    </div>
  );
}

export default Header;