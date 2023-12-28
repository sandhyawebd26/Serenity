import React from "react";
import Image from "next/image";
import { TiSocialFacebook } from "react-icons/ti";
import fb from "../../public/images/fb-icon.png";
import twt from "../../public/images/twitter-icon.png";
import wp from "../../public/images/wp-icon.png";
import insta from "../../public/images/insta-icon.png";
import Head from "next/head";
import Script from "next/script";

function Footer() {
  return (
    <>
      {/* <Head>
        <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
        <script src="https://mediafiles.botpress.cloud/d5567d48-f284-43d3-a9f7-a185e5225ccd/webchat/config.js" defer></script>
      </Head> */}
      {/* <Head>
        <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
        <script>{
          `
          window.botpressWebChat.init({
            "composerPlaceholder": "Chat with Chatbot",
          "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
          "botId": "d5567d48-f284-43d3-a9f7-a185e5225ccd",
          "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
          "messagingUrl": "https://messaging.botpress.cloud",
          "clientId": "d5567d48-f284-43d3-a9f7-a185e5225ccd",
          "webhookId": "f2656c75-2786-4af1-8ffb-5a8adcedb5c5",
          "lazySocket": true,
          "themeName": "prism",
          "botName": "Chatbot",
          "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/5ecfcd80-a689-436b-be7a-22f99f73732f/v11708/style.css",
          "frontendVersion": "v1",
          "theme": "prism",
          "themeColor": "#2563eb"
  });

          `}

        </script>
      </Head> */}
      <Head>
        <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
        <script
          src="https://mediafiles.botpress.cloud/d5567d48-f284-43d3-a9f7-a185e5225ccd/webchat/config.js"
          defer
        ></script>
      </Head>
      <footer className="bg-gray-900">
        <div className="container mx-auto py-12">
          <div className="flex justify-center gap-24 ">
            <div className="w-1/5">
              <h4 className="text-white mb-5">About</h4>
              <p className="text-gray-500 mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus magni, sapiente quod illum quis perspiciatis,
                accusantium natus laborum modi magnam praesentium excepturi
                libero fugit quia nam culpa! Voluptate, iste vero.
              </p>
              <button className="py-2 px-4 rounded-3xl text-white bg-orange-600">
                Read More
              </button>
            </div>
            <div className="ml-8">
              <h3 className="text-white mb-5">Quick Menu</h3>
              <ul className="text-gray-500 flex flex-col gap-4">
                <li className="cursor-pointer hover:text-white">About</li>
                <li className="cursor-pointer hover:text-white">Features</li>
                <li className="cursor-pointer hover:text-white">Approach</li>
                <li className="cursor-pointer hover:text-white">Events</li>
                <li className="cursor-pointer hover:text-white">Classes</li>
                <li className="cursor-pointer hover:text-white">Careers</li>
              </ul>
            </div>
            <div className="ml-8">
              <h3 className="text-white mb-5 ">Ministries</h3>
              <ul className="text-gray-500   flex flex-col gap-4">
                <li className="cursor-pointer hover:text-white ">
                  Yoga for health
                </li>
                <li className="cursor-pointer hover:text-white">
                  Yoga for Resilience
                </li>
                <li className="cursor-pointer hover:text-white">Yoga Class</li>
                <li className="cursor-pointer hover:text-white">Meditation</li>
                <li className="cursor-pointer hover:text-white"> balance</li>
              </ul>
            </div>
            <div className="ml-8">
              <h3 className="text-white mb-5">Social Icons</h3>
              <ul className="flex gap-3">
                <li className="">
                  <Image src={wp} className="w-10" />
                </li>
                <li>
                  {" "}
                  <Image src={twt} className="w-10" />
                </li>
                <li>
                  {" "}
                  <Image src={fb} className="w-10" />
                </li>
                <li>
                  {" "}
                  <Image src={insta} className="w-10" />
                </li>
              </ul>
            </div>
          </div>
          <div className="text-white text-center mt-12">
            <p className="text-gray-500 my-20 text-lg">
              &copy; 2023 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
