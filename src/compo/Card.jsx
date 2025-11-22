import React, { useState, useRef, useEffect } from 'react';
import './Card.css';

function Card({ cardSectionName, cardSummary, index = 0 }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, index * 200); // Stagger animation based on index
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, [index]);

    // Mouse tracking for subtle tilt effect
    const handleMouseMove = (e) => {
        if (!cardRef.current || !isHovered) return;
        
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        // Subtle tilt effect
        const rotateX = (mouseY / rect.height) * -5;
        const rotateY = (mouseX / rect.width) * 5;
        
        cardRef.current.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (cardRef.current) {
            cardRef.current.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
        }
    };

    return (
        <div
            ref={cardRef}
            className={`card-container ${isVisible ? 'visible' : ''} ${isHovered ? 'hovered' : ''}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                '--animation-delay': `${index * 0.2}s`
            }}
        >
            {/* Background shine effect */}
            <div className="card-shine"></div>
            
            {/* Corner decorations */}
            <div className="card-corners">
                <div className="corner corner-tl"></div>
                <div className="corner corner-tr"></div>
                <div className="corner corner-bl"></div>
                <div className="corner corner-br"></div>
            </div>

            {/* Content */}
            <div className="card-content">
                {cardSectionName && (
                    <h1 className="card-title">
                        {cardSectionName}
                    </h1>
                )}
                
                {cardSummary && (
                    <div className="card-summary">
                        {typeof cardSummary === 'string' ? (
                            <h4>{cardSummary}</h4>
                        ) : (
                            cardSummary
                        )}
                    </div>
                )}
            </div>

            {/* Animated border */}
            <div className="card-border-animation"></div>
        </div>
    );
}

export default Card;