import React, { useState } from "react";
import { useEffect } from "react";
import { useAuThen } from "../../component/authenContext/authenContext";
import FormGroup from "../../component/form/FormGroup";
import Input from "../../component/input/Input";
import { ruleInfo } from "../../constants/rulesInfo";
import { validate } from "../../utils/validate";
import { useMutation } from "../../hooks/useMutation";
import { profileService } from "../../service/profileService";
import { message } from "antd";
const ProfileInfo = () => {
  const [form, setForm] = useState({
    password: "***************",
  });
  console.log(form);
  const { profile, setProfile, errors, setErrors } = useAuThen();
  const { execute } = useMutation(profileService.putProfile, {
    onSuccess: (data) => {
      console.log(data);
      message.success("Successfully");
      setProfile({ ...payload, email: form?.email });
    },
    onFail: (error) => {
      console.log(error);
      message.error("Failed");
    },
  });
  const register = (fieldName) => {
    return {
      value: form[fieldName] || "",
      error: errors[fieldName],
      onChange: (e) => setForm({ ...form, [fieldName]: e.target.value }),
    };
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const errorList = validate(form, ruleInfo);
    setErrors(errorList);
    if (Object.keys(errorList).length == 0) {
      const payload = {
        firstName: form?.firstName || "",
        lastName: "",
        phone: form?.phone || "",
        facebookURL: form?.facebookURL || "",
        website: form?.website || "",
        introduce: form?.introduce || "",
      };
      execute(payload);
      // navigate(PATHS.HOME);
    }
  };
  useEffect(() => {
    if (profile) {
      setForm({ ...form, ...profile });
    }
  }, [profile]);
  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      {!!localStorage.getItem("accessToken") && (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-container">
            <FormGroup>
              <Input label={"Họ và tên"} required {...register("firstName")} />
            </FormGroup>
            <FormGroup>
              <Input label={"Số điện thoại"} required {...register("phone")} />
            </FormGroup>
          </div>
          <div className="form-container">
            <FormGroup>
              <Input label={"Email"} required disabled {...register("email")} />
            </FormGroup>
            <FormGroup>
              <Input
                label={"Mật khẩu"}
                required
                disabled
                {...register("password")}
              />
            </FormGroup>
          </div>
          <FormGroup>
            <Input label={"Facebook URL"} {...register("facebookURL")} />
          </FormGroup>
          <FormGroup>
            <Input label={"Website"} {...register("website")} />
          </FormGroup>
          <div className="form-container textarea">
            <Input
              label={"Giới thiệu bản thân"}
              {...register("introduce")}
              renderProp={(props) => (
                <textarea
                  style={{
                    resize: "none",
                  }}
                  className={`form__input ${props.error ? "formerror" : ""} `}
                  {...props}
                />
              )}
            />
          </div>
          <div className="form-group">
            <div className="btnsubmit">
              <button className="btn btn--primary">Lưu lại</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProfileInfo;
