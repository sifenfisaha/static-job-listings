import React, { useEffect, useState } from "react";
import type { JobList } from "../../types/types";
import JobItem from "./JobItem";
import { useAppSelector } from "../../hook/useAppSelector";

const JobListC: React.FC = () => {
  const [data, setdata] = useState<JobList>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/data.json");
        const resData: JobList = await res.json();
        setdata(resData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const filters = useAppSelector((staet) => staet.filters);
  const filterItems = filters.filters;

  const filteredJobs = data.filter((job) => {
    if (filterItems.length === 0) {
      return true;
    }
    const tags = [job.role, ...job.languages, job.level, ...job.tools];
    console.log("tags", tags);

    return filterItems.some((filter) => tags.includes(filter));
  });
  console.log(filterItems);

  console.log(filteredJobs);

  if (loading) return <div>Loading...</div>;
  return (
    <section className="w-[80%] mx-auto flex flex-col gap-8 md:gap-4">
      {filteredJobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </section>
  );
};

export default JobListC;
