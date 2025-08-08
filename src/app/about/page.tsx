import ScrollLayout from "@/components/Common/ScrollLayout";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Page | 자몽커뮤니케이션즈 회사소개",
  description: "공공기관과 기업을 위한 IT 솔루션 전문 기업 자몽커뮤니케이션즈 소개",
};

const AboutPage = () => {
  return (
    <ScrollLayout>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  자몽커뮤니케이션즈
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mr-10 mb-5 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-full w-full object-cover object-center"
                          >
                            <circle cx="20" cy="20" r="20" fill="#4A6CF7" />
                            <path
                              d="M20 12C16.6863 12 14 14.6863 14 18C14 21.3137 16.6863 24 20 24C23.3137 24 26 21.3137 26 18C26 14.6863 23.3137 12 20 12Z"
                              fill="white"
                            />
                            <path
                              d="M32 30C32 24.4772 27.5228 20 22 20H18C12.4772 20 8 24.4772 8 30V32H32V30Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-body-color dark:text-white">
                          By{" "}
                          <a href="#" rel="author" className="hover:text-primary">
                            자몽 경영진
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            className="fill-current"
                          >
                            <path d="M3.89531 2.67814C3.89531 2.67814 3.89531 2.67814 3.89531 2.67814C3.89531 2.67814 3.89531 2.67814 3.89531 2.67814Z" />
                            <path d="M12.1406 1.17188H3.10156C2.64219 1.17188 2.25781 1.55625 2.25781 2.01562V13.9844C2.25781 14.4438 2.64219 14.8281 3.10156 14.8281H12.1406C12.6 14.8281 12.9844 14.4438 12.9844 13.9844V2.01562C12.9844 1.55625 12.6 1.17188 12.1406 1.17188ZM11.8125 13.6562H3.42969V2.34375H11.8125V13.6562Z" />
                            <path d="M4.21875 4.5H11.0156C11.3594 4.5 11.6406 4.21875 11.6406 3.875C11.6406 3.53125 11.3594 3.25 11.0156 3.25H4.21875C3.875 3.25 3.59375 3.53125 3.59375 3.875C3.59375 4.21875 3.875 4.5 4.21875 4.5Z" />
                            <path d="M4.21875 7H11.0156C11.3594 7 11.6406 6.71875 11.6406 6.375C11.6406 6.03125 11.3594 5.75 11.0156 5.75H4.21875C3.875 5.75 3.59375 6.03125 3.59375 6.375C3.59375 6.71875 3.875 7 4.21875 7Z" />
                            <path d="M4.21875 9.5H11.0156C11.3594 9.5 11.6406 9.21875 11.6406 8.875C11.6406 8.53125 11.3594 8.25 11.0156 8.25H4.21875C3.875 8.25 3.59375 8.53125 3.59375 8.875C3.59375 9.21875 3.875 9.5 4.21875 9.5Z" />
                            <path d="M7.625 12H4.21875C3.875 12 3.59375 12.2812 3.59375 12.625C3.59375 12.9688 3.875 13.25 4.21875 13.25H7.625C7.96875 13.25 8.25 12.9688 8.25 12.625C8.25 12.2812 7.96875 12 7.625 12Z" />
                          </svg>
                        </span>
                        2024년 1월 15일
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    자몽커뮤니케이션즈는 공공기관과 기업을 위한 IT 개발 전문 파트너입니다.<br />
                    제안부터 개발, 유지보수까지 종합적인 디지털 솔루션을 제공하며,<br />
                    고객의 실제 업무 환경을 정확히 이해한 실무적 접근으로<br />
                    성공적인 프로젝트 수행을 보장합니다.
                  </p>
                  
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/about/about-image.svg"
                        alt="about image"
                        className="h-full w-full object-cover object-center dark:hidden"
                        fill
                        priority
                      />
                      <Image
                        src="/images/about/about-image-dark.svg"
                        alt="about image"
                        className="hidden h-full w-full object-cover object-center dark:block"
                        fill
                        priority
                      />
                    </div>
                  </div>
                  
                  <h2 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    우리의 비전
                  </h2>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    공공서비스의 디지털 전환을 선도하는 것이 저희의 비전입니다.<br />
                    공공기관의 업무 특성을 깊이 이해하고, 시민 편의성 향상과<br />
                    행정 효율성 증대를 위한 맞춤형 IT 솔루션을 제공하여<br />
                    더 나은 공공서비스 구현에 기여합니다.
                  </p>
                  
                  <h2 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    핵심 가치
                  </h2>
                  
                  <div className="mb-10">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-dark">
                        <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">실무적 솔루션</h3>
                        <p className="text-base text-body-color dark:text-body-color-dark">
                          고객의 실제 업무 환경을 정확히 분석하여<br />
                          현장에서 바로 활용 가능한 실무적 솔루션을 제공합니다.
                        </p>
                      </div>
                      <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-dark">
                        <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">체계적 관리</h3>
                        <p className="text-base text-body-color dark:text-body-color-dark">
                          제안 기획부터 개발, 유지보수까지<br />
                          단계별 체계적 관리를 통한 프로젝트 성공 보장.
                        </p>
                      </div>
                      <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-dark">
                        <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">전문 기술력</h3>
                        <p className="text-base text-body-color dark:text-body-color-dark">
                          숙련된 기술진의 전문 역량과<br />
                          축적된 노하우로 안정적인 서비스 제공.
                        </p>
                      </div>
                      <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-dark">
                        <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">지속적 파트너십</h3>
                        <p className="text-base text-body-color dark:text-body-color-dark">
                          일회성 개발이 아닌 지속적인 기술 지원과<br />
                          운영 파트너십으로 장기적 성공 지원.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/about/about-image-2.svg"
                        alt="about image 2"
                        className="h-full w-full object-cover object-center dark:hidden"
                        fill
                        priority
                      />
                      <Image
                        src="/images/about/about-image-2-dark.svg"
                        alt="about image 2"
                        className="hidden h-full w-full object-cover object-center dark:block"
                        fill
                        priority
                      />
                    </div>
                  </div>

                  <h2 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    주요 서비스
                  </h2>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    공공기관과 기업의 디지털 전환을 위한 통합적 IT 서비스를 제공합니다:
                  </p>
                  
                  <ul className="mb-10 list-inside list-disc text-body-color dark:text-body-color-dark">
                    <li className="mb-2">UI/UX 디자인 - 사용자 중심의 인터페이스 설계</li>
                    <li className="mb-2">시스템 개발 - 웹/모바일 애플리케이션 구축</li>
                    <li className="mb-2">제안 기획 - 프로젝트 기획 및 컨설팅</li>
                    <li className="mb-2">운영 유지보수 - 지속적 기술 지원 및 관리</li>
                    <li className="mb-2">원격 검침 시스템 - 공공기관 전용 솔루션</li>
                    <li className="mb-2">기술 지원 - 전문 기술진의 맞춤형 지원</li>
                  </ul>

                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    자몽커뮤니케이션즈와 함께 공공서비스의 디지털 전환을 시작하세요.<br />
                    고객의 성공적인 디지털 혁신이 곧 저희의 성공입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollLayout>
  );
};

export default AboutPage;