import React, { useEffect, useState } from "react";
import "./ProgressBar.css";
import { CardStack } from "../components/ui/card-stack"; // Ajustez le chemin d'importation si nécessaire

const ProgressBar: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [IsMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  console.log(IsMobileOrTablet);

  useEffect(() => {
    const steps = document.querySelectorAll(".step");
    const lineProgresses = document.querySelectorAll("#line-progress");

    steps.forEach((step, index) => {
      step.addEventListener("click", () => {
        setCurrentStep(index + 1); // Update this line

        steps.forEach((s, i) => {
          if (i <= index) {
            s.classList.add("active");
          } else {
            s.classList.remove("active");
          }
        });

        // Mise à jour de la progression pour les deux lignes
        lineProgresses.forEach((lineProgress, lineIndex) => {
          let progress;
          if (lineIndex === 0) {
            // Première ligne (étapes 1-3)
            if (index <= 2) {
              progress = (index / 2) * 100; // diviser par 2 car il y a 3 étapes (index 0-2)
            } else {
              progress = 100;
            }
          } else {
            // Deuxième ligne (étapes 4-5)
            if (index === 3) {
              progress = ((index - 2.5) / 2) * 100; // diviser par 2 car il y a 2 étapes (index 3-4)
            } else if (index === 4) {
              progress = ((index - 2) / 2) * 100; // Réinitialiser la largeur si on revient aux étapes 1-3
            } else {
              progress = 0;
            }
          }
          (lineProgress as HTMLElement).style.width = `${progress}%`;
        });
      });
    });
  }, []);

  return (
    <>
      <h3
        style={{
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "15px",
          textDecoration: "underline",
          textDecorationColor: "#00A8BD",
        }}
        className="pl-5 md:pl-14"
      >
        Procédure de Réalisation d'une Fontaine
      </h3>
      <br />
      <div className="process-wrapper">
        <div id="progress-bar-container">
          <div className="progress-line">
            <ul>
              <li className="step step01 active" data-step="1">
                <div className="step-inner">Etape 1</div>
              </li>
              <li className="step step02" data-step="2">
                <div className="step-inner">Etape 2</div>
              </li>
              <li className="step step03" data-step="3">
                <div className="step-inner">Etape 3</div>
              </li>
            </ul>
            <div id="line">
              <div id="line-progress"></div>
            </div>
          </div>
          <div className="progress-line centered">
            <ul>
              <li className="step step04" data-step="4">
                <div className="step-inner">Etape 4</div>
              </li>
              <li className="step step05" data-step="5">
                <div className="step-inner">Etape 5</div>
              </li>
            </ul>
            <div id="line">
              <div id="line-progress"></div>
            </div>
          </div>
        </div>

        <CardStack currentCardIndex={currentStep} />
      </div>
    </>
  );
};

export default ProgressBar;
