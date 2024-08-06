import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
      url:"https://www.linkedin.com/jobs/"
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <h1>Find a job that suits</h1>
            <h1>your interests and skills</h1>
            <p>
              Discover a fulfilling career that aligns with your passions and expertise,
              where you can leverage your unique talents to make a meaningful
              impact and achieve personal and professional growth!.
            </p>
          </div>
          <div className="image">
            <img src="https://img.freepik.com/premium-vector/job-vacancy-vector-illustration-with-showing-human-resources-selecting-prospective-employees_675567-1942.jpg?w=900" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => {
            return (
              <Link to={element.url}>
                <div className="card rounded-sm" key={element.id}>
                  <div className="icon">{element.icon}</div>
                  <div className="content">
                    <p>{element.title}</p>
                    <p>{element.subTitle}</p>
                  </div>
                </div></Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
