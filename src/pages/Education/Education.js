import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { EducationItem, Institution, Degree } from './styles';

const Education = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Education</SectionTitle>
        <ul>
         
            <EducationItem >
              <Institution>IIT Bombay</Institution>
              <div>
                <Degree>
                  M.Tech
                </Degree>
                <span> &sdot; </span>
                <span>
                  2014 to 2016
                </span>
              </div>
              <Paragraph>Computer Science</Paragraph>
            </EducationItem>

            <EducationItem >
              <Institution>BIET Jhansi</Institution>
              <div>
                <Degree>
                  B.Tech
                </Degree>
                <span> &sdot; </span>
                <span>
                  2010 to 2014
                </span>
              </div>
              <Paragraph>Information Technology</Paragraph>
            </EducationItem>

            <EducationItem >
              <Institution>V.P.I.C. Kanpur</Institution>
              <div>
                <Degree>
                Intermediate
                </Degree>
                <span> &sdot; </span>
                <span>
                  2010
                </span>
              </div>
              <div>
                <Degree>
                Matriculation
                </Degree>
                <span> &sdot; </span>
                <span>
                  2008
                </span>
              </div>
          
            </EducationItem>

           

        </ul>
      </div>
    </Layout>
  );
};

export default Education;
