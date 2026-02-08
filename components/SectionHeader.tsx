
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-24 text-center relative px-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-500/5 blur-[100px] pointer-events-none"></div>
      <h2 className="text-5xl md:text-7xl font-display font-black mb-8 tracking-tighter dark:text-white uppercase leading-none">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium leading-relaxed tracking-tight">
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-6 mt-12">
        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-slate-200 dark:to-dark-700 rounded-full"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-primary-500 shadow-[0_0_15px_rgba(14,165,233,0.6)] animate-pulse"></div>
        <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-slate-200 dark:to-dark-700 rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionHeader;
