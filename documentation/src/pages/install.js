import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import "../css/modal.css";

const Install = () => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <Layout>
            
<div class="modal modal-active opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
  <div class="modal-overlay absolute w-full h-full bg-white opacity-95"></div>

  <div class="modal-container fixed w-full h-full z-50 overflow-y-auto ">
    
	<div class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-black text-sm z-50">
      <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
      </svg>
      (Esc)
    </div>

    <div class="modal-content container mx-auto h-auto text-left p-4">
     
	  
      <div class="flex justify-between items-center pb-2">
        <p class="text-2xl font-bold">Full Screen Modal!</p>
      </div>

      <p>Modal content can go here</p>
      
 
      <div class="flex justify-end pt-2">
        <button class="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">Action</button>
        <button class="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">Close</button>
      </div>

    </div>
  </div>
</div>
            <section className="container mx-auto my-6 py-6 bg-white rounded-lg text-center">
                <div className="bg-white">
                    <nav className="flex flex-col sm:flex-row">
                        <button
                            onClick={() => setCurrentTab(0)}
                            className={"text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none border-b-2 border-transparent" + (currentTab === 0 ? " text-blue-500  border-blue-500" : "")}>
                            Tab 1
                        </button>
                        <button
                            onClick={() => setCurrentTab(1)}
                            className={"text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none border-b-2 border-transparent" + (currentTab === 1 ? " text-blue-500 border-blue-500" : "")}>
                            Tab 2
                        </button>
                        <button
                            onClick={() => setCurrentTab(2)}
                            className={"text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none border-b-2 border-transparent" + (currentTab === 2 ? " text-blue-500 border-blue-500" : "")}>
                            Tab 3
                        </button>
                        <button
                            onClick={() => setCurrentTab(3)}
                            className={"text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none border-b-2 border-transparent" + (currentTab === 3 ? " text-blue-500 border-blue-500" : "")}>
                            Tab 4
                        </button>
                    </nav>

                    <div className="text-left pt-6 px-6">
                        {currentTab === 0 &&
                            <div>
                                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                                    <div
                                        className="h-96 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                                        style={{ "background-position": "center", "background-image": "url('./img/1_Create_a_Team.png')" }}
                                        title="Woman holding a mug">
                                    </div>
                                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                        <div className="mb-8">
                                            <div className="text-gray-900 font-bold text-xl mb-2">000 Can coffee make you a better developer?</div>
                                            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {currentTab === 1 &&
                            <div>
                                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                                    <div
                                        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                                        style={{ "background-position": "center", "background-image": "url('https://netmedianer-gmbh.github.io/treasure-hunt/storylines/treasure-hunt/dark/startscreen.jpg')" }}
                                        title="Woman holding a mug">
                                    </div>
                                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                        <div className="mb-8">
                                            <div className="text-gray-900 font-bold text-xl mb-2">111 Can coffee make you a better developer?</div>
                                            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {currentTab === 2 &&
                            <div>
                                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                                    <div
                                        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                                        style={{ "background-position": "center", "background-image": "url('https://netmedianer-gmbh.github.io/treasure-hunt/storylines/treasure-hunt/dark/startscreen.jpg')" }}
                                        title="Woman holding a mug">
                                    </div>
                                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                        <div className="mb-8">
                                            <div className="text-gray-900 font-bold text-xl mb-2">222 Can coffee make you a better developer?</div>
                                            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        {currentTab === 3 && <div>
                            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                                <div
                                    className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                                    style={{ "background-position": "center", "background-image": "url('https://netmedianer-gmbh.github.io/treasure-hunt/storylines/treasure-hunt/dark/startscreen.jpg')" }}
                                    title="Woman holding a mug">
                                </div>
                                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-8">
                                        <div className="text-gray-900 font-bold text-xl mb-2">333 Can coffee make you a better developer?</div>
                                        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default Install;