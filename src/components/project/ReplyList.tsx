"use client";

import { db } from "@/firebase";
import { useOnclickOutside } from "@/hooks/useOnClickOutSide";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { SlOptions } from "react-icons/sl";
type ReplyProps = {
  id: number;
};

const ReplyList = ({ id }: ReplyProps) => {
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

  const replyDelete = async (id: number) => {
    console.log(id);
  };

  useEffect(() => {
    getData();
  }, [replyList]);

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
                  className="w-full border text-center"
                  onClick={() => replyDelete(reply.id)}
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
