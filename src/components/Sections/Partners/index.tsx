"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import partnersData from "./PartnersData";
import { useState } from "react";

const Partners = () => {
  const [imageErrors, setImageErrors] = useState<number[]>([]);

  const handleImageError = (partnerId: number) => {
    setImageErrors(prev => [...prev, partnerId]);
    console.log(`이미지 로딩 실패: Partner ID ${partnerId}`);
  };

  return (
    <section
      id="partners"
      className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-dark dark:to-gray-800/50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/2 right-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container w-full mx-auto px-4 py-4 overflow-visible relative z-10">
        <div className="text-center space-y-2 mb-8 lg:mb-10">
          <Badge variant="outline" className="mx-auto text-xs dark:text-white">
            Partners
          </Badge>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-black dark:text-white">
            주요 고객사
            <span className="block text-primary">& 공공기관</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto dark:text-gray-400 px-4">
            공공기관과 대기업의 디지털 전환을 성공적으로<br />지원한 자몽커뮤니케이션즈입니다.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="max-w-3xl mx-auto px-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {partnersData.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center p-2 sm:p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group border border-gray-100 dark:border-gray-800"
              >
                <div className="relative w-full h-16 flex items-center justify-center">
                  {imageErrors.includes(partner.id) ? (
                    // Fallback UI when image fails to load
                    <div className="flex items-center justify-center text-xs text-gray-500 dark:text-gray-400 font-medium">
                      {partner.name}
                    </div>
                  ) : (
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={240}
                      height={120}
                      className="h-full w-auto object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-200"
                      onError={() => handleImageError(partner.id)}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 sm:mt-8 max-w-xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
            <div className="space-y-1">
              <div className="text-lg sm:text-xl font-bold text-primary">30+</div>
              <div className="text-xs text-body-color dark:text-body-color-dark">공공기관</div>
            </div>
            <div className="space-y-1">
              <div className="text-lg sm:text-xl font-bold text-primary">100+</div>
              <div className="text-xs text-body-color dark:text-body-color-dark">프로젝트</div>
            </div>
            <div className="space-y-1">
              <div className="text-lg sm:text-xl font-bold text-primary">10년+</div>
              <div className="text-xs text-body-color dark:text-body-color-dark">경험</div>
            </div>
            <div className="space-y-1">
              <div className="text-lg sm:text-xl font-bold text-primary">98%</div>
              <div className="text-xs text-body-color dark:text-body-color-dark">만족도</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 sm:mt-10 text-center px-4">
          <p className="text-sm sm:text-base text-body-color dark:text-body-color-dark mb-3 sm:mb-4">
            함께 성장할 파트너를 찾고 계신가요?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-white duration-300 ease-in-out hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
          >
            파트너십 문의하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;