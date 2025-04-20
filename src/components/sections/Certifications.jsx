// src/components/sections/Certifications.jsx

import React, { useState } from "react";
import styled from "styled-components";

// Sample data for certifications (replace with your actual data)
const certifications = [
  {
    name: "AWS Certified Cloud Practicioner",
    issueDate: "Feb 2025",
    link: "https://www.credly.com/badges/cdb5816a-ad8e-48fa-b044-0435cc167c07/linked_in_profile",
  },
  {
    name: "Data Visualization in Tableau",
    issueDate: "Apr 2024",
    link: "https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/4521191/original/Zahra_Hashim_Hashmi_Khamgaowala20240416-76-15ga8sb.jpg",
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  padding: 0px 16px;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CertificationCard = styled.div`
  background-color: ${({ theme }) => theme.card_bg};
  border-radius: 12px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 12px;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
`;

const CertificationTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.primary};
`;

const CertificationDate = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 12px;
`;

const CertificationLink = styled.a`
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Certifications = () => {
  return (
    <Container id="Certifications">
      <Wrapper>
        <Title>Certification</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          The certification I've earned that showcase my skills.
        </Desc>

        <div>
          {certifications.map((certification, index) => (
            <CertificationCard key={index}>
              <CertificationTitle>{certification.name}</CertificationTitle>
              <CertificationDate>Issued: {certification.issueDate}</CertificationDate>
              <CertificationLink href={certification.link} target="_blank">
                View Certification
              </CertificationLink>
            </CertificationCard>
          ))}
        </div>
      </Wrapper>
    </Container>
  );
};

export default Certifications;
