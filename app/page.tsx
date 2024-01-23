import React from "react";
import "./style/page.css";
import { RiMessage2Fill } from "react-icons/ri";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { MdOutlineWhatsapp } from "react-icons/md";

export default function page() {
  const data1 = [
    { icon: <RiMessage2Fill />, text: "support@mobiles24.in" },
    {
      icon: <GrMapLocation />,
      text: "178 Akashganga Supela Bhilai 490021",
    },
    {
      icon: <MdOutlineWatchLater />,
      text: "Wed - Mon: 11:00 am - 10:00 pm ",
    },
    { icon: <FaPhone />, text: "7888 182 888" },
  ];

  return (
    <>
      <div className="navbar">
        <div className="left cursor">
          {data1.map((item, i) => (
            <p className="pTag" key={i}>
              {item.icon}
              {item.text}
            </p>
          ))}
        </div>

        <div className="right cursor">
          <IoLogoInstagram />
          <MdOutlineWhatsapp />
        </div>
      </div>

      <main className="main">
        <div className="main-left ">
          <img src="/image.png" alt="" width={320} height={80} />
        </div>
        <div className="main-right cursor">
          <p>Home</p>
          <p>Track </p>
          <p>Phone </p>
          <p>Service</p>
          <p>Award</p>
          <p>Team</p>
          <p>Member</p>
          <p>Login</p>
          <button className="getBtn cursor">Get a Services</button>
        </div>
      </main>

      <div>
        <img className="banner" src="/banner1.png" alt="" />
        {/* <h1 className="mobile relative">Mobiles 24</h1>
        <p className="relative pLeft">
          Mobile Repair in 30 Min.* With Warranty
        </p> */}
      </div>

      <div className="center">
        <div className="center-left">
          <p className="center-paragraph">10% off On Your 1st Visit.</p>
          <h1>Track Your Phone</h1>
          <p>
            Track Your Phone's Status Without Any Call Or Message. <br /> We
            Provide Updated data On Site
          </p>
        </div>

        <div className="center-right">
          <form className="form" action="">
            <div className="one">
              <label htmlFor="text">
                Enter Your Mobile 5 Digit Serial Number
              </label>
              <br />
              <input
                type="text"
                name=""
                id="text"
                placeholder="For Example 10110 *"
                className="size"
              />
            </div>

            <div className="one">
              <label htmlFor="text">Your Phone Number</label>
              <br />
              <input
                type="text"
                name=""
                id="text"
                placeholder="Phone Number (Optional)"
                className="size"
              />
            </div>
            <button className="submitBtn">Submit Now</button>
          </form>
        </div>
      </div>

      <div className="center-2">
        <div className="center-main">
          <h1 style={{ marginLeft: "21rem", marginTop: "3rem" }}>
            Number Speaks
          </h1>
          <div className="flex gap">
            <div className="flex">
              <img className="imageSize" src="/happycs1.png" alt="" />
              <div>
                <h1>5350+</h1>
                <p>
                  Happy <br />
                  Costumers
                </p>
              </div>
            </div>

            <div className="flex">
              <img className="imageSize" src="/Phr2.png" alt="" />
              <div>
                <h1>10203+</h1>
                <p>Phones Repaired</p>
              </div>
            </div>

            <div className="flex">
              <img className="imageSize" src="/Del3.png" alt="" />
              <div>
                <h1>9813+</h1>
                <p>
                  Phones <br />
                  Delivered
                </p>
              </div>
            </div>

            <div className="flex">
              <img className="imageSize" src="/rating4.png" alt="" />
              <div>
                <h1>4.7</h1>
                <p>Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="center-3 flex">
        <div className="center-3left">
          <p>Why Us</p>
          <h1>
            We are <span>Certified</span>
          </h1>
          <h1>And Provide</h1>
          <h1>
            <span>Warranty On</span>
          </h1>
          <button className="submitBtn">Contact Us</button>
        </div>
        <div className="center-3right">
          <img className="appleSize" src="/F6.jpg" alt="" />
        </div>
      </div>
    </>
  );
}
