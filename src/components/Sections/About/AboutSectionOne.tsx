import Image from "next/image";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AboutSectionOne = () => {
  const List = ({ text }: { text: string }) => (
    <div className="mb-1 flex items-center sm:mb-5 group">
      <Badge variant="secondary" className="mr-2 flex h-[20px] w-[20px] items-center justify-center rounded-lg p-0 bg-gradient-to-br from-primary/20 to-primary/10 text-primary border border-primary/20 transition-all duration-200 group-hover:from-primary/30 group-hover:to-primary/20 sm:mr-4 sm:h-[30px] sm:w-[30px]">
        <Check className="h-2 w-2 sm:h-4 sm:w-4" strokeWidth={2.5} />
      </Badge>
      <span className="text-body-color dark:text-body-color-dark text-xs font-medium sm:text-lg group-hover:text-primary transition-colors duration-200">{text}</span>
    </div>
  );

  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-dark dark:to-gray-800/50 py-4 md:py-16 lg:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container w-full px-4 md:px-6 lg:px-8 relative z-10">
        <div className="border-b border-body-color/[.15] pb-4 dark:border-white/[.15] md:pb-16 lg:pb-20">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2 text-center lg:text-left">
              <div className="mb-4 lg:mb-12">
                <h2 className="mb-3 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
                  공공기관과 기업을 위한 <br />IT 전문 파트너
                </h2>
                <p className="text-sm font-medium leading-relaxed text-body-color sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed">
                  자몽커뮤니케이션즈는 공공기관과 기업의 디지털 전환을 위한<br />
                  실무적 솔루션을 제공합니다. 제안 기획부터 시스템 개발,<br />
                  운영 유지보수까지 통합적인 IT 서비스를 통해<br />
                  고객의 비즈니스 성공을 지원합니다.
                </p>
              </div>
              <div className="mb-4 max-w-[570px] lg:mb-0">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="UI/UX 디자인" />
                    <List text="시스템 개발" />
                    <List text="제안 기획" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="운영 유지보수" />
                    <List text="원격 검침 시스템" />
                    <List text="기술 지원" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[4/3] max-w-[200px] sm:max-w-[300px] lg:aspect-25/24 lg:max-w-[500px] text-center lg:ml-auto lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:ml-auto lg:mr-0 transition-transform duration-300 hover:scale-105"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:ml-auto lg:mr-0 transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;