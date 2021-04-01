import React from "react";
import { colors } from "../util/colors.js";
import AnimatedUpArrow from "./AnimatedUpArrow.js";
import AnimatedDownArrow from "./AnimatedDownArrow.js";

export default function Skills({
  id = "",
  upArrowTo = "",
  downArrowTo = "",
  upArrowToolTip = "",
  downArrowToolTip = "",
}) {
  return (
    <div
      className="section"
      id={id}
      style={{
        backgroundColor: `${colors.black}`,
      }}
    >
      <div className="section-content">
        <AnimatedUpArrow
          to={upArrowTo}
          color={colors.white}
          toolTip={upArrowToolTip}
        ></AnimatedUpArrow>
        <div className="with-p">
          <h1
            style={{
              color: `${colors.white}`,
            }}
          >
            Skills
          </h1>
        </div>
        <AnimatedDownArrow
          to={downArrowTo}
          color={colors.white}
          toolTip={downArrowToolTip}
          style={{ marginTop: 0 }}
        ></AnimatedDownArrow>
      </div>
    </div>
  );
}