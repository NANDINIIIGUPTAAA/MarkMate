
import React from 'react';

const TestimonialCard = ({ quote, author, position }: { quote: string; author: string; position: string }) => {
  return (
    <div className="bg-dark1 text-white p-6 rounded-xl">
      <p className="mb-4">"{quote}"</p>
      <p className="font-semibold">{author}</p>
      <p className="text-sm text-gray-400">{position}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="py-12 px-6 md:px-12">
      <div className="feature-badge mb-2">Testimonials</div>
      <h2 className="text-2xl font-bold mb-6">
        Explore How the Ecosystem of Our Platform is Changing Teacher's Workflow
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <TestimonialCard 
          quote="This is validated free timetable creation tool. I was spending countless hours creating grading and I was free helping students grade. Saved around 10hrs a week easily."
          author="Emma Thompson"
          position="High School Teacher"
        />
        
        <TestimonialCard 
          quote="Managing hundreds of test papers every semester was overwhelming. The AI automated feedback streamlined. Students get better feedback and I can finally have time for myself."
          author="Richard Werner"
          position="University Professor"
        />
        
        <TestimonialCard 
          quote="We don't have huge budgets or spare staff - but the school district needed better ways to ensure high-quality education with minimal teacher burnout."
          author="Scott Jensen"
          position="School Administrator"
        />
      </div>
    </div>
  );
};

export default Testimonials;
