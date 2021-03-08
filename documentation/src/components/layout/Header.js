import React from 'react';
import { Link } from "gatsby"
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = (props) => {
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
          <Link className="px-4" to="/#start">Start</Link>
          <Link className="px-4" to="/#highlights">Highlights</Link>
          <Link className="px-4" to="/#features">Features</Link>
          <Link className="px-4" to="/install">Installation</Link>
          <Link className="px-4" to="/usage">Usage</Link>
        </div>
        <div className="hidden md:block">
          <Button size="small" className="text-sm" onClick={() => window.open("https://github.com/netmedianer-GmbH/treasure-hunt/", "_blank")}>
            <div className="flex justify-center items-center">
              <img className="w-6" alt="github logo" src="/treasure-hunt/img/GitHub-Mark-Light-32px.png" />
              <span className="pl-2">View on GitHub</span>
            </div>
          </Button>
        </div>
      </div>
    </header>
  )
};

export default Header;
