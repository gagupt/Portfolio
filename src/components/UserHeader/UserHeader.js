import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';

import { HeaderContainer, Header, Image, ViewResumeLink } from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <Header>
        <Image src="myphoto.jpg" />
        <div>
          <h2>Gaurav Gupta</h2>
          <p>Senior Software Engineer</p>
          <p>Bangalore, India</p>
          <p>4 years of experience as a developer</p>
          <p>M.Tech in Computer Science from IIT Bombay, 2014-2016</p>
          <p>Spend free time in Chess, Tennis, Road trips</p>
          
        </div>
      </Header>
      <div>
        <ViewResumeLink
          href="https://drive.google.com/open?id=1hyvTD4aOTIHn7m56cYSa6J9rr2EH9f06"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Résumé</span>
          <ArrowRight16 />
        </ViewResumeLink>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;
