import React from 'react';
import { Link } from "gatsby";

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3 text-center">
        <div className="mt-5 flex justify-center">
          <Link className="px-4" to="/imprint">Imprint</Link>
          <div className="px-4">
            <a href="https://netmedia.de/datenschutz" rel="noreferrer" target="_blank">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      {/* <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://codebushi.com">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="https://codebushi.com">Privacy Policy</a>
          </li>
        </ul>
      </div> */}
      {/* <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://dev.to/changoman">Dev.to</a>
          </li>
          <li>
            <a href="https://twitter.com/HuntaroSan">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/codebushi/gatsby-starter-lander">GitHub</a>
          </li>
        </ul>
      </div> */}
    </div>
  </footer>
);

export default Footer;
