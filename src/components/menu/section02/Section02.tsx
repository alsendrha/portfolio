import React from "react";

type Section02Props = {
  param: string;
};

const Section02 = ({ param }: Section02Props) => {
  return (
    <section
      className={` mt-20  ml-20 ${
        param === "/" || param === "/about" ? "block" : "hidden"
      }`}
    >
      <div className="">
        <div className="relative flex items-end">
          <h2 className="text-[150px] opacity-25 leading-[160px] font-bold">
            02
          </h2>
          <p className="absolute left-24 text-[50px] font-bold">STORY</p>
        </div>
      </div>
      <div className="mt-10 w-full text-center">
        <div className="flex relative items-center justify-center">
          <div className="absolute w-[5px] h-full bg-black"></div>
          <div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center justify-center w-[15px] h-[15px] rounded-full bg-black"></div>
              <div className="flex relative -top-[24px]">
                <div className="flex flex-col justify-start items-end relative right-[60px]">
                  <h2 className="text-[50px] leading-none font-bold text-[#21277b]">
                    2021 ~ 22
                  </h2>
                  <h2 className="text-[24px] text-[#5f83b1]">12.08 ~ 06.07</h2>
                </div>
                <div className="flex flex-col mt-1 justify-start items-start relative left-[130px]">
                  <p className="font-bold">동성인재개발교육원</p>
                  <p>Java 스마트융함 풀스택개발</p>
                  <p>풀스택 교육 과정 수료</p>
                  <p>HTML+CSS, Javascript, Vue.js Spring boot</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-20">
              <div className="flex items-center justify-center w-[15px] h-[15px] rounded-full bg-black"></div>
              <div className="flex relative -top-[24px]">
                <div className="flex flex-col mt-1 justify-start items-end relative right-[110px]">
                  <p className="font-bold">이블루(주) 입사</p>
                  <p>android앱 개발</p>
                  <p>회사 경영악화로 권고사직</p>
                  <p>(현재 회사 폐업)</p>
                </div>
                <div className="flex flex-col justify-start items-start relative left-[80px]">
                  <h2 className="text-[50px] leading-none font-bold text-[#21277b]">
                    2022
                  </h2>
                  <h2 className="text-[24px] text-[#5f83b1]">06.25 ~ 08.31</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-20">
              <div className="flex items-center justify-center w-[15px] h-[15px] rounded-full bg-black"></div>
              <div className="flex relative -top-[24px]">
                <div className="flex flex-col justify-start items-end relative right-[60px]">
                  <h2 className="text-[50px] leading-none font-bold text-[#21277b]">
                    2022 ~ 23
                  </h2>
                  <h2 className="text-[24px] text-[#5f83b1]">11.01 ~ 02.01</h2>
                </div>
                <div className="flex flex-col mt-1 justify-start items-start relative left-[130px]">
                  <p className="font-bold">flutter앱 개발 공부</p>
                  <p>BACKEND로 입사 지원을 했지만</p>
                  <p>잘 안되어 방향 전환</p>
                  <p>flutter 공부 시작</p>
                  <p>패스트캠퍼스 flutter 입문 강의 수료</p>
                  <p>(코딩 왕초보를 위한 앱 만들기 풀 패키지)</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-20">
              <div className="flex items-center justify-center w-[15px] h-[15px] rounded-full bg-black"></div>
              <div className="flex relative -top-[24px]">
                <div className="flex flex-col mt-1 justify-start items-end relative right-[120px]">
                  <p className="font-bold">캠터 입사</p>
                  <p>C2C 캠핑용품 공유 플랫폼</p>
                  <p>flutter앱 초기모델 개발 배포</p>
                  <p>(android)</p>
                  <p>급여 문제로 퇴사(월 100만원)</p>
                </div>
                <div className="flex flex-col justify-start items-start relative left-[70px]">
                  <h2 className="text-[50px] leading-none font-bold text-[#21277b]">
                    2023
                  </h2>
                  <h2 className="text-[24px] text-[#5f83b1]">05.01 ~ 08.31</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-20">
              <div className="flex items-center justify-center w-[15px] h-[15px] rounded-full bg-black"></div>
              <div className="flex relative -top-[24px]">
                <div className="flex flex-col justify-start items-end relative right-[70px]">
                  <h2 className="text-[50px] leading-none font-bold text-[#21277b]">
                    2023
                  </h2>
                  <h2 className="text-[24px] text-[#5f83b1]">09.01 ~ 10.31</h2>
                </div>
                <div className="flex flex-col mt-1 justify-start items-start relative left-[115px]">
                  <p className="font-bold">바이스벌사 입사(인턴)</p>
                  <p>앱 기능 구현 및 유지보수</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-20">
              <div className="flex items-center justify-center w-[15px] h-[15px] rounded-full bg-black"></div>
              <div className="flex relative -top-[24px]">
                <div className="flex flex-col mt-1 justify-start items-end relative right-[85px]">
                  <p className="font-bold">오즈코딩스쿨</p>
                  <p>
                    FRONTEND 교육과정 수료<strong>(1등)</strong>
                  </p>
                  <p>HTML+CSS, Javascript, typescript</p>
                  <p>react, next.js</p>
                </div>
                <div className="flex flex-col justify-start items-start relative left-[105px]">
                  <h2 className="text-[50px] leading-none font-bold text-[#21277b]">
                    2023 ~ 24
                  </h2>
                  <h2 className="text-[24px] text-[#5f83b1]">12.07 ~ 06.04</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section02;
