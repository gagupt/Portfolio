import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { WorkItem, WorkTitle, JobTitle } from './styles';

const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Work</SectionTitle>
        <ul>
          
            <WorkItem >
              <WorkTitle>Senior Software Engineer</WorkTitle>
              <div>
                <JobTitle>Glowroad</JobTitle> <span>Bangalore</span>
                <span> &sdot; </span>
                <span>
                  June, 2019 to Present
                </span>
              </div>
              <Paragraph>&#8209; Integrated elasticsearch in order page. Worked on In-house analytic system setup, Integrated Shadowfax
shipping partner for return orders. Work involves jsp/servlet for web architecture, kafka, mysql, redis. </Paragraph>
            </WorkItem>

            <WorkItem >
              <WorkTitle>Senior Software Engineer</WorkTitle>
              <div>
                <JobTitle>Clip</JobTitle> <span>Bangalore</span>
                <span> &sdot; </span>
                <span>
                  Aug, 2018 to Apr, 2019
                </span>
              </div>
              <Paragraph>
              &#8209;  Migrated Clip’s user and video data from Neo4j to DynamoDB and Elasticsearch. <br/>
              &#8209; Involved in group chat feature development, video transcoding, thumbnail generation and watermarking.
                 </Paragraph>
            </WorkItem>

            <WorkItem >
              <WorkTitle>Software Development Engineer</WorkTitle>
              <div>
                <JobTitle>Amazon</JobTitle> <span>Bangalore</span>
                <span> &sdot; </span>
                <span>
                  May, 2017 to July, 2018
                </span>
              </div>
              <Paragraph>
              &#8209; Designed and implemented UCI data handling for App Store Vendor Management services.  <br/>
              &#8209; Developed rule based app entitlement service for guest account support in Fire Tv. Added new
entitlement rules for fire-tv device launches. <br/>
&#8209; Wrote nodal validation service for app Store India Monetization. Used scheduling job to run rave cluster
job and generate settlement, order reports of each day orders. Worked on game day for order and entitlement services, maintenance and on-call ticket handling.
                 </Paragraph>
            </WorkItem>

            <WorkItem >
              <WorkTitle> Software Engineer</WorkTitle>
              <div>
                <JobTitle>Freecharge</JobTitle> <span>Bangalore</span>
                <span> &sdot; </span>
                <span>
                  Sep, 2016 to Mar, 2017
                </span>
              </div>
              <Paragraph>
              &#8209; Involved in development of Backend Applications (Campaign Services, Coupon Services) of Freecharge. <br/>
              &#8209;Software Development Engineer)Worked on save cart feature, location based coupons, generation of referral code for existing users.
 </Paragraph>
            </WorkItem>
         
        </ul>
      </div>
    </Layout>
  );
};

export default Work;
