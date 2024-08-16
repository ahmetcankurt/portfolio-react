import React, { useEffect } from 'react';

function AnimationRandom() {
  useEffect(() => {
    const container = document.getElementById('animationRandom');
    let circleHTML = "";

    // Ekran genişliğini kontrol edin
    let circleCount;
    if (window.innerWidth <= 768) {
        circleCount = 100;
    } else {
        circleCount = 120;
    }

    for (let i = 0; i < circleCount; i++) {
        circleHTML += `
            <div class="circle-container">
                <div class="circle"></div>
            </div>
        `;
    }

    container.innerHTML = circleHTML;
  }, []); // Bu effect sadece bileşen yüklendiğinde çalışır

  return <div id="animationRandom"></div>;
}

export default AnimationRandom;
