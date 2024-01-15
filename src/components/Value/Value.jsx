import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from '../../utils/accordion'

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerwidth flexCenter v-container">
        {/*left side*/}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        {/*right side*/}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText"> We always ready to help by providing the best services for You
            <br/>
            We beleive a good place to live can make your life comfort
          </span>

          <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
            {
                data.map((item,i)=>{
                    return(
                        <AccordionItem className="accordionItem">
                            
                        </AccordionItem>
                    )
                })
            }

          </Accordion>



        </div>
      </div>
    </section>
  );
};

export default Value;
