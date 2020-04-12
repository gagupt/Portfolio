import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';
import { ProfileLink } from './styles';

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>About Me</SectionTitle>
        
        <Paragraph>A post graduate from IIT Bombay, having almost 4 years of industry experience. Involved in couple of 
          interesting projects, like In-house analytic system, Group chat feature, Neo4j to dymanoDb, elasticsearch 
          data migration. Love to code and
          keen in learning new technologies.
        </Paragraph>
      </div>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <div>
        <Pill key="Java">Java</Pill>
        <Pill key="Java">Spring boot</Pill>
        <Pill key="Java">Mysql</Pill>
        <Pill key="Java">Kafka</Pill>
        <Pill key="Java">DynamoDb</Pill>
        <Pill key="Java">ElasticSearch</Pill>
        </div>
      </div>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ul>
        <ProfileLink >
              <a href={"https://www.linkedin.com/in/gaurav-gupta-337b5669/"} target="_blank" rel="noreferrer noopener">
                linkedin
              </a>
            </ProfileLink>
        
            <ProfileLink >
              <a href={"https://github.com/gagupt?tab=repositories"} target="_blank" rel="noreferrer noopener">
                github
              </a>
            </ProfileLink>
         
        </ul>
      </div>
    </Layout>
  );
};

export default Me;
