import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
// import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';

export default () => (
  <Layout>
    <section id="start" className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Treasure Hunt for Microsoft Teams
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Learn how to use Microsoft 365 together with your colleagues in a playful way
          </p>
          <p className="mt-8 md:mt-12">
          {/* <button 
            type="button"
            className="py-4 px-12 bg-primary hover:bg-primary-darker rounded text-white"
            onClick={() => {window.open("https://github.com/netmedianer-GmbH/treasure-hunt/blob/main/README.md", "_blank")}}>
            LOS DOCH
          </button> */}
            <Button size="lg" onClick={ () => {window.open("https://github.com/netmedianer-GmbH/treasure-hunt/blob/main/README.md", "_blank"); return false;} }>
              Get Started
            </Button>
          </p>
          <p className="mt-4 text-gray-600">Get started with the installation</p>
        </div>
        <div className="lg:w-1/2">
          <img src="./img/sales_seals.png" alt="screenshot" />
        </div>
      </div>
    </section>
    <section id="highlights" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Highlights</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Learning As A Team</p>
              <p className="mt-4">
                Solve tasks together and learn how to use Microsoft 365 in a fun way.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Easy deployment for everyone</p>
              <p className="mt-4">
                With a few simple steps you can install the solution even without 
                administrative rights.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Easily Create Your Own Content</p>
              <p className="mt-4">
                Simply edit SharePoint lists to modify existing layers or even 
                create new ones.
              </p>
            </Card>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-4">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Internationalization</p>
              <p className="mt-4">
                Of course, the application is multilingual and you can easily add new language variants 
                at any time simply by editing the SharePoint list entries.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Viewer Mode</p>
              <p className="mt-4">
                Define one team member as the game leader and let this person control the gameplay while everyone works together to find the answers.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Flexible By Design</p>
              <p className="mt-4">
                You want to change the complete design of a game? 
                Just create your own new images and background graphics and use them in your very own game design.
              </p>
            </Card>
          </div>
        </div>   
      </div>
    </section>
    <SplitSection
      id="features"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Easy To Use</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          What you need are just two things: access to Microsoft Teams, and the ability to use Microsoft Power Apps. 
          So you're not only equipped to learn as you play, but you can also easily set up 
          Treasure Hunt for yourself and your colleagues.
          </p>
        </div>
      }
      secondarySlot={<img src="./img/architecture.png" alt="screenshot" />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Collaborative Learning Included
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          You will not only learn how to use Microsoft 365 while solving the challenges, 
          but you will also get the most important insights and information about 
          further learning content for each challenge.
          </p>
        </div>
      }
      secondarySlot={<img src="./img/learnings.png" alt="screenshot" />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Become A Game Changer
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Change the course of the game. Develop your own challenges or even create your own game.
            Since all the content is stored in simple SharePoint lists, it's easy for you to change it and adapt it to your needs.
            Be creative.
          </p>
        </div>
      }
      secondarySlot={<img src="./img/edit_list.png" alt="screenshot" />}
    />
    
    {/* <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section> */}
    
    <section id="ideas" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">Ideas about the project from the team members</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to start the journey with Treasure Hunt?</h3>
      <p className="mt-8 text-xl font-light">
      Learn here how easy your journey is from installation to your first Treasure Hunt adventure.
      </p>
      <p className="mt-8">
        <Button size="xl" onClick={() => window.open("https://github.com/netmedianer-GmbH/treasure-hunt/blob/main/README.md", "_blank")}>Get Started Now</Button>
      </p>
    </section>
  </Layout>
);