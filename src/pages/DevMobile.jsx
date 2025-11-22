import React, { useState, useRef, useEffect } from 'react';
import { mobileTabContent } from './../medaData/ProjectMobileMetaData';
import NavigateHeader from '../compo/NavigateHeader';

const DevMobile = () => {
  const [size, setSize] = useState({ width: 300, height: 600 });
  const resizeHandleRef = useRef(null);
  const mobileRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [activeTab, setActiveTab] = useState(0); // Add state for active tab
  const tabs = ['About Me','Project 1', 'Project 2']; // Define your tabs

  useEffect(() => {
      const handleMouseMove = (e) => {
          if (isResizing && mobileRef.current) {
              const rect = mobileRef.current.getBoundingClientRect();
              const newWidth = Math.max(200, e.clientX - rect.left); // Minimum width
              const newHeight = Math.max(400, e.clientY - rect.top); // Minimum height
              setSize({ width: newWidth, height: newHeight });
          }
      };

      const handleMouseUp = () => {
          setIsResizing(false);
      };

      if (isResizing) {
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
      }

      return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
      };
  }, [isResizing]);

  const handleMouseDown = (e) => {
      setIsResizing(true);
      e.preventDefault(); // Prevent text selection during resize
  };



  return (
      <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: 'linear-gradient(135deg, #f0f0f0, #e0e0e0)'
      }}>
          <div
              ref={mobileRef}
              style={{
                  width: `${size.width}px`,
                  height: `${size.height}px`,
                  backgroundColor: '#1a1a1a',
                  borderRadius: '30px',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  position: 'relative', // Needed for absolute positioning of resize handle
              }}
          >
              {/* Tab Bar */}
              <div style={{
                  height: '40px',
                  backgroundColor: '#333',
                  display: 'flex',
                  justifyContent: 'space-around', // Distribute tabs evenly
                  alignItems: 'center',
              }}>
                  {tabs.map((tab, index) => (
                      <div
                          key={index}
                          onClick={() => setActiveTab(index)} // Handle tab selection
                          style={{
                              color: activeTab === index ? '#fff' : '#aaa', // Change color for active tab
                              cursor: 'pointer',
                              borderBottom: activeTab === index ? '2px solid #fff' : 'none', // Add a border for active tab
                              paddingBottom: '5px', // Add some padding
                              flex: 1, // Ensure tabs take equal space
                              display: 'flex', // For centering the tab title
                              alignItems: 'center',
                              justifyContent: 'center'
                          }}
                      >
                          {tab}
                      </div>
                  ))}
              </div>

              {/* Screen Area */}
              <div style={{
                  flex: 1,
                  backgroundColor: '#282828',
                  display: 'flex',
                  flexDirection: 'column',
                  color: '#fff',
                  padding: '20px',
                  overflow: 'auto',
              }}>
                  {mobileTabContent[activeTab].content}
              </div>

              {/* Bottom Navigation Bar */}
              <div style={{
                  height: '60px',
                  backgroundColor: '#333',
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
              }}>
                  <div style={{ color: '#aaa' }}>Home</div>
                  <div style={{ color: '#aaa' }}>Search</div>
                  <div style={{ color: '#aaa' }}>Profile</div>
              </div>

              {/* Resize Handle */}
             
               <NavigateHeader title="My Projects" />

               <div
                  ref={resizeHandleRef}
                  onMouseDown={handleMouseDown}
                  style={{
                      position: 'absolute',
                      bottom: '0',
                      right: '0',
                      width: '20px',
                      height: '20px',
                      background: 'rgba(255, 255, 255, 0.5)',
                      cursor: 'se-resize',
                      borderRadius: '5px 0 10px 0',
                  }}
              />
          </div>
         
      </div>
  );
};


export default DevMobile;