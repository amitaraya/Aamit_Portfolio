// MyWorkDetails.jsx
import React from 'react';

export const myWorkData = [
  {
    key: "NEC Software Solutions Pvt. Ltd.", // match this with item.title
    image: require('../assets/wz.webp'),
    content: (
      <>
        <h4>Project: WorkZone | Domain: Case & Document Management</h4>
        <h3>
          Application Link:{' '}
          <a
            href="https://www.kmd.net/solutions-and-services/case-management-and-document-management/kmd-workzone"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Link
          </a>
        </h3>
        <h3>Role: Frontend Developer</h3>
        <h3>Duration: 1.5 years</h3>
        <h3>Team Size: 10</h3>
        <h3>Client: Denmark Government</h3>
        <h3>Company: NEC Software Solutions, Bangalore</h3>
        <h3>
          Tech Stacks: React.js | Redux | MS-Fluent UI | HTML | SCSS | TS | GitHub | Docker | Kubernetes | React Native
        </h3>

        <h4 style={{ textDecoration: 'underline', fontStyle: 'italic' }}>Project Overview:</h4>
        <p>
          WorkZone is a Microsoft 365 add-on developed for the Denmark Government to manage cases and documents. Originally built on
          .NET/C#, the system has been re-engineered with React and Redux. I also collaborated on the mobile version using React
          Native and Headless.js.
        </p>

        <h4 style={{ textDecoration: 'underline', fontStyle: 'italic' }}>Roles & Responsibilities:</h4>
        <ul>
          <li>Built core UI components using React.js and Fluent UI.</li>
          <li>Contributed to the React Native mobile version.</li>
          <li>Integrated MS Graph APIs and implemented notification workflows.</li>
          <li>Configured Docker and worked on CI/CD pipeline setup.</li>
          <li>Led unit testing and code reviews for quality assurance.</li>
        </ul>
      </>
    ),
  },
  {
    key: "MoBIt Technologies Pvt. Ltd.",
    image: require('../assets/tms.webp'),
    content: (
      <>
        <h4>Project: Transport Management System</h4>
        <h3>Role: Web Developer</h3>
        <h3>Duration: 2.5 years</h3>
        <h3>Team Size: 5</h3>
        <h3>Client: In-house product</h3>
        <h3>Company: MoBIt Technologies</h3>
        <h3>Tech Stacks: React.js | REST APIs | JS | HTML | CSS</h3>

        <h4 style={{ textDecoration: 'underline', fontStyle: 'italic' }}>Project Overview:</h4>
        <p>
          A web platform to optimize transport logistics through real-time vehicle tracking, scheduling, and route management. Built
          using React.js and integrated with backend services.
        </p>

        <h4>Responsibilities:</h4>
        <ul>
          <li>Developed UI features and real-time updates.</li>
          <li>Integrated REST APIs for transport data.</li>
          <li>Participated in planning and code reviews.</li>
        </ul>
      </>
    ),
  },
  {
    key: "My Portfolio",
    image: require('../assets/portfolio.jpg'),
    content: (
      <>
        <h4>Project: My Portfolio</h4>
        <h3>Role: Web|Mobile Developer</h3>
        <h3>Duration: 3months</h3>
        <h3>Team Size: 01</h3>
        <h3>Client: In-house product</h3>
        <h3>Company:</h3>
        <h3>Tech Stacks: React.js| JS | HTML | CSS</h3>

        <h4 style={{ textDecoration: 'underline', fontStyle: 'italic' }}>Project Overview:</h4>
        <p>
          A web platform to optimize transport logistics through real-time vehicle tracking, scheduling, and route management. Built
          using React.js and integrated with backend services.
        </p>

        <h4>Responsibilities:</h4>
        <ul>
          <li>Developed UI features and real-time updates.</li>
          <li>Integrated REST APIs for transport data.</li>
          <li>Participated in planning and code reviews.</li>
        </ul>
      </>
    ),
  }
];
