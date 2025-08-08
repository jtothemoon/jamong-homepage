"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetHeader } from "@/components/ui/sheet";
import { Menu, ChevronDown, Globe, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  // submenu handler for mobile
  const [openIndex, setOpenIndex] = useState(-1);
  const [mounted, setMounted] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
    
    // FullPageScroll에서 발생하는 커스텀 이벤트 리스너
    const handleScrollDirection = (event: CustomEvent) => {
      const { direction } = event.detail;
      
      // 모바일에서만 헤더 숨김/표시
      if (window.innerWidth < 768) { // md 브레이크포인트
        // 스크롤 방향에 따라 다음 페이지 예측
        let nextPage = currentPage;
        if (direction === 'down') {
          nextPage = currentPage + 1;
        } else {
          nextPage = currentPage - 1;
        }
        
        // Hero 페이지로 가는 경우에만 항상 헤더 표시
        if (nextPage === 0) {
          // Hero로 가는 경우 항상 헤더 표시
          setIsHeaderVisible(true);
        } else {
          // 다른 모든 페이지에서는 스크롤 방향에 따라 헤더 숨김/표시
          setIsHeaderVisible(direction !== 'down');
        }
      }
    };

    // 현재 페이지 변경 이벤트 리스너
    const handlePageChange = (event: CustomEvent) => {
      const { page } = event.detail;
      setCurrentPage(page);
      
      // 첫 페이지(hero)로 돌아오면 헤더 항상 표시
      if (page === 0) {
        setIsHeaderVisible(true);
      }
    };

    // 커스텀 이벤트 리스너 등록
    window.addEventListener('fullpage-scroll-direction', handleScrollDirection as EventListener);
    window.addEventListener('fullpage-page-change', handlePageChange as EventListener);
    
    return () => {
      window.removeEventListener('fullpage-scroll-direction', handleScrollDirection as EventListener);
      window.removeEventListener('fullpage-page-change', handlePageChange as EventListener);
    };
  }, [currentPage]);

  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  // 모바일에서 스크롤 방향에 따른 헤더 visibility
  const getHeaderClasses = () => {
    const baseClasses = `header fixed top-0 left-0 z-[100] w-full backdrop-blur-sm transition-transform duration-300 ease-in-out ${
      mounted 
        ? "bg-white/80 dark:bg-gray-dark/80" 
        : "bg-white/80"
    }`;
    
    // 모바일에서만 스크롤 방향에 따라 헤더 숨김/표시
    if (!isHeaderVisible) {
      return `${baseClasses} -translate-y-full md:translate-y-0`;
    }
    
    return `${baseClasses} translate-y-0`;
  };

  return (
    <>
      <header 
        className={getHeaderClasses()}
        suppressHydrationWarning
      >
        <div className="container">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => {
                  if (usePathName === '/') {
                    // 메인 페이지에서는 첫 번째 섹션으로 이동
                    const event = new CustomEvent('fullpage-go-to', { 
                      detail: { page: 0 } 
                    });
                    window.dispatchEvent(event);
                  } else {
                    // 다른 페이지에서는 메인 페이지로 이동
                    window.location.href = '/';
                  }
                }}
                className="block"
                aria-label="홈으로 이동"
              >
                <Image
                  src="/images/logo/logo-2.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="h-8 w-auto dark:hidden"
                />
                <Image
                  src="/images/logo/logo.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden h-8 w-auto dark:block"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu viewport={false} className="hidden lg:flex dark:text-white">
              <NavigationMenuList className="space-x-12">
                {menuData.map((menuItem, index) => (
                  <NavigationMenuItem key={index}>
                    {menuItem.path ? (
                      <NavigationMenuLink asChild>
                        {menuItem.path === "/" ? (
                          <button
                            onClick={() => {
                              if (usePathName === '/') {
                                // 메인 페이지에서는 첫 번째 섹션으로 이동
                                const event = new CustomEvent('fullpage-go-to', { 
                                  detail: { page: 0 } 
                                });
                                window.dispatchEvent(event);
                              } else {
                                // 다른 페이지에서는 메인 페이지로 이동
                                window.location.href = '/';
                              }
                            }}
                            className={`block py-6 text-base text-foreground ${
                              usePathName === menuItem.path
                                ? "font-semibold"
                                : "hover:opacity-70"
                            }`}
                          >
                            {t(menuItem.title)}
                          </button>
                        ) : (
                          <Link
                            href={menuItem.path}
                            className={`block py-6 text-base text-foreground ${
                              usePathName === menuItem.path
                                ? "font-semibold"
                                : "hover:opacity-70"
                            }`}
                          >
                            {t(menuItem.title)}
                          </Link>
                        )}
                      </NavigationMenuLink>
                    ) : (
                      <>
                        <NavigationMenuTrigger className="py-6 text-base bg-transparent border-none shadow-none hover:bg-transparent data-[state=open]:bg-transparent text-foreground">
                          {t(menuItem.title)}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[250px] gap-3 p-4 bg-white dark:bg-gray-dark">
                            {menuItem.submenu?.map((submenuItem, index) => (
                              <li key={index}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={submenuItem.path || ""}
                                    className="block rounded-sm py-2.5 text-sm text-foreground hover:opacity-70"
                                  >
                                    {t(submenuItem.title)}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right side buttons */}
            <div className="flex items-center gap-2">
              {/* Language Toggle */}
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden md:inline-flex text-gray-700 dark:text-gray-300 border-gray-200/60 dark:border-gray-700/60 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 hover:text-primary dark:hover:text-primary hover:border-primary/50 transition-all duration-200 rounded-lg backdrop-blur-sm"
                onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
              >
                <div className="transition-transform duration-200 hover:scale-110">
                  <Globe className="h-4 w-4" />
                </div>
                <span className="ml-2 font-medium">{language === 'ko' ? '한국어' : 'English'}</span>
              </Button>

              <div className="hidden md:block w-px h-6 bg-stroke dark:bg-strokedark"></div>

              <ThemeToggler />

              <div className="hidden md:block w-px h-6 bg-stroke dark:bg-strokedark"></div>

              {/* Contact Button */}
              <Button asChild className="hidden md:inline-flex bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 rounded-lg font-medium">
                <Link href="/contact">
                  <div className="transition-transform duration-200 hover:scale-110">
                    <Phone className="h-4 w-4 mr-2" />
                  </div>
                  {t('nav.contact_us')}
                </Link>
              </Button>
              
              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="text-gray-700 dark:text-gray-300 border-gray-200/60 dark:border-gray-700/60 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 hover:text-primary dark:hover:text-primary hover:border-primary/50 transition-all duration-200 rounded-lg"
                    aria-label="메뉴 열기"
                  >
                    <div className="transition-transform duration-200 hover:scale-110">
                      <Menu className="h-4 w-4" />
                    </div>
                    <span className="sr-only">메뉴 열기</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[250px] bg-white dark:bg-gray-dark border-l border-stroke dark:text-white dark:border-strokedark z-[110]">
                  <SheetHeader className="px-4 pt-4">
                    <SheetTitle>{t('common.navigation_menu')}</SheetTitle>
                    <SheetDescription>
                      {t('common.browse_description')}
                    </SheetDescription>
                  </SheetHeader>
                  <nav className="mt-8 px-4">
                    {/* Mobile Language Toggle */}
                    <div className="mb-6 pb-4 border-b border-stroke dark:border-strokedark">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full dark:text-white border-stroke dark:border-strokedark"
                        onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
                      >
                        <Globe className="h-4 w-4" />
                        <span className="ml-1">{language === 'ko' ? '한국어' : 'English'}</span>
                      </Button>
                    </div>
                    <ul className="space-y-4">
                      {menuData.map((menuItem, index) => (
                        <li key={index} className="group relative">
                          {menuItem.path ? (
                            menuItem.path === "/" ? (
                              <button
                                onClick={() => {
                                  if (usePathName === '/') {
                                    // 메인 페이지에서는 첫 번째 섹션으로 이동
                                    const event = new CustomEvent('fullpage-go-to', { 
                                      detail: { page: 0 } 
                                    });
                                    window.dispatchEvent(event);
                                  } else {
                                    // 다른 페이지에서는 메인 페이지로 이동
                                    window.location.href = '/';
                                  }
                                }}
                                className={`block py-2 px-4 text-base text-foreground ${
                                  usePathName === menuItem.path
                                    ? "font-semibold"
                                    : "hover:opacity-70"
                                }`}
                              >
                                {t(menuItem.title)}
                              </button>
                            ) : (
                              <Link
                                href={menuItem.path}
                                className={`block py-2 px-4 text-base text-foreground ${
                                  usePathName === menuItem.path
                                    ? "font-semibold"
                                    : "hover:opacity-70"
                                }`}
                              >
                                {t(menuItem.title)}
                              </Link>
                            )
                          ) : (
                            <>
                              <button
                                onClick={() => handleSubmenu(index)}
                                className="flex w-full items-center justify-between py-3 px-4 text-base text-foreground hover:opacity-70"
                              >
                                {t(menuItem.title)}
                                <ChevronDown className="ml-2 h-5 w-5" />
                              </button>
                              <div
                                className={`ml-8 space-y-2 ${
                                  openIndex === index ? "block" : "hidden"
                                }`}
                              >
                                {menuItem.submenu?.map((submenuItem, index) => (
                                  <Link
                                    href={submenuItem.path || ""}
                                    key={index}
                                    className="block py-2 px-4 text-sm text-foreground hover:opacity-70"
                                  >
                                    {t(submenuItem.title)}
                                  </Link>
                                ))}
                              </div>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
