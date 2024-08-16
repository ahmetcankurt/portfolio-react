import React, { memo } from "react";

function Abilities() {
  const abilities = [
    { title: "HTML", value: 99 },
    { title: "CSS - SASS - TAILWIND", value: 80 },
    { title: "REACT", value: 90 },
    { title: "ANGULAR", value: 50 },
    { title: "NEXT.JS", value: 65 },
    { title: "NODE.JS", value: 40, additionalText: "( Micro Service )" },
  ];

  return (
    <div id="yetenekler-tab-id" className="box box-content mb-4" data-aos="fade-right" data-aos-duration="2500">
      <div className="pb-2">
        <h1 className="title title--h1 first-title title__separate">
          Yetenekler
        </h1>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-3">
          <h2 className="title title--h3">Front-End</h2>
          <div className="box box__border">
            {abilities.slice(0, 5).map((ability, index) => (
              <div className="progress" key={index}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${ability.value}%`, backgroundColor: "#007bff" }}
                  aria-valuenow={ability.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-text">
                    <span>{ability.title}</span>
                    <span>{ability.value}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-6 mb-3">
          <div className="mb-3">
            <h2 className="title title--h3">Back-End</h2>
            <div className="box box__border">
              {abilities
                .filter(ability => ability.title === "NODE.JS")
                .map((ability, index) => (
                  <div className="progress" key={index}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${ability.value}%`, backgroundColor: "#007bff" }}
                      aria-valuenow={ability.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-text">
                        <span>{ability.title}</span>
                        <span>{ability.value}%</span>
                      </div>
                    </div>
                    <div className="progress-text">
                      <span></span>
                      <span>{ability.additionalText}</span>
                    </div>
                  </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default memo(Abilities);
