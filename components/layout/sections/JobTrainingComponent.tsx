import { Code, Clipboard, User, Award, BarChart, CheckCircle, Phone, Users, Briefcase } from 'lucide-react';

const JobTrainingComponent = () => {
  return (
    <div className="bg-white text-black p-8 space-y-6">
      <h2 className="text-3xl font-semibold text-center">Get job-ready with practical training designed for freshers.</h2>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Code className="text-blue-500" size={24} />
          <p className="text-lg">Resume Building Sessions</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Clipboard className="text-green-500" size={24} />
          <p className="text-lg">Mock Interviews</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <User className="text-red-500" size={24} />
          <p className="text-lg">Portfolio Building Sessions</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Award className="text-yellow-500" size={24} />
          <p className="text-lg">LinkedIn Profile Building</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <BarChart className="text-purple-500" size={24} />
          <p className="text-lg">Aptitude Training</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <CheckCircle className="text-teal-500" size={24} />
          <p className="text-lg">Reasoning Practice</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Phone className="text-orange-500" size={24} />
          <p className="text-lg">Communication & Soft Skills Training</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Users className="text-pink-500" size={24} />
          <p className="text-lg">Career Guidance from Experts</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Briefcase className="text-indigo-500" size={24} />
          <p className="text-lg">Job Assistance & Placement Support</p>
        </div>
      </div>
    </div>
  );
};

export default JobTrainingComponent;
