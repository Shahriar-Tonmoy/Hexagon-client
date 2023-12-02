import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Job from "../Job/Job";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://need-server.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  console.log(jobs);

  const webDevJobs = jobs.filter(job => job.category === 'Web development');
  const digiMarketingJobs = jobs.filter(job => job.category === 'Digital marketing');
  const graphDesignJobs = jobs.filter(job => job.category === 'Graphics design');
  return (
    <div className="mt-32 mb-32 container mx-auto">
      <h1 className="text-center text-5xl font-bold mb-16 text-[#59CE8F]">
        Jobs
      </h1>
      <Tabs className='mx-auto'>
        <TabList className=' border-[#59CE8F] rounded-lg text-[#59CE8F]'>
          <Tab>Web development</Tab>
          <Tab>Digital marketing</Tab>
          <Tab>Graphics design</Tab>
        </TabList>

        <TabPanel className='mt-20 '>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {
              webDevJobs.map((job) => (
                
                <Job key={job._id} job={job}></Job>
              ))
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
              digiMarketingJobs.map((job) => (
                
                <Job key={job._id} job={job}></Job>
              ))
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
              graphDesignJobs.map((job) => (
                
                <Job key={job._id} job={job}></Job>
              ))
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Jobs;
