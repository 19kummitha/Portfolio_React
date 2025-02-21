import { useState } from "react";

const projects = [
  {
    title: "Community Communication Website for a Residency",
    technologies: "C, Angular, ASP.Net",
    description: [
      "Weather Forecast API is used to display the current weather situation.",
      "The Community Communication in a residency is most important for the residents and admins.",
      "Includes features like residents’ complaints, request services, events, bill payments, etc.",
    ],
  },
  {
    title: "Loan Approval Prediction Using Machine Learning",
    technologies: "Python, Machine Learning",
    description: [
      "Used various machine learning algorithms like Gaussian Naive Bayes, Random Forest, Decision Tree, KNN, and Logistic Regression.",
      "Gaussian Naive Bayes achieved superior accuracy.",
    ],
  },
  {
    title: "E-Commerce Website",
    technologies: "HTML, CSS, JavaScript",
    description: [
      "An application that shows products according to the user’s input.",
      "This project includes only the frontend of an E-commerce website.",
    ],
  },
  {
    title: "Ultrasound Detection Using Arduino-Uno",
    technologies: "Arduino",
    description: [
      "This project is designed to detect theft in places like museums and banks.",
      "Helps protect valuable assets from theft and damages.",
    ],
  },
];

export default function Projects() {
  // Keep track of which project is expanded
  const [expandedProject, setExpandedProject] = useState(null);

  const handleProjectClick = (index) => {
    setExpandedProject((prevIndex) => (prevIndex === index ? null : index)); // Toggle
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>Projects</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => handleProjectClick(index)}
            style={{
              width: "300px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
              textAlign: "left",
              backgroundColor:
                expandedProject === index ? "#eef6ff" : "#f9f9f9",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            <h3>{project.title}</h3>
            <p>
              <strong>Technologies:</strong> {project.technologies}
            </p>
            {expandedProject === index && (
              <ul style={{ marginTop: "10px" }}>
                {project.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
