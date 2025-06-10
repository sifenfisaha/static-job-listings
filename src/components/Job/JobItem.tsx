import React from "react";
import type { JobPosting } from "../../types/types";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { addFilter } from "../../features/filterSlice";

interface Props {
  job: JobPosting;
}

const JobItem: React.FC<Props> = ({ job }) => {
  const dispath = useAppDispatch();
  const handleAddFilter = (filter: string) => {
    dispath(addFilter(filter));
  };
  return (
    <div
      className={`p-8 px-10 relative bg-white flex md:flex-row flex-col justify-between items-center gap-6 rounded-sm ${
        job.featured ? "border-l-4 border-primary " : ""
      } shadow-[0_12px_20px_rgba(91,164,164,0.25)]`}
    >
      <div className="flex md:gap-6">
        <img
          className=" md:static md:scale-100 scale-[0.6] absolute left-[-5px] top-[-40px] sm:left-5"
          src={job.logo}
          alt={job.company}
        />

        <div className="flex flex-col items-start justify-between">
          <div className="flex items-center justify-center gap-4">
            <h2 className="text-lg text-primary font-semibold">
              {job.company}
            </h2>
            {job.new && (
              <button className="px-2 font-bold flex items-center justify-center rounded-full  bg-primary text-white">
                new
              </button>
            )}
            {job.featured && (
              <button className="px-2 font-bold flex items-center justify-center rounded-full  bg-black text-white">
                featured
              </button>
            )}
          </div>
          <h3 className="text-xl font-bold">{job.position}</h3>
          <div>
            <p>
              <span className="text-gray-500 pr-2">{job.postedAt}</span>
              <span>&middot;</span>
              <span className="text-gray-500 px-2">{job.role}</span>
              <span>&middot;</span>
              <span className="text-gray-500 pl-2">{job.location}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {job.languages.map((lan) => (
          <p
            onClick={() => handleAddFilter(lan)}
            className="bg-cyan-bg cursor-pointer text-primary py-1 px-2 rounded-sm font-bold"
            key={lan}
          >
            {lan}
          </p>
        ))}
        {job.tools.map((lan) => (
          <p
            onClick={() => handleAddFilter(lan)}
            className="bg-cyan-bg cursor-pointer text-primary py-1 px-2 rounded-sm font-bold"
            key={lan}
          >
            {lan}
          </p>
        ))}
        <p
          onClick={() => handleAddFilter(job.level)}
          className="bg-cyan-bg cursor-pointer text-primary py-1 px-2 rounded-sm font-bold"
        >
          {job.level}
        </p>
        <p
          onClick={() => handleAddFilter(job.role)}
          className="bg-cyan-bg cursor-pointer text-primary py-1 px-2 rounded-sm font-bold"
        >
          {job.role}
        </p>
      </div>
    </div>
  );
};

export default JobItem;
