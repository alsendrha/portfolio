"use client";

import { db } from "@/firebase";
import { useOnclickOutside } from "@/hooks/useOnClickOutSide";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { WiTime10 } from "react-icons/wi";
import { SlOptions } from "react-icons/sl";
type ReplyProps = {
  id: number;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const ReplyList = ({ id, count, setCount }: ReplyProps) => {
  const [replyList, setReplyList] = useState<any[]>([]);
  const [isClick, setIsClick] = useState(false);
  const ref = useRef(null);
  const [isList, setIsList] = useState(false);
  const getData = async () => {
    try {
      const communityDetail = collection(db, "reply");
      const replyData = query(communityDetail, where("projectId", "==", id));
      const snapshot = await getDocs(replyData);
      const replies = snapshot.docs.map((doc) => doc.data());
      setReplyList(replies);
    } catch (error) {
      console.error("Error fetching replies:", error);
    }
  };
  const replyDelete = async (id: string, password: string) => {
    const auth = prompt("비밀번호를 입력해주세요");

    if (auth === password) {
      const deleteConfirm = confirm("정말 삭제하시겠습니까?");
      if (!deleteConfirm) return;
      try {
        await deleteDoc(doc(db, "reply", id));
        setCount((prev) => prev + 1);
      } catch (error) {
        console.log("댓글 삭제 실패", error);
      }
    } else {
      return alert("비밀번호가 일치하지 않습니다.");
    }
  };

  useEffect(() => {
    getData();
  }, [count]);

  useOnclickOutside(ref, () => {
    setIsClick(false);
  });

  return (
    <div className="mt-5">
      {replyList.length > 0 && (
        <div className="flex items-center justify-between mb-5">
          <div className="opacity-0">
            <IoMdArrowDropup />
          </div>
          <div
            className={`text-center cursor-pointer text-[#5f83b1] ${
              isList ? "hidden" : "block"
            }`}
            onClick={() => setIsList(!isList)}
          >
            더보기
          </div>
          <div className="cursor-pointer" onClick={() => setIsList(!isList)}>
            {!isList ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
          </div>
        </div>
      )}
      {isList &&
        replyList.map((reply) => {
          const givenDate: any = new Date(
            reply.date.seconds * 1000 + reply.date.nanoseconds / 1000000
          );
          const currentDate: any = new Date();
          const timeDifference = currentDate - givenDate;
          const minutesDifference = Math.floor(timeDifference / (1000 * 60));
          let timeAgo;
          if (minutesDifference < 60) {
            timeAgo = `${minutesDifference}분 전`;
          } else {
            const hoursDifference = Math.floor(minutesDifference / 60);
            if (hoursDifference < 24) {
              timeAgo = `${hoursDifference}시간 전`;
            } else {
              const daysDifference = Math.floor(hoursDifference / 24);
              timeAgo = `${daysDifference}일 전`;
            }
          }
          return (
            <div
              key={reply.id}
              className=" relative py-5 border-b last:border-b-0"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="font-bold pl-3">
                    {reply.nickname}&nbsp;·&nbsp;
                  </p>
                  <div className="flex items-center">
                    <WiTime10 className="pt-[1px]" />
                    <p className="text-sm">{timeAgo}</p>
                  </div>
                </div>
                <SlOptions onClick={() => setIsClick(reply.id)} />
              </div>
              <div className="rounded-lg px-3 whitespace-pre-wrap">
                <p>{reply.content}</p>
              </div>
              {isClick === reply.id && (
                <ul
                  ref={ref}
                  className="absolute -right-1 -top-0 w-[100px] flex items-center justify-center"
                  onClick={() => setIsClick(false)}
                >
                  <li
                    className="w-full border text-center cursor-pointer rounded-lg bg-[#21277b] text-white hover:bg-white hover:text-[#21277b] hover:border-[#21277b]"
                    onClick={() => replyDelete(reply.id, reply.password)}
                  >
                    삭제
                  </li>
                </ul>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default ReplyList;
