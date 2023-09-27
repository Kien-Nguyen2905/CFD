import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../component/button/Button";
import FormGroup from "../../component/form/FormGroup";
import Input from "../../component/input/Input";
import Radio from "../../component/radio/Radio";
import Select from "../../component/select/Select";
import { useQuery } from "../../hooks/useQuery";
import { courseService } from "../../service/courseService";
import { rulesOrder } from "../../constants/rulesOrder";
import { convertPrice } from "../../utils/covertPrice";
import { validate } from "../../utils/validate";
import { useAuThen } from "../../component/authenContext/authenContext";
import { oderService } from "../../service/orderService";
import useDebounce from "../../hooks/useDebounce";
import Loading from "../../component/loading/Loading";
import { message } from "antd";
import { PATHS } from "../../constants/pathname";

const CourseOrder = () => {
  const { slug } = useParams();
  const { data, loading } = useQuery(() => courseService.getCourseDetail(slug));
  const teacher = data?.teams?.find((item) => item.tags.includes("Teacher"));
  const typeOptions = useMemo(
    () =>
      data?.tags?.map((tag) => {
        return {
          label: tag,
          value: tag?.toLowerCase(),
        };
      }) || [],
    [data?.tags]
  );
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [payment, setPayMent] = useState("banking");
  const handlePayment = (method) => setPayMent(method);
  const { profile, getCourseProfile, getPayment, course } = useAuThen();
  const navigate = useNavigate();
  const register = (fieldName) => {
    return {
      value: form[fieldName] || "",
      error: errors[fieldName],
      onChange: (e) => setForm({ ...form, [fieldName]: e.target.value }),
    };
  };
  const orderedCourse = course?.find((item) => item?.course?.id === data?.id);
  const isAlreadyOrdered = !!orderedCourse?.id;
  const {
    image: orderedImage,
    name: orderedName,
    teams: orderedTeams,
    price: orderedPrice,
  } = orderedCourse?.course || {};
  const orderedTeacher = orderedTeams?.teams?.find((item) =>
    item.tags.includes("Teacher")
  );
  const handleSubmit = async () => {
    const errorList = validate(form, rulesOrder);
    setErrors(errorList);
    if (Object.keys(errorList).length == 0) {
      if (data?.id) {
        const payload = {
          name: form?.name,
          phone: form?.phone,
          course: data?.id,
          type: form?.type,
          paymentMethod: payment,
        };
        try {
          const data = await oderService.registerCourse(payload);
          if (data) {
            await getCourseProfile();
            await getPayment();
            message.success("Successfully");
            navigate(PATHS.HOME);
          }
        } catch (error) {
          console.log(error);
          message.error("Failed");
        }
      }
    }
  };
  useEffect(() => {
    if (profile || orderedCourse) {
      setForm({
        name: orderedCourse?.name || profile?.firstName,
        email: orderedCourse?.email || profile?.email,
        phone: orderedCourse?.phone || profile?.phone,
        type: orderedCourse?.type || typeOptions[0]?.value,
      });
      orderedCourse?.paymentMethod && setPayMent(orderedCourse?.paymentMethod);
    }
  }, [profile, typeOptions, orderedCourse, setPayMent]);
  const isPageLoading = useDebounce(loading, 250);
  if (isPageLoading)
    return (
      <>
        <Loading />
      </>
    );
  return (
    <main className="mainwrapper --ptop">
      <section className="sccourseorder">
        <div className="container small">
          <div className="itemorder infoorder">
            <h3 className="title --t3">Thông tin đơn hàng</h3>
            <div className="boxorder">
              <div className="boxorder__col">
                <label className="label">Tên khoá học</label>
                <div className="boxorder__col-course">
                  <div className="img">
                    <img src={orderedImage || data?.image} alt="" />
                  </div>
                  <div className="info">
                    <p className="name">
                      <strong>{orderedName || data?.title}</strong>
                    </p>
                    <p>{orderedTeacher || teacher?.name}</p>
                  </div>
                </div>
              </div>
              <div className="boxorder__col">
                <label className="label">Tạm tính</label>
                <p>{convertPrice(orderedPrice || data?.price)}</p>
              </div>
              <div className="boxorder__col">
                <label className="label">Giảm giá</label>
                <p>0đ</p>
              </div>
              <div className="boxorder__col">
                <label className="label">thành tiền</label>
                <p>
                  <strong>{convertPrice(orderedPrice || data?.price)}</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="itemorder formorder">
            <h3 className="title --t3">Thông tin cá nhân</h3>
            <div className="boxorder">
              <div className="form">
                <div className="form-container">
                  <FormGroup>
                    <Input
                      disabled={isAlreadyOrdered}
                      label={"Họ và tên"}
                      required
                      {...register("name")}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      label={"Email"}
                      required
                      disabled
                      {...register("email")}
                    />
                  </FormGroup>
                </div>
                <div className="form-container">
                  <FormGroup>
                    <Input
                      disabled={isAlreadyOrdered}
                      label={"Số điện thoại"}
                      required
                      {...register("phone")}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Select
                      disabled={isAlreadyOrdered}
                      label={"Hình thức học"}
                      required
                      {...register("type")}
                      options={typeOptions}
                    ></Select>
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>
          <div className="itemorder paymentorder">
            <h3 className="title --t3">Hình thức thanh toán</h3>
            <Radio
              disabled={isAlreadyOrdered}
              className="boxorder"
              onChange={handlePayment}
              defaultValue={payment}
            >
              <div className="boxorder__pay">
                <Radio.Option value="banking">
                  <img src="/img/icon-payment-method-atm.svg" alt="" />
                  <span className="checkmark"></span>
                  Thành toán bằng chuyển khoản
                </Radio.Option>
                <div
                  className="boxorder__pay-tooltip"
                  style={{ display: payment === "banking" ? "block" : "none" }}
                >
                  Sau khi bấm đăng ký, mã khoá học & thông tin tài khoản ngân
                  hàng sẽ được gửi đến email của bạn, bạn vui lòng chuyển khoản
                  với nội dung: mã khoá học, họ và tên, số điện thoại, CFD
                  Circle sẽ liên hệ bạn để xác nhận và kích hoạt khoá học của
                  bạn sau khi giao dịch thành công.
                </div>
              </div>
              <div className="boxorder__pay">
                <Radio.Option value="momo">
                  <img src="/img/icon-payment-method-mo-mo.svg" alt="" />
                  <span className="checkmark"></span>
                  Thanh toán bằng ví Momo
                </Radio.Option>
                <div
                  className="boxorder__pay-tooltip"
                  style={{ display: payment === "momo" ? "block" : "none" }}
                >
                  Sau khi bấm đăng ký, mã khoá học & thông tin tài khoản MoMo sẽ
                  được gửi đến email của bạn, bạn vui lòng chuyển khoản với nội
                  dung: mã khoá học, họ và tên, số điện thoại, CFD Circle sẽ
                  liên hệ bạn để xác nhận và kích hoạt khoá học của bạn sau khi
                  giao dịch thành công.
                </div>
              </div>
              <div className="boxorder__pay">
                <Radio.Option value="cash">
                  <img src="/img/icon-payment-method-cod.svg" alt="" />
                  <span className="checkmark"></span>
                  Thanh toán bằng tiền mặt
                </Radio.Option>
                <div
                  className="boxorder__pay-tooltip"
                  style={{ display: payment === "cash" ? "block" : "none" }}
                >
                  Sau khi bấm đăng ký, thông tin khoá học sẽ được gửi đến email
                  của bạn, bạn vui lòng đến văn phòng CFD Circle vào ngày khai
                  giảng để đóng học phí tại số 11b, Phan Kế Bính, quận 1, TP Hồ
                  Chí Minh.
                </div>
              </div>
            </Radio>
          </div>
          <Button onClick={handleSubmit} disabled={isAlreadyOrdered}>
            <span>
              {!isAlreadyOrdered ? "Đăng ký khoá học" : "Đã đăng ký khoá học"}
            </span>
            <svg
              version="1.1"
              id="L9"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enableBackground="new 0 0 0 0"
              xmlSpace="preserve"
            >
              <path
                fill="#fff"
                d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="1s"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </Button>
          {/* addclass --processing khi bấm đăng ký */}
          {/* <div className="btn btn--primary">
              <span>Đăng ký khoá học</span>
              <svg
                version="1.1"
                id="L9"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                enableBackground="new 0 0 0 0"
                xmlSpace="preserve"
              >
                <path
                  fill="#fff"
                  d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                >
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    dur="1s"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </div> */}
        </div>
      </section>
    </main>
  );
};

export default CourseOrder;
