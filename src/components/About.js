import React from "react";

export default function About({ mode }) {

  const themeStyle = {
    color: mode === "dark" ? "#ffffff" : "#042743",
    backgroundColor: mode === "dark" ? "#042743" : "#ffffff",
    border: mode === "dark" ? "1px solid #ffffff" : "1px solid #042743",
  };

  const accordionData = [
    {
      id: "One",
      title: "Our Mission",
      content: "We aim to provide users with powerful text tools that are fast, simple, and effective."
    },
    {
      id: "Two",
      title: "Why Choose Us",
      content: "Our platform focuses on clean UI, performance, and user-friendly features."
    },
    {
      id: "Three",
      title: "Future Goals",
      content: "We plan to expand with AI-powered tools and smarter text analysis."
    }
  ];

  return (
    <div className="container my-4" style={themeStyle}>
      <h1 className="mb-4">About Us</h1>

      <div className="accordion" id="accordionExample">

        {accordionData.map((item, index) => (
          <div key={item.id} className="accordion-item" style={themeStyle}>

            <h2 className="accordion-header">
              <button
                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                style={themeStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${item.id}`}
              >
                {item.title}
              </button>
            </h2>

            <div
              id={`collapse${item.id}`}
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {item.content}
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
