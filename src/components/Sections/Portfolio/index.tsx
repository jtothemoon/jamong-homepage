"use client";

import SinglePortfolio from "./SinglePortfolio";
import portfolioData from "./PortfolioData";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-800 dark:via-gray-900/50 dark:to-gray-800 overflow-visible relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container w-full mx-auto px-4 py-4 overflow-visible relative z-10">
        <div className="text-center space-y-1 mb-6 lg:mb-8">
          <Badge variant="outline" className="mx-auto text-xs dark:text-white">
            Portfolio
          </Badge>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-black dark:text-white">
            주요 프로젝트
            <span className="block text-primary">& 성공 사례</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto dark:text-gray-400">
            공공기관과 기업을 위한 실무적 IT 솔루션 구축 사례
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
              dragFree: false,
              skipSnaps: false,
            }}
            className="w-full py-8 [&_.embla]:overflow-visible [&_.embla__container]:overflow-visible"
          >
            <CarouselContent className="-ml-4 md:-ml-6 overflow-visible">
              {portfolioData.map((portfolio) => (
                <CarouselItem key={portfolio.id} className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <SinglePortfolio portfolio={portfolio} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Enhanced navigation */}
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-10 bg-white/80 dark:bg-gray-dark/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-dark hover:text-primary dark:hover:text-primary shadow-md hover:shadow-lg transition-all duration-200" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-10 bg-white/80 dark:bg-gray-dark/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-dark hover:text-primary dark:hover:text-primary shadow-md hover:shadow-lg transition-all duration-200" />
          </Carousel>

          {/* Mobile swipe hint */}
          <div className="text-center mt-2 md:hidden dark:text-gray-400">
            <p className="text-xs text-muted-foreground dark:text-body-color-dark">👈 Swipe to see more projects • Auto-playing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;