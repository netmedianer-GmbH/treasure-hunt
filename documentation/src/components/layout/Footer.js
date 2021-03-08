import React from 'react';
import { Link } from "gatsby";

const Footer = () => (
  <footer className="container mx-auto text-gray-800">
    <div className="flex -mx-3 px-3 mt-12">
      <div className="flex-1 px-3 text-center">
        <div className="mt-5 flex justify-center mb-4">
          <Link className="px-4" to="/imprint">Imprint</Link>
          <div className="px-4">
            <a href="https://netmedia.de/datenschutz" rel="noreferrer" target="_blank">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
