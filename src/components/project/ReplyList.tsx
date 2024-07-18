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
  console.log(replyList);
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
      return alert("비밀번호가 일치하지 않습니다.");;
    }
  };

  useEffect(() => {
    getData();
  }, [count]);

  useOnclickOutside(ref, () => {
    setIsClick(false);
  });

  return (
    <div className="mt-10">
      {replyList.length > 0 &&
        replyList.map((reply) => (
          <div key={reply.id} className="mt-5  relative">
            <div className="flex items-center justify-between">
              <p>{reply.nickname}</p>
              <SlOptions onClick={() => setIsClick(reply.id)} />
            </div>
            <div className="border rounded-lg p-3 whitespace-pre-wrap mt-3">
              <p>{reply.content}</p>
            </div>
            {isClick === reply.id && (
              <ul
                ref={ref}
                className="absolute right-0 -top-5 w-[100px] flex items-center justify-center"
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
        ))}
    </div>
  );
};

export default ReplyList;
