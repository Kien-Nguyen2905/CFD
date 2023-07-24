import { message } from "antd";
import React, { useState } from "react";
import { rulesForm } from "../../constants/rulesForm";
import { useMutation } from "../../hooks/useMutation";
import { subscribeService } from "../../service/subscribeService";
import { validate } from "../../utils/validate";
import Button from "../button/Button";
import Input from "../input/Input";
import ModalPopup from "../modal/ModalPopup";
import Select from "../select/Select";
import FormGroup from "./FormGroup";
const Form = () => {
  const [form, setForm] = useState({});
  // const [test, setTest] = useState(jkdhakjhd);
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const { execute, data } = useMutation(subscribeService.subscribe);
  const register = (fieldName) => {
    return {
      value: form[fieldName] || "",
      error: errors[fieldName],
      onChange: (e) => setForm({ ...form, [fieldName]: e.target.value }),
    };
  };
  const handleSubmit = () => {
    const errorList = validate(form, rulesForm);
    setErrors(errorList);
    if (Object.keys(errorList).length == 0) {
      const payload = {
        name: form?.name || "",
        title: "",
        email: form?.email || "",
        description: form?.content || "",
        image: "",
      };
      execute(payload);
      setForm({});
      setShow(true);
      message.success("Successfully");
    }
  };
  console.log(data);
  return (
    <>
      {show && <ModalPopup open={show} handleShow={() => setShow(false)} />}
      <div className="form">
        <h3 className="title --t3">Gửi yêu cầu hỗ trợ</h3>
        <FormGroup>
          <Input label={"Họ và tên"} required {...register("name")} />
        </FormGroup>
        <FormGroup>
          <Input label={"Email"} required {...register("email")} />
        </FormGroup>
        <FormGroup>
          <Input label={"Số điện thoại"} required {...register("phone")} />
        </FormGroup>
        <FormGroup>
          <Select
            label={"Chủ đề cần hỗ trợ"}
            required
            {...register("topic")}
            options={[
              {
                value: "-",
                label: "--",
              },
              {
                value: "res",
                label: "Responsive",
              },
              {
                value: "react",
                label: "Reactjs",
              },
            ]}
          />
        </FormGroup>
        <FormGroup>
          <Input
            label={"Nội dung"}
            required
            renderProp={(props) => (
              <textarea
                className={`form__input ${props.error ? "formerror" : ""} `}
                {...props}
              />
            )}
            {...register("content")}
          />
        </FormGroup>
        <div className="btncontrol">
          <Button onClick={handleSubmit}>Gửi</Button>
        </div>
      </div>
    </>
  );
};

export default Form;
