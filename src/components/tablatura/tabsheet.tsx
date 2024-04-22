import React, { useEffect, useState } from 'react';
import alphaTab from '@coderline/alphatab';

const TabComponent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const wrapper = document.querySelector(".at-wrap");
    const main = wrapper.querySelector(".at-main");

    const settings = {
      file: "https://www.alphatab.net/files/canon.gp",
    };
    const api = new alphaTab.AlphaTabApi(main, settings);

    const overlay = wrapper.querySelector(".at-overlay");
    api.renderStarted.on(() => {
      setIsLoading(true);
      overlay.style.display = "flex";
    });
    api.renderFinished.on(() => {
      setIsLoading(false);
      overlay.style.display = "none";
    });

    // Cleanup function
    return () => {
      api.dispose();
    };
  }, []);

  return (
    <div className="at-wrap">
      {isLoading && (
        <div className="at-overlay">
          <div className="at-overlay-content">
            Music sheet is loading
          </div>
        </div>
      )}
      <div className="at-content">
        <div className="at-sidebar">
          Track selector will go here
        </div>
        <div className="at-viewport">
          <div className="at-main"></div>
        </div>
      </div>
      <div className="at-controls">
        Player controls will go here
      </div>
    </div>
  );
};

export default TabComponent;
