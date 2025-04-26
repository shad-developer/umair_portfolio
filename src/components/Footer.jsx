import React from "react";
import { FaFileAlt, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  PERSONAL_WEBSITE_URL,
  YOUTUBE_URL,
  RESUME_URL,
  CURRENT_YEAR,
} from "../constants/index";

export default function Footer() {
  return (
    <footer className="bg-darkDesert">
      <div className="flex flex-col items-center justify-center py-2 px-2 sm:flex-row sm:justify-between sm:py-4 sm:px-6">
        <span className="text-sm text-lightDesert sm:text-center">
          © {CURRENT_YEAR}{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={PERSONAL_WEBSITE_URL}
            className="hover:text-goldDesert transition-colors duration-300"
          >
            Muhammad Umair Shad
          </a>
        </span>
        <div className="flex mt-2 space-x-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={GITHUB_URL}
            className="hover:text-goldDesert transition-colors duration-300"
          >
            <FaGithub className="size-6" />
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={LINKEDIN_URL}
            className="hover:text-goldDesert transition-colors duration-300"
          >
            <FaLinkedin className="size-6" />
            <span className="sr-only">LinkedIn account</span>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href={YOUTUBE_URL}
            className="hover:text-goldDesert transition-colors duration-300"
          >
            <FaYoutube className="size-6" />
            <span className="sr-only">YouTube Channel</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={RESUME_URL}
            className="hover:text-goldDesert transition-colors duration-300"
          >
            <FaFileAlt className="size-6" />
            <span className="sr-only">Resume</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
