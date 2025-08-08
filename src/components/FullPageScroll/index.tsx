"use client";
import React, { useState, useEffect, useRef, useCallback, ReactNode } from 'react';
import DotNavigation from '@/components/FullPageScroll/DotNavigation';

interface FullPageScrollProps {
  children: ReactNode;
}

const FullPageScroll = ({ children }: FullPageScrollProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pagesRef = useRef<HTMLDivElement[]>([]);
  const touchStartY = useRef<number>(0);
  const touchEndY = useRef<number>(0);

  const totalPages = React.Children.count(children);

  // 스크롤 방향을 Header에 알리는 함수
  const notifyScrollDirection = useCallback((direction: 'up' | 'down') => {
    const event = new CustomEvent('fullpage-scroll-direction', {
      detail: { direction }
    });
    window.dispatchEvent(event);
  }, []);

  // 페이지 변경을 Header에 알리는 함수
  const notifyPageChange = useCallback((page: number) => {
    const event = new CustomEvent('fullpage-page-change', {
      detail: { page }
    });
    window.dispatchEvent(event);
  }, []);

  // 페이지로 스크롤하는 함수
  const scrollToPage = useCallback((pageIndex: number) => {
    if (pageIndex < 0 || pageIndex >= totalPages || isScrolling) return;
    
    setIsScrolling(true);
    setCurrentPage(pageIndex);
    
    // 페이지 변경 알림
    notifyPageChange(pageIndex);
    
    const targetPage = pagesRef.current[pageIndex];
    if (targetPage && containerRef.current) {
      targetPage.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }

    // 스크롤 애니메이션 완료 후 isScrolling 해제
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  }, [totalPages, isScrolling, notifyPageChange]);

  // 휠 이벤트 핸들러 (데스크톱)
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    if (isScrolling) return;

    if (e.deltaY > 0) {
      // 아래로 스크롤 (다음 페이지)
      notifyScrollDirection('down');
      if (currentPage === totalPages - 1) {
        scrollToPage(0); // 마지막 페이지에서 첫 페이지로
      } else {
        scrollToPage(currentPage + 1);
      }
    } else {
      // 위로 스크롤 (이전 페이지)
      notifyScrollDirection('up');
      if (currentPage === 0) {
        scrollToPage(totalPages - 1); // 첫 페이지에서 마지막 페이지로
      } else {
        scrollToPage(currentPage - 1);
      }
    }
  }, [isScrolling, currentPage, totalPages, scrollToPage, notifyScrollDirection]);

  // 터치 이벤트 핸들러 (모바일)
  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (isScrolling) return;
    
    touchEndY.current = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY.current;
    const minSwipeDistance = 80; // 모바일에서 더 긴 스와이프 거리 요구

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        // 위로 스와이프 (다음 페이지)
        notifyScrollDirection('down');
        scrollToPage(currentPage + 1 < totalPages ? currentPage + 1 : 0);
      } else {
        // 아래로 스와이프 (이전 페이지)
        notifyScrollDirection('up');
        scrollToPage(currentPage - 1 >= 0 ? currentPage - 1 : totalPages - 1);
      }
    }
  }, [isScrolling, currentPage, totalPages, scrollToPage, notifyScrollDirection]);

  // 키보드 이벤트 핸들러
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isScrolling) return;

    switch (e.key) {
      case 'ArrowDown':
      case 'PageDown':
        e.preventDefault();
        notifyScrollDirection('down');
        scrollToPage(currentPage + 1 < totalPages ? currentPage + 1 : 0);
        break;
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        notifyScrollDirection('up');
        scrollToPage(currentPage - 1 >= 0 ? currentPage - 1 : totalPages - 1);
        break;
      case 'Home':
        e.preventDefault();
        scrollToPage(0);
        break;
      case 'End':
        e.preventDefault();
        scrollToPage(totalPages - 1);
        break;
    }
  }, [isScrolling, currentPage, totalPages, scrollToPage, notifyScrollDirection]);

  // 스크롤 위치 감지
  const handleScroll = useCallback(() => {
    if (isScrolling) return;
    
    const container = containerRef.current;
    if (!container) return;

    const scrollTop = container.scrollTop;
    const pageHeight = window.innerHeight;
    const newCurrentPage = Math.round(scrollTop / pageHeight);
    
    if (newCurrentPage !== currentPage && newCurrentPage >= 0 && newCurrentPage < totalPages) {
      setCurrentPage(newCurrentPage);
    }
  }, [currentPage, isScrolling, totalPages]);

  // 외부에서 페이지 이동을 요청하는 이벤트 핸들러
  const handleGoToPage = useCallback((event: CustomEvent) => {
    const { page } = event.detail;
    if (typeof page === 'number' && page >= 0 && page < totalPages) {
      scrollToPage(page);
    }
  }, [totalPages, scrollToPage]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 이벤트 리스너 추가
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    container.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('fullpage-go-to', handleGoToPage as EventListener);

    // Back/Forward Cache 지원을 위한 pageshow/pagehide 이벤트
    const handlePageShow = () => {
      // 페이지가 캐시에서 복원될 때 현재 상태 재설정
      setIsScrolling(false);
    };

    const handlePageHide = () => {
      // 페이지가 캐시될 때 진행 중인 애니메이션 정리
      setIsScrolling(false);
    };

    window.addEventListener('pageshow', handlePageShow);
    window.addEventListener('pagehide', handlePageHide);

    return () => {
      // 이벤트 리스너 제거
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('fullpage-go-to', handleGoToPage as EventListener);
      window.removeEventListener('pageshow', handlePageShow);
      window.removeEventListener('pagehide', handlePageHide);
    };
  }, [currentPage, isScrolling, totalPages, handleWheel, handleTouchStart, handleTouchEnd, handleScroll, handleKeyDown, handleGoToPage]);

  return (
    <div 
      ref={containerRef}
      className="fullpage-container h-screen overflow-y-auto scroll-smooth scrollbar-hide"
      style={{ scrollSnapType: 'y mandatory' }}
    >
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) pagesRef.current[index] = el;
          }}
          className="fullpage-section h-screen w-full flex-shrink-0"
          style={{ 
            scrollSnapAlign: 'start',
            height: '100vh',
            minHeight: '100vh',
            maxHeight: '100vh'
          }}
        >
          {child}
        </div>
      ))}
      
      {/* 페이지 인디케이터 */}
      {/* 닷 네비게이션 - 모바일에서 더 큰 터치 영역 */}
      <DotNavigation
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={scrollToPage}
      />
    </div>
  );
};

export default FullPageScroll;