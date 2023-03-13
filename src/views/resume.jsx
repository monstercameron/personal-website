import React from "react";
const Resume = () => {
  return (
    <div className="container-fluid">
      {/* heading */}
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="mb-0">Earl Cameron</h2>
        </div>
        <div className="col-6 mx-auto text-center">
          <h6 className="mb-0 text-uppercase">
            305-321-0531 | mr.e.cameron@gmail.com | www.earlcameron.com
          </h6>
        </div>
      </div>
      {/* summary */}
      <div className="row">
        <div className="col-12 text-center mt-1">
          <h5 className="text-capitalize mb-0">summary</h5>
          <hr className="m-1" />
        </div>
        <div className="col-12">
          <p>
            As an experienced and driven software engineer, I adeptly adapt to new platforms. Proficient in designing, coding, debugging, and testing application and system software, I excel in high-pressure team environments with strong interpersonal and communication skills          </p>
        </div>
      </div>
      {/* skills */}
      <div className="row">
        <div className="col-12 text-center">
          <h5 className="text-capitalize mb-0">technical skills</h5>
          <hr className="m-1" />
        </div>
        <hr />
        <div className="col-12">
          <div className="row text-capitalize">
            <div className="col-4">
              <div className="row">
                <div className="col-12 text-center">
                  <h6>Languages/frameworks/Libraries</h6>
                  <hr className="m-1" />
                </div>
                <div className="col-6">Node.js</div>
                <div className="col-6">Express.js</div>
                <div className="col-6">Angular</div>
                <div className="col-6">React.js</div>
                <div className="col-6">Jest.js</div>
                <div className="col-6">Python</div>
                <div className="col-6">Flask</div>
                <div className="col-6">Bootstrap</div>
                <div className="col-6">C# .NET</div>
                <div className="col-6">C# Blazor</div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-12 text-center">
                  <h6>Technologies</h6>

                  <hr className="m-1" />
                </div>
                <div className="col-6">javascript/ES6+</div>
                <div className="col-6">MonggoDB</div>
                <div className="col-6">MySQL</div>
                <div className="col-6">HTML</div>
                <div className="col-6">CSS3</div>
                <div className="col-6">JSON</div>
                <div className="col-6">Wordpress</div>
                <div className="col-6">REST/HTTP</div>
                <div className="col-6">GIT</div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-12 text-center">
                  <h6>platforms</h6>

                  <hr className="m-1" />
                </div>
                <div className="col-6">vistual studio</div>
                <div className="col-6">vistual studio code</div>
                <div className="col-6">chrome inspector</div>
                <div className="col-6">netbeans</div>
                <div className="col-6">linux</div>
                <div className="col-6">terminal/bash</div>
                <div className="col-6">GCP</div>
                <div className="col-6">digital ocean</div>
                <div className="col-6">Debugging</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* work experience */}
      <div className="row">
        <div className="col-12 text-center mt-3">
          <h5 className="text-capitalize">work experience</h5>
          <hr className="m-1" />
        </div>
        <div className="col-12">
          {/* UKG */}
          <div className="row">
            <div className="col-4 text-uppercase text-capitalize">
              <h6>UKG | Software engineer</h6>
            </div>
            <div className="col-4 text-center">
              <a href="https://www.ukg.com/">
                https://www.ukg.com/
              </a>
            </div>
            <div className="col-4 text-uppercase text-right">
              <h6>2020-ongoing</h6>
            </div>
            <div className="col-12" style={{ fontSize: "10pt" }}>
              Ultimate Software produces a world class, industry leading HCM
              solution that is used by many top tier companies (including
              Google).
            </div>
            <div className="col-12">
              job duties:
              <ul>
                <li>Conducting research and troubleshooting to resolve intricate software issues</li>
                <li>Delivering exceptional customer service to clients</li>
                <li>Maintaining optimal availability of all services under my responsibility</li>
              </ul>
            </div>
          </div>
          {/* ultimate software */}
          <div className="row">
            <div className="col-4 text-uppercase text-capitalize">
              <h6>ultimate software | cloud engineer I</h6>
            </div>
            <div className="col-4 text-center">
              <a href="https://www.ultimatesoftware.com/">
                https://www.ultimatesoftware.com/
              </a>
            </div>
            <div className="col-4 text-uppercase text-right">
              <h6>2019-2020</h6>
            </div>
            <div className="col-12" style={{ fontSize: "10pt" }}>
              Ultimate Software produces a world class, industry leading HCM
              solution that is used by many top tier companies (including
              Google).
            </div>
            <div className="col-12">
              job duties:
              <ul>
                <li>Investigating and resolving intricate issues related to cloud infrastructure</li>
                <li>Ensuring outstanding customer service experience for clients</li>
                <li>Maintaining the highest level of availability for all cloud services under my responsibility</li>
              </ul>
            </div>
          </div>
          {/* 4Geeks */}
          <div className="row mt-2">
            <div className="col-4 text-uppercase text-capitalize">
              <h6>4Geeks academy | instructor/TA</h6>
            </div>
            <div className="col-4 text-center">
              <a href="https://www.4geeksacademy.co/">
                https://www.4geeksacademy.co/
              </a>
            </div>
            <div className="col-4 text-uppercase text-right">
              <h6>contractor</h6>
            </div>
            <div className="col-12" style={{ fontSize: "10pt" }}>
              4Geeks Academy was founded in 2015. What began as an internal
              project to train new developers has flourished into a full-time
              passion. As coding has become an essential part of society, the
              mission of our Coding Bootcamp is to instill a new framework for
              Coding Education universally. 4Geeks Academy now offers locations
              in 3 cities, with 5 campuses, and over 300 graduates.
            </div>
            <div className="col-12">
              job duties:
              <ul>
                <li>
                  Help simplify complex ideas into digestible partitions for
                  students to understand
                </li>
                <li>Demonstrate command over the material taught</li>
                <li>Help students to debug their projects</li>
              </ul>
            </div>
          </div>
          {/* hey tutor */}
          <div className="row mt-2">
            <div className="col-4 text-uppercase text-capitalize">
              <h6>heytutor | tutor (HTML, CSS ,JAVASCRIPT)</h6>
            </div>
            <div className="col-4 text-center">
              <a href="https://heytutor.com/tutors/info/FL/Miami/ID13285-Earl-Cameron/">https://heytutor.com/EarlCameron</a>
            </div>
            <div className="col-4 text-uppercase text-right">
              <h6>contractor</h6>
            </div>
            <div className="col-12 font-italic" style={{ fontSize: "10pt" }}>
              "At HeyTutor, we only work with the very best tutors. Only a
              portion of tutors are able to make it through our rigorous
              screening process. Every tutor has undergone an assessment and
              interview with us.""
            </div>
            <div className="col-12">
              job duties:
              <ul>
                <li>over 100 hours of tutoring</li>
                <li>5 star review</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Education */}
      <div className="row">
        <div className="col-12 text-center">
          <h5 className="mb-0">Education</h5>
          <hr className="m-1" />
        </div>
        <div className="col-3">
          <div className="row">
            <div className="col-12">LaunchCode Tech Bootcamp, Miami, FL</div>
            <div className="col-12">completed 2019</div>
            <div className="col-12">
              <a href="https://www.launchcode.org/">
                https://www.launchcode.org/
              </a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="col-12">Miami Dade College, Miami, FL</div>
          <div className="col-12">Completed 2022</div>
          <div className="col-12">
            <a href="https://mdc.edu/">https://mdc.edu/</a>{" "}
          </div>
        </div>
        <div className="col-3">
          <div className="col-12">Florida International University, Miami, FL</div>
          <div className="col-12">BA CompSci ongoing</div>
          <div className="col-12">
            <a href="https://fiu.edu/">https://fiu.edu/</a>{" "}
          </div>
        </div>
        <div className="col-3">
          <div className="col-12 text-capitalize">
            Classes taken: intro to c++, visual basic, android 1/2, java, java/springboot, python/flask
          </div>
        </div>
      </div>
      {/* project experience */}
      <div className="row">
        <div className="col-12 text-center mt-3">
          <h5 className="text-capitalize">project experience</h5>
          <hr className="m-1" />
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-6">People Budget</div>
            <div className="col-6 text-right">
              <a href="https://github.com/CodeforSouth/peoplebudget">
                https://github.com/CodeforSouth/peoplebudget
              </a>
            </div>
            <div className="col-12 text-capitalize">
              react, express, node, mysql, axios, git, REST
            </div>
            <div className="col-12 font-italic" style={{ fontSize: "10pt" }}>
              "...As a Student Technical Lead for the project, he has led a
              group of students who had no prior training or experience with
              modern web-development tools like HTML, CSS, and Javascript
              frameworks. Thanks to his efforts, the students are building
              technical skillsets and projects for Code For South Florida is set
              to deliver tool by the end of Q3 2020 that will serve as a
              proof-of-concept for city leaders to implement participatory
              budgeting tool in South Florida’s local government."
            </div>
            <div className="col-12">
              <a href="https://codeforsouth.com/blog/civic-hacking-chronicles-earl-cameron-is-building-miamis-first-participatory-budgeting-tool/">
                https://codeforsouth.com/blog/civic-hacking-chronicles-earl-cameron-is-building-miamis-first-participatory-budgeting-tool/
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 mt-3">
          <div className="row">
            <div className="col-6">
              MetaHumanServer | <a href="https://github.com/monstercameron/MetaHumanServer">MetaHumanServer</a>
            </div>
            <div className="col-6 text-right">
              <a href="https://github.com/monstercameron/mdchem-mern">
                https://github.com/monstercameron/mdchem-mern
              </a>
            </div>
            <div className="col-12 text-capitalize">
              python, openai whisper, openai chatGPT, picovoice, flask
            </div>
            <div className="col-12 font-italic" style={{ fontSize: "10pt" }}>
              This is an active software development project focused on advancing speech recognition and text-to-speech technologies through the creation and setup of various pipelines. The project directory contains subdirectories and files related to API server initialization, pipeline setup, image generation, and helper functions. Latency issues are being addressed.
            </div>
            <div className="col-12"></div>
          </div>
        </div>
      </div>
      {/* personal */}
      {/* <div className="row mt-2 text-capitalize">
        <div className="col-12 text-center">
          <h5 className="mb-0">Interests/activites</h5>
          <hr className="m-1" />
        </div>
        <div className="col-12">
          <ul>
            <li>attends local hackathons to learn more and network</li>
            <li>
              subscribes development email lists to keep updated and reads daily
              medium articles about webdev
            </li>
            <li>
              reads reddit, specifically r/javascript/, r/node/, r/reactjs/ sub
              reddits, amongst development communities
            </li>
            <li>
              learning electronics and likes to start interesting projects
              https://github.com/monstercameron/pi-camera-gui
            </li>
            <li>learning Japanese via Duolingo</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Resume;
