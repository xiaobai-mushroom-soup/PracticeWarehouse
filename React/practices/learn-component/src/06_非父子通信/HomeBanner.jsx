import React from "react";
import ThemeContext from "./contexts/theme-context";

export default function HomeBanner() {
  return (
    <div>
      <span>HomeBanner</span>
      <ThemeContext.Consumer>
        {
            value => {
                return <h2>{value.age}</h2>
            }
        }
      </ThemeContext.Consumer>
    </div>
  );
}
