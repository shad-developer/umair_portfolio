import React, { useState } from "react";
import Modal from "react-modal";
import { FaTimesCircle } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import jobExperiences from "../constants/jobExperiences.json";

const JobExperienceCard = ({ experience, onClick }) => (
  <VerticalTimelineElement
    icon={
      <img
        src={experience.img}
        alt={`${experience.title} icon`}
        className="h-full w-full object-cover rounded-full"
      />
    }
    date={
      <span className="text-darkDesert font-medium">
        {experience.timePeriod}
      </span>
    }
  >
    {experience.img2 && (
      <img
        src={experience.img2}
        alt={`${experience.company} logo`}
        className="h-8 w-auto absolute top-4 right-4"
      />
    )}

    <h3 className="text-xl sm:text-2xl font-bold text-darkDesert vertical-timeline-element-title">
      {experience.title}
    </h3>
    <h4 className="text-lg sm:text-xl text-darkDesert italic mb-3 vertical-timeline-element-subtitle">
      {experience.company}
    </h4>

    <div className="mt-4">
      <button
        className="text-sm sm:text-base text-darkDesert font-semibold hover:text-goldDesert transition-colors duration-200"
        onClick={onClick}
        aria-label={`Read more about the ${experience.title} role at ${experience.company}`}
      >
        Read more...
      </button>
    </div>
  </VerticalTimelineElement>
);

// const JobExperienceCard = ({ experience, onClick }) => (
//   <VerticalTimelineElement
//     icon={
//       <div className="flex justify-center items-center w-full h-full"> {/* Added wrapper div for centering if needed */}
//         <img
//           src={experience.img}
//           alt={`${experience.title} icon`}
//           className="block h-full w-full object-cover rounded-full"
//         />
//       </div>
//     }
//     contentStyle={{ position: "relative" }}
//     date={<span className="text-darkDesert">{experience.timePeriod}</span>}
//   >
//     <img
//       src={experience.img2}
//       alt={experience.title}
//       className=" hidden md:block h-10 w-auto rounded-full absolute top-0 right-0 mt-2 mr-2"
//     />
//     <h3 className="text-2xl font-bold text-darkDesert">{experience.title}</h3>
//     <p className="text-xl text-darkDesert italic mb-4">{experience.company}</p>
//     {/* <p className="text-darkDesert">{experience.description}</p> */}
//     <div className="flex justify-between items-center">
//       <button
//         className="text-darkDesert font-bold hover:text-goldDesert"
//         onClick={onClick}
//       >
//         Read more...
//       </button>
//     </div>
//   </VerticalTimelineElement>
// );

const Experience = () => {
  const [modalContent, setModalContent] = useState(null);

  return (
    <div
      id="experience"
      className="bg-lightDesert p-8 rounded-lg shadow-lg w-full mx-auto mt-12"
    >
      <h2 className="text-4xl font-bold text-darkDesert mb-10 text-center">
        Developer Experience
      </h2>
      <VerticalTimeline>
        {jobExperiences.map((experience, index) => (
          <JobExperienceCard
            key={index}
            experience={experience}
            onClick={() => setModalContent(experience)}
          />
        ))}
      </VerticalTimeline>
      <br />
      <br />
      <Modal
        isOpen={!!modalContent}
        onRequestClose={() => setModalContent(null)}
        className="fixed inset-0 z-50 flex items-center justify-center p-6 "
        overlayClassName="bg-black bg-opacity-50 transition-opacity duration-500 ease-out"
      >
        <div className="bg-white p-6 rounded-lg shadow-2xl transform transition-transform duration-500 ease-out space-y-4 md:space-y-0 max-w-md max-h-[80vh] overflow-y-auto">
          <button
            onClick={() => setModalContent(null)}
            className="absolute top-2 right-2 text-darkDesert hover:text-goldDesert"
          >
            <FaTimesCircle size={32} />
          </button>
          <div>
            <h3 className="text-darkDesert text-2xl font-bold mb-4">
              {modalContent?.title}
            </h3>
            <p className="text-darkDesert mb-4">{modalContent?.company}</p>
            <p className="text-darkDesert mb-4">{modalContent?.description}</p>
            <p className="text-darkDesert font-bold">
              {modalContent?.timePeriod}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Experience;
