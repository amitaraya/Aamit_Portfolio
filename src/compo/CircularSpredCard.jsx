// CircularSpreadCard.js
import React from "react";
import { techSkills } from "../medaData/MetaData"; 
import "./CircularSpredCard.css";

const CircularSpredCard = ({ cardSectionName }) => {
  const center = 400;  // center of 800x800 container
  const step = 70;

  // Maximum items per ring multiplier
  // 1st ring: 6, 2nd ring: 12, 3rd ring: 18, etc.
  const itemsPerRingMultiplier = 6;

  return (
    <div className="circular-card">
      {/* <h2 className="circular-title">{cardSectionName}</h2> */}
      <div className="circular-container">
        {techSkills.map((item, index) => {
          let ring, radius, angle, indexInRing, itemsInCurrentRing;

          if (index === 0) {
            ring = 0;
            radius = 0;
            angle = 0;
            indexInRing = 0;
            itemsInCurrentRing = 1;
          } else {
            let remainingIndex = index - 1;
            let itemsPlaced = 0;
            ring = 1;

            // Calculate ring number based on items fitting in rings
            while (true) {
              itemsInCurrentRing = ring * itemsPerRingMultiplier;
              if (remainingIndex < itemsPlaced + itemsInCurrentRing) {
                indexInRing = remainingIndex - itemsPlaced;
                break;
              }
              itemsPlaced += itemsInCurrentRing;
              ring++;
            }
            radius = ring * step;

            // Stagger start angle by half item for alternate rings for better distribution
            let startAngle = ring % 2 === 0 ? 0 : Math.PI / itemsInCurrentRing;
            angle = startAngle + (indexInRing / itemsInCurrentRing) * (2 * Math.PI);
          }

          let x = center + radius * Math.cos(angle) - 28;
          let y = center + radius * Math.sin(angle) - 28;

          return (
            <div
              key={index}
              className="circular-item"
              style={{ left: `${x}px`, top: `${y}px` }}
              title={item.short}
            >
              <div className="circular-icon">{item.icon}</div>
              <span className="tooltip">{item.short}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircularSpredCard;







//APPLE WATCH UI============================================================================================================
// import React from "react";
// import { techSkills } from "../medaData/MetaData"; // adjust path if needed
// import "./CircularSpredCard.css"; // Optional: for additional styling


// const CircularSpreadCard = ({ cardSectionName }) => {
//   const center = 250; // center of container
//   const step = 70; // distance between concentric circles

//   return (
//     <div className="circular-card">
//       <h2 className="circular-title">{cardSectionName}</h2>
//       <div className="circular-container">
//         {techSkills.map((item, index) => {
//           let ring, radius, angle, indexInRing;

//           if (index === 0) {
//             // First item goes to center
//             ring = 0;
//             radius = 0;
//             angle = 0;
//             indexInRing = 0;
//           } else {
//             // Determine which ring for remaining items
//             let remainingIndex = index - 1; // subtract 1 because first item is at center
            
//             // Calculate ring based on remaining items
//             let itemsPlaced = 0;
//             ring = 1;
//             while (itemsPlaced + (ring * 6) <= remainingIndex) {
//               itemsPlaced += ring * 6;
//               ring++;
//             }
            
//             radius = ring * step;
//             indexInRing = remainingIndex - itemsPlaced;
//             let itemsInRing = ring * 6;
//             angle = (indexInRing / itemsInRing) * (2 * Math.PI);
//           }

//           let x = center + radius * Math.cos(angle) - 28;
//           let y = center + radius * Math.sin(angle) - 28;

//           return (
//             <div
//               key={index}
//               className="circular-item"
//               style={{ left: `${x}px`, top: `${y}px` }}
//               title={item.short}
//             >
//               <div className="circular-icon">{item.icon}</div>
//               <span className="tooltip">{item.short}</span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CircularSpreadCard;

//-----------------------------------------------------------------------------------------
// import React from "react";
// import { techSkills } from "../medaData/MetaData";
// import "./CircularSpredCard.css";

// const CircularSpreadCard = ({ cardSectionName }) => {
//   const center = 250; // center of container
//   const step = 80; // distance between concentric circles
//   const itemsPerRing = 10; // how many icons per ring before starting a new one

//   return (
//     <div className="circular-card">
//       <h2 className="circular-title">{cardSectionName}</h2>
//       <div className="circular-container">
//         {techSkills.map((item, index) => {
//           // determine ring
//           let ring = Math.floor(index / itemsPerRing);
//           let radius = (ring + 1) * step;

//           // position within the ring
//           let indexInRing = index % itemsPerRing;
//           let angle = (indexInRing / itemsPerRing) * (2 * Math.PI);

//           let x = center + radius * Math.cos(angle) - 28;
//           let y = center + radius * Math.sin(angle) - 28;

//           return (
//             <div
//               key={index}
//               className="circular-item"
//               style={{ left: `${x}px`, top: `${y}px` }}
//             >
//               <div className="circular-icon">{item.icon}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CircularSpreadCard;
