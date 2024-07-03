import { db } from "@/firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { SlOptions } from "react-icons/sl";
type ReplyProps = {
  id: number;
};

const ReplyList = ({ id }: ReplyProps) => {
  const [replyList, setReplyList] = useState<any[]>([]);

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

  useEffect(() => {
    getData();
  }, [replyList]);

  return (
    <div className="mt-10">
      {replyList.length > 0 &&
        replyList.map((reply) => (
          <div key={reply.id} className="mt-5">
            <div className="flex items-center justify-between">
              <p>{reply.nickname}</p>
              <SlOptions />
            </div>
            <div className="border rounded-lg p-3 whitespace-pre-wrap mt-3">
              <p>{reply.content}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ReplyList;
