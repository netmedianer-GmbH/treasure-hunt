import React from 'react';
import { Link } from "gatsby"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import { globalHistory as history } from '@reach/router';

const Header = (props) => {
  const { location } = history;
  const path = location.pathname;

  return (
    <header className="sticky top-0 bg-white shadow">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          <div className="w-12 mr-3">
            <LogoIcon />
          </div>
        Treasure Hunt
      </div>
        <div className="flex mt-4 sm:mt-0">
          {
            path === "/" ?
              <AnchorLink className="px-4" href="#start">
                Start
              </AnchorLink>
              :
              <Link className="px-4" to="/#start">
                Start
              </Link>
          }
          {
            path === "/" ?
              <AnchorLink className="px-4" href="#highlights">
                Highlights
              </AnchorLink>
              :
              <Link className="px-4" to="/#highlights">
                Highlights
              </Link>
          }
          {
            path === "/" ?
              <AnchorLink className="px-4" href="#features">
                Features
              </AnchorLink>
              :
              <Link className="px-4" to="/#features">
                Features
              </Link>
          }
          {/* {
            path === "/" ?
              <AnchorLink className="px-4" href="#ideas">
                About the Project
              </AnchorLink>
              :
              <Link className="px-4" to="/#ideas">
                About the Project
              </Link>
          } */}
          <Link className="px-4" to="/install">Installation</Link>
          <Link className="px-4" to="/usage">Usage</Link>
        </div>
        <div className="hidden md:block">
          <Button size="small" className="text-sm" onClick={() => window.open("https://github.com/netmedianer-GmbH/treasure-hunt/", "_blank")}>
            <div className="flex justify-center items-center">
            <img className="w-6" alt="github logo" src="./img/GitHub-Mark-Light-32px.png" />
            <span className="pl-2">View on GitHub</span>
            </div>
          </Button>
        </div>
      </div>
    </header>
  )
};

export default Header;
