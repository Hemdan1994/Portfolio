
import React from 'react';
import { cn } from '@/lib/utils';

const ProfileImage = ({ className }: { className?: string }) => {
  const profileImageUrl = new URL('/../src/assets/images/personal.jpg', import.meta.url).href;
  return (
    <div className={cn("relative group", className)}>
      <div className="relative rounded-2xl overflow-hidden bg-highlight/20 z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-highlight/20 to-transparent group-hover:opacity-0 transition-opacity duration-300 z-20"></div>
        <img 
          src={profileImageUrl} 
          alt="Profile" 
          className="w-full aspect-square object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-300 hover:scale-105"
        />
      </div>
      <div className="absolute -inset-4 border-2 border-highlight rounded-2xl z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
    </div>
  );
};

export default ProfileImage;
