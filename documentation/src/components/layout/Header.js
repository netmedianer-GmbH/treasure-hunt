import React, { useState } from 'react';
import { Link, withPrefix } from 'gatsby';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = (props) => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false);

    return (
        <header className="sticky top-0 bg-white shadow">
            <div className="container flex flex-col md:flex-row justify-between items-center mx-auto py-4 px-8">
                <div className="flex flex-row justify-between align-center items-center text-2xl w-full md:w-auto">
                    <div className="flex items-center md:text-lg lg:text-2xl whitespace-nowrap">
                        <div className="w-12 mr-3">
                            <LogoIcon />
                        </div>
                        Treasure Hunt
                    </div>
                    <button
                        className="focus:outline-none	md:hidden text-3xl text-purple-800"
                        onMouseDown={() => setMobileMenuActive(!mobileMenuActive)}
                    >
                        ☰
                    </button>
                </div>

                <div
                    className={`hidden md:flex flex-col md:flex-row sm:mt-0${
                        mobileMenuActive && ' active'
                    }`}
                >
                    <div>
                        <Link
                            className="px-4"
                            to="/#start"
                            onClick={() => setMobileMenuActive(false)}
                        >
                            <span className="text-xl">Start</span>
                        </Link>
                    </div>
                    <div>
                        {' '}
                        <Link
                            className="px-4"
                            to="/#highlights"
                            onClick={() => setMobileMenuActive(false)}
                        >
                            <span className="text-xl">Highlights</span>
                        </Link>
                    </div>
                    <div>
                        <Link
                            className="px-4"
                            to="/#features"
                            onClick={() => setMobileMenuActive(false)}
                        >
                            <span className="text-xl">Features</span>
                        </Link>
                    </div>
                    <div>
                        <Link
                            className="px-4"
                            to="/install"
                            onClick={() => setMobileMenuActive(false)}
                        >
                            <span className="text-xl">Installation</span>
                        </Link>
                    </div>
                    <div>
                        <Link className="px-4" to="/usage">
                            <span className="text-xl">Usage</span>
                        </Link>
                    </div>
                </div>
                <div className="hidden md:block w-34">
                    <Button
                        size="small"
                        className="text-sm"
                        onClick={() =>
                            window.open(
                                'https://github.com/netmedianer-GmbH/treasure-hunt/',
                                '_blank'
                            )
                        }
                    >
                        <div className="flex justify-center items-center">
                            <img
                                className="lg:w-6 hidden lg:block"
                                alt="github logo"
                                src={`${withPrefix('/')}img/GitHub-Mark-Light-32px.png`}
                            />
                            <span className="lg:pl-2 text-xs w-24 lg:w-26">View on GitHub</span>
                        </div>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
