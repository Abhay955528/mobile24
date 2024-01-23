import React from "react";
import Image from "next/image";
import "./style/page.css";
import { RiMessage2Fill } from "react-icons/ri";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

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
          <Image src="/image.png" alt="" width={320} height={80} />
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
        <Image
          className="banner"
          width={500}
          height={500}
          src="/banner1.png"
          layout="responsive"
          alt=""
        />
        {/* <h1 className="mobile relative">Mobiles 24</h1>
        <p className="relative pLeft">
          Mobile Repair in 30 Min.* With Warranty
        </p> */}
      </div>

      <div className="center">
        <div className="center-left">
          <p className="center-paragraph">10% off On Your 1st Visit.</p>
          <h1 className="h1">Track Your Phone</h1>
          <p className="p-size">
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
          <h1
            style={{ marginLeft: "15rem", marginTop: "3rem", fontSize: "4rem" }}
          >
            Number Speaks
          </h1>
          <div className="flex gap">
            <div className="flex">
              <Image
                className="imageSize"
                // layout="fill"
                width={100}
                height={100}
                src="/happycs1.png"
                sizes="10vw"
                // Make the image display full width
                style={{
                  width: "100%",
                  height: "18vh",
                }}
                alt=""
              />
              <div>
                <h1>5350+</h1>
                <p>
                  Happy <br />
                  Costumers
                </p>
              </div>
            </div>

            <div className="flex">
              <Image
                className="imageSize"
                width={500}
                height={500}
                sizes="10vw"
                // Make the image display full width
                style={{
                  width: "100%",
                  height: "18vh",
                }}
                src="/Phr2.png"
                alt=""
              />
              <div>
                <h1>10203+</h1>
                <p>Phones Repaired</p>
              </div>
            </div>

            <div className="flex">
              <Image
                className="imageSize"
                width={500}
                height={500}
                sizes="10vw"
                // Make the image display full width
                style={{
                  width: "100%",
                  height: "18vh",
                }}
                src="/Del3.png"
                alt=""
              />
              <div>
                <h1>9813+</h1>
                <p>
                  Phones <br />
                  Delivered
                </p>
              </div>
            </div>

            <div className="flex">
              <Image
                className="imageSize"
                width={500}
                height={500}
                sizes="10vw"
                // Make the image display full width
                style={{
                  width: "100%",
                  height: "18vh",
                }}
                src="/rating4.png"
                alt=""
              />
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
          <span>Why Us</span>
          <h1 className="margin">
            We are <span className="span">Certified</span>
          </h1>
          <h1 className="margin">And Provide</h1>
          <h1 className="margin">
            <span>Warranty On</span>
          </h1>
          <p className="margin">
            Professionally Repair Your Mobile In Just <span>30 Minutes*</span>{" "}
            using <br /> high-quality Parts With <span>Warranty</span>
          </p>
          <button className="submitBtn btnMargin">Contact Us</button>
        </div>
        <div className="center-3right">
          <Image
            className="appleSize"
            width={500}
            height={500}
            sizes="100vw"
            // Make the image display full width
            style={{
              width: "100%",
              height: "100vh",
            }}
            src="/F6.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="center-4">
        <div className="our-service">
          <h1 className="center-4h1">Our Services</h1>
          <p className="center-4p">
            We Provide Best And Fast Service In Mobile Repairing. We Do All
            Service For Your Mobile.
          </p>
          <div className="center-4Image">
            <Image
              className="height"
              width={500}
              height={500}
              sizes="20vw"
              // Make the image display full width
              style={{
                width: "28%",
                height: "100vh",
              }}
              src="/S1.jpg"
              alt=""
            />
            <Image
              className="height"
              width={500}
              height={500}
              sizes="20vw"
              // Make the image display full width
              style={{
                width: "28%",
                height: "100vh",
              }}
              src="/S2.jpg"
              alt=""
            />
            <Image
              className="height"
              width={500}
              height={500}
              sizes="20vw"
              // Make the image display full width
              style={{
                width: "28%",
                height: "100vh",
              }}
              src="/S3.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="center-5">
        <div className="team">
          <h1>Our Team</h1>
        </div>
        <div className="teamImage">
          <Image
            className="Imageage"
            width={500}
            height={500}
            sizes="10vw"
            // Make the image display full width
            style={{
              width: "15%",
              height: "45vh",
              borderRadius: "50%",
            }}
            src="/Team1.jpg"
            alt=""
          />
          <Image
            className="Imageage"
            width={500}
            height={500}
            sizes="10vw"
            // Make the image display full width
            style={{
              width: "15%",
              height: "45vh",
              borderRadius: "50%",
            }}
            src="/Team2.jpg"
            alt=""
          />
          <Image
            className="Imageage"
            width={500}
            height={500}
            sizes="10vw"
            // Make the image display full width
            style={{
              width: "15%",
              height: "45vh",
              borderRadius: "50%",
            }}
            src="/Team4.jpg"
            alt=""
          />
          <Image
            className="Imageage"
            width={500}
            height={500}
            sizes="10vw"
            // Make the image display full width
            style={{
              width: "15%",
              height: "45vh",
              borderRadius: "50%",
            }}
            src="/Team4.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="center-6 flex">
        <div className="center-6left">
          <Image
            className="winSize"
            width={500}
            height={500}
            sizes="10vw"
            // Make the image display full width
            style={{
              width: "100%",
              height: "100vh",
              // borderRadius: "50%",
            }}
            // layout="responsive"
            src="/winner.jpg"
            alt=""
          />
        </div>
        <div className="center-6right">
          <span>Did You Know</span>
          <h1 className="margin">We are award </h1>
          <h1>Winner in</h1>
          <h1 className="margin">
            <span>Fast services</span>
          </h1>
          <p className="margin">
            Professionally Repair Your Mobile Problem With high-quality Parts
            And genuine parts
          </p>
          <button className="submitBtn btnMargin">Call Now</button>
        </div>
      </div>

      <div className="footer">
        <div className="footer-left">
          <h2>About Us</h2>
          <p className="Peragrapf">
            We Provide Best Mobile Services &nbsp; In Bhilai And Near By
            Area.&nbsp; We Also Have An Award &nbsp;Of Fast Service In
            Mobile&nbsp; Repair. We Do All Services Be It Software Related Or
            Hardware.
          </p>
          <button className="submitBtn viewBtn">View Map</button>
        </div>
        <div className="footer-right">
          <h2>Connect With Us</h2>
          <div className="footer-input">
            <MdMessage
              style={{
                fontSize: "20px ",
                height: "80%",
                color: "black",
                padding: "43px",
              }}
            />
            <input
              style={{ border: "none" }}
              placeholder="Your email subcriben"
            />
            <button className="butt_1">Subsribe</button>
          </div>
          <p className="Peragrapf">
            Follow On:
            <FaInstagram />
            <FaWhatsapp />
          </p>
        </div>
      </div>
      <div className="CopyRightSection">
        <p>Copyright © 2024 Mobiles 24.All rights reserved.</p>
      </div>
    </>
  );
}
