import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem, em, lighten } from 'polished';
import ImageLink from '../components/ImageLink';

import german from '../assets/images/languages/german.svg';
import english from '../assets/images/languages/english.svg';
import french from '../assets/images/languages/french.svg';
import spanish from '../assets/images/languages/spanish.svg';

import java from '../assets/images/java/java.svg';
import javascript from '../assets/images/javascript/javascript.svg';
import csharp from '../assets/images/csharp/csharp.png';
import sql from '../assets/images/sql/sql.png';
import php from '../assets/images/php/php.svg';
import vb from '../assets/images/vb/vb.png';
import c from '../assets/images/c/c.svg';
import cpp from '../assets/images/c++/c++.svg';

const Heading = styled.h4`
  margin-bottom: ${rem('22px')};
  padding: 0;
  color: ${lighten(0.1)('#343A40')};
`;

const SubHeading = styled.h6`
  margin: ${rem('20px')} 0 ${rem('20px')} 0;
  padding: 0;
  font-style: italic;
  font-size: ${em('16px')};
  color: ${lighten(0.4)('#343A40')};
`;

const ImageList = styled.div`
  display: flex;
  > div {
    margin: 0 ${rem('10px')} 0 ${rem('10px')};
  }
  > div:first-child {
    margin-left: 0;
  }
`;

const SkillsPage = ({}) => (
  <div className="container-fluid">
    <h3>Skills</h3>
    <p>
      As a developer I always want to improve my skillset and learn new things everyday. Over these
      years I have accquired a extended skillset in multiple programming languages, tools, design
      patterns, mindset, customer care, customer support, ... . On the following pages I will try to
      list my main skills with some extended detail and also show off other skills I have accquired.
    </p>
    <hr />
    <div className="row mb-2">
      <div className="col-sm-12 my-4 col-md-6">
        <Heading>Languages</Heading>

        <SubHeading>Mother tongue</SubHeading>

        <ImageList>
          <ImageLink title="German" image={german} />
        </ImageList>

        <SubHeading>Fluent</SubHeading>

        <ImageList>
          <ImageLink title="English" image={english} />
        </ImageList>

        <SubHeading>Basic</SubHeading>

        <ImageList>
          <ImageLink title="French" image={french} />
          <ImageLink title="Spanish" image={spanish} />
        </ImageList>
      </div>

      <div className="col-sm-12 my-4 col-md-6">
        <Heading>Programming Languages</Heading>

        <SubHeading>Primary</SubHeading>

        <ImageList>
          <ImageLink title="Java" image={java} link="/skills/java" />
          <ImageLink title="JavaScript" image={javascript} link="/skills/javascript" />
          <ImageLink title="C#" image={csharp} link="/skills/csharp" />
        </ImageList>

        <SubHeading>Advanced</SubHeading>

        <ImageList>
          <ImageLink title="SQL" image={sql} />
          <ImageLink title="PHP" image={php} />
          <ImageLink title="Visual Basic" image={vb} />
        </ImageList>

        <SubHeading>Basic</SubHeading>

        <ImageList>
          <ImageLink title="C" image={c} />
          <ImageLink title="C++" image={cpp} />
        </ImageList>
      </div>
    </div>

    <div className="row mt-2">
      <div className="col-sm-12 my-4 col-md-6">
        <Heading>Plattforms</Heading>
        <ImageList>
          <ImageLink title="Windows" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="Linux" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="macOS" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="Android" image="http://lorempixel.com/100/100/business/" />
        </ImageList>
      </div>
      <div className="col-sm-12 my-4 col-md-6">
        <Heading>Databases</Heading>
        <ImageList>
          <ImageLink title="PosgreSQL" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="MySQL" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="SQlite" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="MongoDb" image="http://lorempixel.com/100/100/business/" />
          <ImageLink
            title="Microsoft SQL Server 2008/2012"
            image="http://lorempixel.com/100/100/business/"
          />
        </ImageList>
      </div>
    </div>

    <div className="row mt-2">
      <div className="col-sm-12 my-4 col-md-6">
        <Heading>VCS</Heading>
        <ImageList>
          <ImageLink title="MKS" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="SVN" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="TFS" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="Mercurial" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="git" image="http://lorempixel.com/100/100/business/" />
        </ImageList>
      </div>
      <div className="col-sm-12 my-4 col-md-6">
        <Heading>Issue Tracker</Heading>
        <ImageList>
          <ImageLink title="Redmine" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="GitLab" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="JIRA" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="Sentry" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="Echolon" image="http://lorempixel.com/100/100/business/" />
        </ImageList>
      </div>
    </div>

    <div className="row mt-2">
      <div className="col-sm-12 my-4 col-md-6">
        <Heading>CI Server</Heading>
        <ImageList>
          <ImageLink title="Jenkins" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="TeamCity" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="BitBucket" image="http://lorempixel.com/100/100/business/" />
          <ImageLink
            title="Team Foundation Server"
            image="http://lorempixel.com/100/100/business/"
          />
          <ImageLink title="GitLab" image="http://lorempixel.com/100/100/business/" />
        </ImageList>
      </div>
      <div className="col-sm-12 my-4 col-md-6">
        <Heading>Misc</Heading>
        <ImageList>
          <ImageLink title="Artifactory" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="Nexus" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="SonarQube" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="SeleniumGrid" image="http://lorempixel.com/100/100/business/" />
        </ImageList>
      </div>
    </div>

    <div className="row mt-2">
      <div className="col-sm-12 my-4 col-md-6">
        <Heading>IDE</Heading>
        <ImageList>
          <ImageLink title="IntelliJ IDEA" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="WebStorm" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="PHPStorm" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="Eclipse" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="Netbeans" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="Visual Studio" image="http://lorempixel.com/100/100/business/" />
        </ImageList>
      </div>
      <div className="col-sm-12 my-4 col-md-6">
        <Heading>Editors</Heading>
        <ImageList>
          <ImageLink title="Visual Studio Code" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="Atom" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="Sublime Text" image="http://lorempixel.com/100/100/business/" />
          <ImageLink title="Notepad++" image="http://lorempixel.com/100/100/business/" />
        </ImageList>
      </div>
    </div>
  </div>
);

export default SkillsPage;
