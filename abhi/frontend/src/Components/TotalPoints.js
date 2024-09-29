
import React from 'react';
import './TotalPoints.css'; // Create this CSS file for styling

const TotalPoints = ({ totalPoints, onClose }) => {
    return (
        <div className="total-points-overlay">
            <div className="total-points-content">
                <h2>Total Points: {totalPoints}</h2>
                <button onClick={onClose}>OK</button>
            </div>
        </div>
    );
};

export default TotalPoints;
