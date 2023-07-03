import React from "react";
import Accordion from "../accordion/Accordion";
import { useQuery } from "../../hooks/useQuery";
import { questionService } from "../../service/questionService";
const Question = () => {
  const { data } = useQuery(() => questionService.getQuestion());
  if (!data) return;
  const questions = data.questions?.slice(data?.questions?.sortOrder, 6);
  const subcribes = data.questions?.slice(6, 9);
  return (
    <section className="faq --scpadding">
      <div className="container">
        <div className="faq__inner">
          <div className="heading --noline --center">
            <h2 className="heading__title title --t2">
              Câu hỏi <span className="color--primary">thường gặp</span>
            </h2>
          </div>
          <div className="faq__list">
            <Accordion amount={questions}>Thông tin chung</Accordion>
            <Accordion amount={subcribes}>Đăng ký, thanh toán</Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
