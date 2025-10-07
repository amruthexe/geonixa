import { Book, XCircle, GraduationCap, Briefcase, Monitor } from 'lucide-react';

const SkillTrainingComponent = () => {
  return (
    <div className="bg-white pt-10  text-black pb-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Get job-ready with practical training designed for freshers.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* First Card */}
        <div className="flex items-center space-x-4 p-4 rounded-xl bg-blue-100">
          <Book className="text-blue-500 bg-blue-200 rounded-full p-3" size={60} />
          <p className="font-semibold">Resume Building Sessions</p>
        </div>

        {/* Second Card */}
        <div className="flex items-center space-x-4 p-4 rounded-xl bg-red-100">
          <XCircle className="text-red-500 bg-red-200 rounded-full p-3" size={60} />
          <p className="font-semibold">Mock Interviews</p>
        </div>

        {/* Third Card */}
        <div className="flex items-center space-x-4 p-4 rounded-xl bg-purple-100">
          <GraduationCap className="text-purple-500 bg-purple-200 rounded-full p-3" size={60} />
          <p className="font-semibold">Portfolio Building Sessions</p>
        </div>

        {/* Fourth Card */}
        <div className="flex items-center space-x-4 p-4 rounded-xl bg-orange-100">
          <Monitor className="text-orange-500 bg-orange-200 rounded-full p-3" size={60} />
          <p className="font-semibold">LinkedIn Profile Building</p>
        </div>

        {/* Fifth Card */}
        <div className="flex items-center space-x-4 p-4 rounded-xl bg-green-100">
          <Book className="text-green-500 bg-green-200 rounded-full p-3" size={60} />
          <p className="font-semibold">Aptitude Training</p>
        </div>

        {/* Sixth Card */}
        <div className="flex items-center space-x-4 p-4 rounded-xl bg-teal-100">
          <XCircle className="text-teal-500 bg-teal-200 rounded-full p-3" size={60} />
          <p className="font-semibold">Reasoning Practice</p>
        </div>

        {/* Seventh Card */}
        <div className="flex items-center space-x-4 p-4 rounded-xl bg-yellow-100">
          <GraduationCap className="text-yellow-500 bg-yellow-200 rounded-full p-3" size={60} />
          <p className="font-semibold">Communication & Soft Skills Training</p>
        </div>

        {/* Eighth Card */}
        <div className="flex items-center space-x-4 p-4 rounded-xl bg-pink-100">
          <Briefcase className="text-pink-500 bg-pink-200 rounded-full p-3" size={60} />
          <p className="font-semibold">Career Guidance from Experts</p>
        </div>

        {/* Ninth Card */}
        <div className="flex items-center space-x-4 p-4 rounded-xl bg-indigo-100">
          <Monitor className="text-indigo-500 bg-indigo-200 rounded-full p-3" size={60} />
          <p className="font-semibold">Job Assistance & Placement Support</p>
        </div>
      </div>
    </div>
  );
};

export default SkillTrainingComponent;
