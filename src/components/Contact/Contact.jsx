import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill} from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/*Left side*/}
        <div className=" flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primayText">Easy to contact us</span>
          <span className="secondaryText">We always ready to help by providing the best service
            <br/>
            we beleive a good place to live can make your life better
          </span>
          <div className="flexColStart contactModes">
            {/*first row*/}
            <div className="flexColStart row">
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className="felx-colStart detail">
                            <span className="primaryText">chat</span><br/>
                            <span className="seconadryText">0123-4567</span>
                        </div>
                    </div>
                    <div className="flexCenter button">message now</div>
                </div>

                {/*second mode*/}
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <HiChatBubbleBottomCenter size={25}/>
                        </div>
                        <div className="felx-colStart detail">
                            <span className="primaryText">Email</span><br/>
                            <span className="seconadryText">abc@gamil.com</span>
                        </div>
                    </div>
                    <div className="flexCenter button">mail now</div>
                </div>
            </div>
          </div>



        </div>

        {/*Right side*/}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
