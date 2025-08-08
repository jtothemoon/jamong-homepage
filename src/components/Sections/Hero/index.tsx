import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroAnimations from "./HeroAnimations";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 w-full h-screen flex items-center justify-center"
        role="banner"
        aria-label="메인 히어로 섹션"
      >
        <HeroAnimations />
        
        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-6 text-3xl font-semibold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-[1.2] lg:text-6xl lg:leading-[1.2] tracking-tight">
                  공공기관과 기업을 위한<br />디지털 솔루션 파트너
                </h1>
                <p className="mb-12 text-base font-normal leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90">
                  제안부터 개발, 유지보수까지 - 공공서비스의 디지털 전환을<br />함께하는 자몽커뮤니케이션즈
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button asChild className="rounded-lg bg-primary px-8 py-4 text-base font-medium text-white duration-300 ease-in-out hover:bg-primary/90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    <Link href="/contact">
                      프로젝트 문의
                    </Link>
                  </Button>
                  <Button asChild className="rounded-lg bg-transparent border-2 border-gray-300 dark:border-gray-600 px-8 py-4 text-base font-medium text-gray-700 dark:text-gray-300 duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-800">
                    <Link href="/portfolio">
                      포트폴리오 보기
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;