import React from 'react';
import { Camera } from 'lucide-react';

const Profile = () => {
  return (
    <div className="h-full flex flex-col bg-popx-bg">
      <div className="bg-white px-4 py-6 shadow-sm border-b border-gray-100">
        <h1 className="text-[18px] font-medium text-popx-text">Account Settings</h1>
      </div>

      <div className="p-6 pt-8">
        <div className="flex gap-5 mb-8">
          <div className="relative">
            <div className="w-[76px] h-[76px] rounded-full overflow-hidden bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200" 
                alt="Profile Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-popx-primary rounded-full flex items-center justify-center border-2 border-popx-bg translate-x-1 translate-y-1 cursor-pointer">
              <Camera className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="pt-2">
            <h2 className="text-[15px] font-semibold text-popx-text leading-tight">Marry Doe</h2>
            <p className="text-[14px] text-popx-text mt-1">Marry@Gmail.Com</p>
          </div>
        </div>

        <div>
          <p className="text-[14px] text-popx-text/80 leading-[1.6]">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
      
      {/* Dashed line at bottom as in design */}
      <div className="mt-auto px-6 pb-8">
         <div className="border-t border-dashed border-gray-300 w-full mb-12"></div>
      </div>
    </div>
  );
};

export default Profile;
