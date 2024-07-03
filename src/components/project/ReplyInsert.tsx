import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

type ReplyProps = {
  id: number;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ReplyInsert = ({ id, setIsOpen }: ReplyProps) => {
  const [userReply, setUserReply] = useState({
    nickName: "",
    password: "",
    content: "",
  });

  const handleSubmit = async () => {
    const replyId = uuid().replace(/-/g, "").substring(0, 10);
    if (userReply.nickName === "") {
      alert("닉네임을 입력해주세요.");
      return;
    }

    if (userReply.password === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    if (userReply.content === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    try {
      const replyData = doc(db, "reply", `${replyId}`);
      await setDoc(replyData, {
        id: replyId,
        projectId: id,
        nickname: userReply.nickName,
        password: userReply.password,
        content: userReply.content,
        date: new Date(),
      });
      setUserReply({ nickName: "", password: "", content: "" });
      setIsOpen(false);
    } catch (error) {
      console.log("댓글 등록 실패", error);
    }
  };

  return (
    <div className="w-full mt-10">
      <div className="flex justify-end">
        <input
          maxLength={10}
          className="w-[100px] h-[30px] border px-3 rounded-lg"
          placeholder="닉네임"
          value={userReply.nickName}
          onChange={(e) =>
            setUserReply({ ...userReply, nickName: e.target.value })
          }
        />
        <input
          type="password"
          maxLength={16}
          className="w-[100px] h-[30px] border ml-2 px-3 rounded-lg"
          placeholder="비밀번호"
          value={userReply.password}
          onChange={(e) =>
            setUserReply({ ...userReply, password: e.target.value })
          }
        />
        <button
          className="w-[100px] h-[30px] rounded-lg border ml-3"
          onClick={handleSubmit}
        >
          글쓰기
        </button>
      </div>
      <div className="mt-3">
        <textarea
          className="w-full h-[100px] resize-none p-3 border rounded-lg"
          value={userReply.content}
          onChange={(e) =>
            setUserReply({ ...userReply, content: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default ReplyInsert;
