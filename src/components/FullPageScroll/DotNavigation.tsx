"use client";

import { useEffect, useState } from "react";

interface DotNavigationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageIndex: number) => void;
}

const DotNavigation = ({ totalPages, currentPage, onPageChange }: DotNavigationProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* 데스크톱 닷 네비게이션 */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-[70] hidden lg:block">
        <div className="flex flex-col space-y-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => onPageChange(index)}
              className={`group relative w-3 h-3 rounded-full transition-all duration-300 ease-in-out border ${
                currentPage === index
                  ? "bg-primary scale-125"
                  : "bg-muted hover:bg-muted-foreground/20 scale-100"
              }`}
              aria-label={`Go to page ${index + 1}`}
            >
              {/* 호버 시 툴팁 */}
              <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-popover text-popover-foreground text-xs px-2 py-1 rounded border shadow-md whitespace-nowrap">
                  Page {index + 1}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 모바일 닷 네비게이션 - 하단 중앙 */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[70] lg:hidden">
        <div className="flex space-x-3 bg-background/80 backdrop-blur-sm rounded-full px-4 py-3 border shadow-lg">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => onPageChange(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out ${
                currentPage === index
                  ? "bg-primary scale-125"
                  : "bg-muted hover:bg-muted-foreground/20 scale-100"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DotNavigation; 