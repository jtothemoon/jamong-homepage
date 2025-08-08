import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="h-screen flex w-full items-center justify-center bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-800/50 dark:to-gray-dark py-16 lg:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container w-full px-6 md:px-8 lg:px-12 mt-16 md:mt-0 relative z-10">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0">
                <Image
                  src="/images/about/about-image-2.svg"
                  alt="about image"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none transition-transform duration-300 hover:scale-105"
                />
                <Image
                  src="/images/about/about-image-2-dark.svg"
                  alt="about image"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="hidden drop-shadow-three dark:block dark:drop-shadow-none transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    전문 기술 리더십
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    다년간의 공공기관 프로젝트 경험을 바탕으로<br />고객의 실무 환경을 정확히 이해하고<br />최적화된 솔루션을 제공합니다.
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    체계적 프로젝트 관리
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    제안 기획부터 개발, 유지보수까지<br />단계별 체계적 관리를 통해<br />프로젝트 성공을 보장합니다.
                  </p>
                </div>
                <div className="mb-1">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    신뢰할 수 있는 파트너
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    공공기관과 기업의 디지털 전환을 성공적으로 지원한<br />검증된 실적과 노하우로<br />지속 가능한 IT 서비스를 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;