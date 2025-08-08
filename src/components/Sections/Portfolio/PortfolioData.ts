import { Portfolio } from "@/types/portfolio";

const portfolioData: Portfolio[] = [
  {
    id: 1,
    title: "공공기관 원격검침 시스템",
    paragraph:
      "지자체 상수도 관리를 위한 실시간 원격검침 시스템 구축.\n 효율적인 검침 데이터 관리와 운영 최적화 솔루션 제공.",
    image: "/images/portfolio/portfolio-01.jpg",
    author: {
      name: "자몽 개발팀",
      image: "/images/portfolio/author-01.png",
      designation: "시스템 개발",
    },
    tags: ["시스템 개발"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "기업 통합 관리 시스템",
    paragraph:
      "대기업 계열사 통합 관리를 위한 웹 기반 시스템 개발.\n 실시간 데이터 분석과 리포팅으로 업무 효율성 향상.",
    image: "/images/portfolio/portfolio-02.jpg",
    author: {
      name: "자몽 개발팀",
      image: "/images/portfolio/author-02.png",
      designation: "웹 개발",
    },
    tags: ["웹 개발"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "공공서비스 UI/UX 개선",
    paragraph:
      "시민 편의성 향상을 위한 공공서비스 플랫폼 UI/UX 개선.\n 접근성 기준을 준수한 사용자 중심 인터페이스 설계.",
    image: "/images/portfolio/portfolio-03.jpg",
    author: {
      name: "자몽 디자인팀",
      image: "/images/portfolio/author-03.png",
      designation: "UI/UX 디자인",
    },
    tags: ["UI/UX"],
    publishDate: "2024",
  },
];
export default portfolioData;