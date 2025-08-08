import ScrollLayout from "@/components/Common/ScrollLayout";
import SinglePortfolio from "@/components/Sections/Portfolio/SinglePortfolio";
import portfolioData from "@/components/Sections/Portfolio/PortfolioData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Page | 자뫽커뮤니케이션즈 프로젝트 사례",
  description: "공공기관과 기업을 위한 IT 솔루션 구축 사례와 성공 스토리",
};

const PortfolioPage = () => {
  return (
    <ScrollLayout>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div className="text-center mb-12">
                <h1 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  주요 프로젝트 사례
                </h1>
                <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                  공공기관과 기업을 위한 IT 솔루션 구축 사례를 통해<br />
                  자몽커뮤니케이션즈의 전문성과 실무 역량을 확인해보세요.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            {portfolioData.map((portfolio) => (
              <div key={portfolio.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-10">
                  <SinglePortfolio portfolio={portfolio} />
                </div>
              </div>
            ))}
          </div>

          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div className="text-center mt-12">
                <h2 className="mb-8 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl sm:leading-tight">
                  자몽의 프로젝트 프로세스
                </h2>
                
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-dark">
                    <div className="mb-4 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                        1
                      </div>
                    </div>
                    <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                      제안 기획
                    </h3>
                    <p className="text-base text-body-color dark:text-body-color-dark">
                      고객의 업무 환경을 정확히 분석하여<br />
                      최적의 IT 솔루션을 제안합니다.
                    </p>
                  </div>
                  
                  <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-dark">
                    <div className="mb-4 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                        2
                      </div>
                    </div>
                    <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                      시스템 설계
                    </h3>
                    <p className="text-base text-body-color dark:text-body-color-dark">
                      UI/UX 디자인과 시스템 아키텍처를<br />
                      체계적으로 설계합니다.
                    </p>
                  </div>
                  
                  <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-dark">
                    <div className="mb-4 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                        3
                      </div>
                    </div>
                    <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                      개발 및 구현
                    </h3>
                    <p className="text-base text-body-color dark:text-body-color-dark">
                      안정적이고 확장 가능한<br />
                      시스템을 개발합니다.
                    </p>
                  </div>
                  
                  <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-dark">
                    <div className="mb-4 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                        4
                      </div>
                    </div>
                    <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                      운영 유지보수
                    </h3>
                    <p className="text-base text-body-color dark:text-body-color-dark">
                      지속적인 기술 지원과<br />
                      시스템 운영 관리를 제공합니다.
                    </p>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h2 className="mb-8 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl sm:leading-tight">
                    기술 영역
                  </h2>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {[
                      "UI/UX 디자인", "웹 개발", "모바일 앱", "DB 구축", "원격검침", 
                      "시스템 통합", "클라우드", "인프라 구축", "보안 솔루션", "데이터 분석"
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="inline-block rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollLayout>
  );
};

export default PortfolioPage;