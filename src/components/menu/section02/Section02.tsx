import React from "react";
import DateComponent from "./DateComponent";
import Title from "../Title";
import Content from "./Content";
import ContentGroup from "./ContentGroup";

const Section02 = () => {
  return (
    <section className="mt-20">
      <Title numberTitle="02" title="STORY" />
      <div className="relative flex flex-col items-center mt-10 max-[1060px]:mx-0 max-[600px]:mt-0">
        <div className="absolute opacity-0 max-[925px]:opacity-100 w-[5px] top-[20px] bottom-[210px] flex-grow bg-[#2C2C2E] max-[925px]:bg-[#ffa68b]" />
        <ContentGroup
          col="rev"
          children1={
            <Content
              title="오즈코딩스쿨"
              content="국비지원 부트캠프"
              content2=" FRONTEND 교육과정 1등 성적으로 수료"
              content3="HTML+CSS, Javascript, typescript"
              content4="react, next.js"
            />
          }
          children2={
            <DateComponent title="2023 ~ 24" subTitle="12.07 ~ 06.04" />
          }
        />
        <ContentGroup
          children1={<DateComponent title="2023" subTitle="09.01 ~ 10.31" />}
          children2={
            <Content
              opa2="true"
              opa3="true"
              title="바이스벌사(인턴)"
              content="앱 기능 구현 및 유지보수"
              content2="1"
              content3="1"
            />
          }
        />
        <ContentGroup
          col="rev"
          children1={
            <Content
              title="캠터"
              content="C2C 캠핑용품 공유 플랫폼"
              content2="flutter앱 초기모델 개발 배포"
              content3="(android)"
            />
          }
          children2={<DateComponent title="2023" subTitle="05.01 ~ 08.31" />}
        />
        <ContentGroup
          children1={
            <DateComponent title="2022 ~ 23" subTitle="11.01 ~ 02.01" />
          }
          children2={
            <Content
              opa3="true"
              title="flutter앱 개발 입문"
              content="패스트캠퍼스 flutter 입문 강의 수료"
              content2="(코딩 왕초보를 위한 앱 만들기 풀 패키지)"
              content3="1"
            />
          }
        />
        <ContentGroup
          col="rev"
          children1={
            <Content
              title="이블루(주)"
              content="android앱 개발"
              content2="회사 경영악화로 권고사직"
              content3="(현재 회사 폐업)"
            />
          }
          children2={<DateComponent title="2022" subTitle="06.25 ~ 08.31" />}
        />
        <ContentGroup
          children1={
            <DateComponent title="2021 ~ 22" subTitle="12.08 ~ 06.07" />
          }
          children2={
            <Content
              title="동성인재개발교육원"
              content="Java 스마트융함 풀스택개발"
              content2="풀스택 교육 과정 수료"
              content3="HTML+CSS, Javascript, Vue.js"
              content4="Spring boot"
            />
          }
        />
        <ContentGroup
          col="rev"
          children1={
            <Content
              title="이스타포트(주)"
              content="이스타항공 여객 운송"
              content2="부산팀 과장(직원관리 및 업무지원)"
              content3="코로나로 인한 폐업"
            />
          }
          children2={
            <DateComponent title="2015 ~ 20" subTitle="02.01 ~ 04.19" />
          }
        />
        <ContentGroup
          children1={
            <DateComponent title="2011 ~ 15" subTitle="06.07 ~ 01.31" />
          }
          children2={
            <Content
              title="동보공항서비스(현 JAS)"
              content="이스타항공 여객 운송"
              content2="제주팀 주임(여객지상직)"
              content3="이스타항공 자회사 설립으로 인한"
              content4="고용승계"
            />
          }
        />
        <ContentGroup
          col="rev"
          lineOpen={false}
          children1={
            <Content
              title="아웃백스테이크하우스(제주)"
              content="고객 서비스"
              content2="KEY 매니저(홀서비스)"
              content3="이직으로 인한 퇴사"
            />
          }
          children2={
            <DateComponent title="2009 ~ 11" subTitle="02.18 ~ 06.02" />
          }
        />
      </div>
    </section>
  );
};

export default Section02;
