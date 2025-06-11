import React from 'react';
import fbIcon from '../assets/fb.png';
import linkidnIcon from '../assets/linkidn.png';
import ytIcon from '../assets/yt.png';
import igIcon from '../assets/ig.png';

function Footer() {
  return (
    <footer className="bg-dark text-white py-3 px-3">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0 small fst-italic fw-semibold">
          Maydarling.id | © {new Date().getFullYear()} maydarling.id. All rights reserved.
        </p>
        <div className="d-flex gap-3">
          <a href="#" aria-label="Facebook" className="d-inline-block">
            <img src={fbIcon} alt="Facebook" width={20} height={20} />
          </a>
          <a href="#" aria-label="LinkedIn" className="d-inline-block">
            <img src={linkidnIcon} alt="LinkedIn" width={20} height={20} />
          </a>
          <a href="#" aria-label="YouTube" className="d-inline-block">
            <img src={ytIcon} alt="YouTube" width={20} height={20} />
          </a>
          <a href="#" aria-label="Instagram" className="d-inline-block">
            <img src={igIcon} alt="Instagram" width={20} height={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
