import React, { useState } from "react";
import "./Courses.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import courses from '../../images/courses.jpg'
const courseData = {
  "Introduction to Computers": {
    overview: `<p>Provides a foundational understanding of computer systems, covering hardware, software, and basic operations. It's designed for beginners eager to explore the world of computing.</p>`,
    syllabus: [
      "Introduction to Computer Systems",
      "Understanding Software",
      "Basic Computer Operations",
      "Introduction to Networking"
    ]
  },
  "C Programming Basics": {
    overview: `<p>Introduces the C language, focusing on syntax, control structures, and fundamental programming concepts. Ideal for those starting their coding journey.</p>`,
    syllabus: [
      "Introduction to C Programming",
      "Variables and Data Types",
      "Control Structures",
      "Functions and Arrays"
    ]
  },

  "Computer Networks": {
    overview: `<p>Provides a foundational understanding of computer systems, covering hardware, software, and basic operations. It's designed for beginners eager to explore the world of computing.</p>`,
    syllabus: [
      "Introduction to Computer Systems",
      "Understanding Software",
      "Basic Computer Operations",
      "Introduction to Networking"
    ]
  }
  // Add similar structure for other courses...
};

const CoursesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [activeTab, setActiveTab] = useState("Overview");

  const handleCourseClick = (courseTitle) => {
    setSelectedCourse(courseTitle);
    setActiveTab("Overview");
  };

  const renderContent = () => {
    if (!selectedCourse) {
      return <p className="def">Please select a course to see the details.</p>;
    }

    const { overview, syllabus } = courseData[selectedCourse];

    if (activeTab === "Overview") {
      return (
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: overview }}
          />
          <h3>Syllabus</h3>
          <ul className="syllabus-list">
            {syllabus.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
    }

    if (activeTab === "Sample Videos") {
      return <p className="videos">Will update soon</p>; // Default message for Sample Videos tab
    }
  };

  return (
    <>
      <Navbar />
      <h1 className="head">Welcome to my Courses Section</h1>
      <div className="courses-container">
        <div className="courses-layout">
          <div className="course-list">
            <h2>Courses</h2>
            <ul>
              {Object.keys(courseData).map((course) => (
                <li
                  key={course}
                  className={`course-list-item ${
                    selectedCourse === course ? "active" : ""
                  }`}
                  onClick={() => handleCourseClick(course)}
                >
                  {course}
                </li>
              ))}
            </ul>
          </div>

          <div className="course-details">
            <h2>{selectedCourse || <p className="def">Select Courses<br></br> <img src={courses} className="course-image" alt="courses" width="400px"/></p>}</h2>
            {selectedCourse && (
              <div>
                <div className="tabs">
                  <div
                    className={`tab ${
                      activeTab === "Overview" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Overview")}
                  >
                    Overview
                  </div>
                  <div
                    className={`tab ${
                      activeTab === "Sample Videos" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Sample Videos")}
                  >
                    Sample Videos
                  </div>
                </div>

                <div className="tab-content">{renderContent()}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursesPage;
