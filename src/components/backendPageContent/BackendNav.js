import React from "react";
import { SideBarLinks } from "../../styles/styled-components/SideBarLinks.styled";
import { SideBarSubLinks } from "../../styles/styled-components/SideBarSubLinks.styled";
import { SideBarTitle } from "../../styles/styled-components/SideBarTitle.styled";
import { SideBarSubtitle } from "../../styles/styled-components/SideBarSubtitle.styled";

const BackendNav = ({ handleMenu, openMenu }) => {
  return (
    <SideBarLinks className={`sideBar-links ${openMenu ? "" : "active"}`}>
      {/* what is backend  */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#what-is">What is Backend Dev.</a>
      </SideBarTitle>

      {/* backend roadmap  */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#roadmap">Backend Dev. Roadmap</a>
      </SideBarTitle>

      {/* networking  */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#networking">Networking</a>
        <SideBarSubLinks>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#communities">Tech Communities</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#bootcamps">Bootcamps</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#internships">Internship/Mentorship</a>
          </SideBarSubtitle>
        </SideBarSubLinks>
      </SideBarTitle>

      {/* code editors  */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#editor">Code Editors</a>
        <SideBarSubLinks>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#desktop-apps">Desktop Apps</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#online-editors">Online Editors</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#mobile-apps">Mobile Apps</a>
          </SideBarSubtitle>
        </SideBarSubLinks>
      </SideBarTitle>

      {/* javascript  */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#backend">Basics of Backend</a>
      </SideBarTitle>

      {/* languages  */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#backend-lang">Backend Languages</a>
        <SideBarSubLinks>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#nodejs">Nodejs</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#python">Python</a>
          </SideBarSubtitle>
        </SideBarSubLinks>
      </SideBarTitle>

      {/* version control  */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#version-control">Version Control</a>
        <SideBarSubLinks>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#git">Git</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#github">GitHub</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#gitlab">GitLab</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#bitbucket">BitBucket</a>
          </SideBarSubtitle>
        </SideBarSubLinks>
      </SideBarTitle>

      {/* deployment services  */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#deployment">Deployment Services</a>
        <SideBarSubLinks>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#heroku">Heroku</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#vercel">Vercel</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#deploy-digital-ocean">DigitalOcean</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#aws">Amazon Web Services</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#gcp">Google Cloud Platform</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#azure">Azure</a>
          </SideBarSubtitle>
        </SideBarSubLinks>
      </SideBarTitle>

      {/* databases  */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#databases">Databases</a>
        <SideBarSubLinks>
          {/* relational database  */}
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#relational-db">Relational DB</a>
            <SideBarSubLinks>
              <SideBarSubtitle onClick={handleMenu}>
                <a href="#mysql">MySQL</a>
              </SideBarSubtitle>
              <SideBarSubtitle onClick={handleMenu}>
                <a href="#postgresql">PostgreSQL</a>
              </SideBarSubtitle>
              <SideBarSubtitle onClick={handleMenu}>
                <a href="#microsoftsqlserver">Microsoft SQL Server</a>
              </SideBarSubtitle>
              <SideBarSubtitle onClick={handleMenu}>
                <a href="#oracle">Oracle</a>
              </SideBarSubtitle>
            </SideBarSubLinks>
          </SideBarSubtitle>
          {/* nonrelational database  */}
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#nonrelational-db">Non-Relational DB</a>
            <SideBarSubLinks>
              <SideBarSubtitle onClick={handleMenu}>
                <a href="#mongodb">MongoDB</a>
              </SideBarSubtitle>
            </SideBarSubLinks>
          </SideBarSubtitle>
        </SideBarSubLinks>
      </SideBarTitle>

      {/* backend frameworks  */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#be-frameworks">Backend Frameworks</a>
        <SideBarSubLinks>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#expressjs">ExpressJS</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#django">Django</a>
          </SideBarSubtitle>
          <SideBarSubtitle onClick={handleMenu}>
            <a href="#flask">Flask</a>
          </SideBarSubtitle>
        </SideBarSubLinks>
      </SideBarTitle>

      {/* others  */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#other-resource">Other Useful Resource</a>
      </SideBarTitle>

      {/* what next  */}
      <SideBarTitle onClick={handleMenu}>
        <a href="#what-next">What Next</a>
      </SideBarTitle>
    </SideBarLinks>
  );
};

export default BackendNav;
