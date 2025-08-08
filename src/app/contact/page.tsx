"use client";

import ScrollLayout from "@/components/Common/ScrollLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, TrainFrontTunnel, Bus, Car } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("문의가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ScrollLayout>
      <section className="pb-16 pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              <div className="text-center mb-8">
                <h1 className="mb-3 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl sm:leading-tight">
                  자몽커뮤니케이션즈 연락처
                </h1>
                <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark mb-4">
                  공공기관과 기업의 IT 프로젝트 문의나 상담이 필요하시면 언제든지 연락주세요.
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg p-4 max-w-xl mx-auto">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    제안부터 개발, 유지보수까지 - 공공서비스의<br />
                    <span className="text-primary font-semibold">디지털 전환</span>을 함께하는 자몽커뮤니케이션즈
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12">
              <Card className="mb-8 lg:mb-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-black dark:text-white">
                    문의 양식
                  </CardTitle>
                  <CardDescription className="text-body-color dark:text-gray-500">
                    아래 양식을 작성해주시면 빠르게 답변드리겠습니다.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          이름 *
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="성함을 입력해주세요"
                          className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          이메일 *
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="이메일을 입력해주세요"
                          className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          연락처
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="연락처를 입력해주세요"
                          className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          문의 유형
                        </label>
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="문의 유형을 입력해주세요"
                          className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        문의 내용 *
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="문의하실 내용을 상세히 적어주세요"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>

                    <div className="text-center">
                      <Button type="submit" className="w-full sm:w-auto">
                        문의하기
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="w-full px-4 lg:w-5/12">
              <div className="lg:ml-8">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg font-bold text-black dark:text-white">
                      <Phone className="mr-3 w-5 h-5 text-primary" />
                      전화 문의
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body-color dark:text-body-color-dark">
                      평일 9:00 - 18:00
                    </p>
                    <p className="text-lg font-semibold text-black dark:text-white">
                      010-6850-7890
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg font-bold text-black dark:text-white">
                      <Mail className="mr-3 w-5 h-5 text-primary" />
                      이메일
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body-color dark:text-body-color-dark">
                      24시간 문의 가능
                    </p>
                    <p className="text-lg font-semibold text-black dark:text-white">
                      ceo@jamong.it.kr
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg font-bold text-black dark:text-white">
                      <MapPin className="mr-3 w-5 h-5 text-primary" />
                      오피스 위치
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body-color dark:text-body-color-dark">
                      전라남도 나주시 빛가람동
                    </p>
                    <p className="text-body-color dark:text-body-color-dark">
                      그린로 370, 4층 414호
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-black dark:text-white">
                      운영시간
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-body-color dark:text-body-color-dark">평일</span>
                        <span className="text-black dark:text-white">09:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-body-color dark:text-body-color-dark">토요일</span>
                        <span className="text-black dark:text-white">10:00 - 15:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-body-color dark:text-body-color-dark">일요일</span>
                        <span className="text-black dark:text-white">휴무</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* 지도 섹션 */}
          <div className="-mx-4 flex flex-wrap mt-12">
            <div className="w-full px-4">
              <div className="text-center mb-6">
                <h2 className="mb-3 text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                  오시는 길
                </h2>
                <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                  빛가람동 그린로에 위치한 자몽커뮤니케이션즈 오피스입니다.
                </p>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-[16/10] w-full bg-gray-100 dark:bg-gray-800 relative">
                  {/* Google Maps Embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.49164384334!2d126.7928837119817!3d35.019428572694714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357225eef7c2e463%3A0x38b5da8ea564bf58!2z7KCE652864Ko64-EIOuCmOyjvOyLnCDqt7jrprDroZwgMzcw!5e0!3m2!1sko!2skr!4v1754549923770!5m2!1sko!2skr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                    title="Company Location Map"
                  ></iframe>
                </div>
              </div>

              {/* 교통 정보 */}
              <div className="mt-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center text-base font-bold text-black dark:text-white">
                        <TrainFrontTunnel className="mr-2 w-4 h-4 text-primary" />
                        지하철
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-body-color dark:text-body-color-dark">
                        나주시 버스터미널<br />
                        차량 10분 소요
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center text-base font-bold text-black dark:text-white">
                        <Bus className="mr-2 w-4 h-4 text-primary" />
                        버스
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-body-color dark:text-body-color-dark">
                        나주시 시내버스<br />
                        빛가람동 방면
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center text-base font-bold text-black dark:text-white">
                        <Car className="mr-2 w-4 h-4 text-primary" />
                        주차
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-body-color dark:text-body-color-dark">
                        건물 전용 주차장<br />
                        방문 시 무료
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollLayout>
  );
};

export default ContactPage;