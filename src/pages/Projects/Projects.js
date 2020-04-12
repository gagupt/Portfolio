import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer } from './styles';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Recent Projects</SectionTitle>
        <ul>
        <ProjectItem >
              <ProjectTitle>In-House Analytic System</ProjectTitle>
              <p>Built an event injestion system thats consumes user events from android app through kafka queue and 
                persists in mysql and s3 .</p>
              <SkillContainer>
             
                  <Pill >MySql</Pill>
                  <Pill >Kafka</Pill>
                  <Pill >S3</Pill>
              </SkillContainer>
            </ProjectItem>
            <ProjectItem >
              <ProjectTitle>Group Chat</ProjectTitle>
              <p>Built a whatsapp like chat application. Worked on video transcoding and thumbnail generation.</p>
              <SkillContainer>
             
              <Pill >DynamoDb</Pill>
              <Pill >Kafka</Pill>
                  <Pill >Elasticsearch</Pill>
                  <Pill >Redis</Pill>
                  <Pill >WebSocket</Pill>
              </SkillContainer>
            </ProjectItem>
            <ProjectItem >
              <ProjectTitle>User reputation module for public transport crowdsourcing application</ProjectTitle>
              <p>Developed a discrete event simulator of Mumbai Local Trains to analyze the performance of the user
reputation module.</p>
              <SkillContainer>
               
              </SkillContainer>
            </ProjectItem>
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
