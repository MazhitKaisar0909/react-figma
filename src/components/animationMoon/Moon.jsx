import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Moon = () => {
    const textRef = useRef(null);
    const planetRef = useRef(null);

    useEffect(() => {
        const textElement = textRef.current;
        const planetElement = planetRef.current;
        const textContainer = textElement.parentElement;
        const tl = gsap.timeline({ repeat: -1 });

        const textPath = document.createElementNS("http://www.w3.org/2000/svg", "textPath");
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");

        path.setAttribute("id", "motionPath");
        path.setAttribute("d", "M 100,100 a 100,100 0 1,0 200,0 a 100,100 0 1,0 -200,0");

        textPath.setAttribute("href", "#motionPath");
        textPath.textContent = textElement.textContent;

        svg.appendChild(path);
        svg.appendChild(textPath);
        textContainer.appendChild(svg);

        const textLength = textPath.getComputedTextLength();
        tl.to(textPath, { duration: 10, attr: { startOffset: `-${textLength}px` } });

        const planetWidth = planetElement.offsetWidth;
        const planetHeight = planetElement.offsetHeight;
        const radius = (planetWidth + textLength) / (2 * Math.PI);
        const circumference = 2 * Math.PI * radius;
        const rotationAngle = circumference / textLength;

        gsap.set(textContainer, { rotation: -90, transformOrigin: "50% 50%" });
        gsap.to(textContainer, { duration: 10, rotation: 270, ease: "none", transformOrigin: "50% 50%" });

        return () => {
            // Очистка анимации при размонтировании компонента
            tl.kill();
        };
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <div id="planet" ref={planetRef}></div>
            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
                <text ref={textRef}>Your Text Here</text>
            </svg>
        </div>
    );
};

export default Moon;
