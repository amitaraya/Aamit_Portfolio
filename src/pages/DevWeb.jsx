import React, { useState } from 'react';
import { tabContents } from './../medaData/ProjectMedaData';
import NavigateHeader from '../compo/NavigateHeader';

function DevWeb() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['About', 'Project 001 : WORKZONE', 'Project 002 : TMS']; // Add more tabs as needed



  return (
    <div className='main-container'>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #e0e0e0, #c0c0c0)',
      }}>
        <div style={{
          width: '85%',
          height: '75%',
          backgroundColor: '#d1d1d1',
          borderRadius: '12px',
          boxShadow: '10px 15px 25px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          transform: 'perspective(800px) rotateX(10deg) rotateY(0deg)',
          transformStyle: 'preserve-3d',
        }}>
          {/* Tab Bar */}
          <div style={{
            height: '40px',
            backgroundColor: '#333',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                style={{
                  color: activeTab === index ? '#fff' : '#aaa',
                  cursor: 'pointer',
                  borderBottom: activeTab === index ? '2px solid #fff' : 'none',
                  paddingBottom: '5px',
                }}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Screen Area (with top bar) */}
          <div style={{
            backgroundColor: '#333',
            borderRadius: '0 0 0 0',// removed top radius so only the outer div has the radius, the inner div does not
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            transform: 'translateZ(10px)',
          }}>
            {/* Top Bar (simulated) */}
            <div style={{
              height: '30px',
              backgroundColor: '#222',
              color: '#aaa',
              padding: '5px 10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '12px',
            }}>
              <div> File Edit View Go Window Help</div>
              <div>Time | Wifi | Battery</div>
            </div>
            <div style={{ flex: 1, padding: '20px', color: '#fff', overflow: 'auto' }}>
              {tabContents[activeTab].content}
            </div>
          </div>

          {/* Keyboard/Touchpad Area (more refined) */}
          <NavigateHeader title="My Projects" />
        </div>
      </div>
    </div>
  );
}

export default DevWeb;