import { useForm } from "antd/es/form/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAccount } from "../../account";
import { FormButtonSubmit } from "../../Components/Form/FormButtonSubmit";
import { FormInput } from "../../Components/Form/FormInput";
import FormWrap from "../../Components/Form/FormWrap";
import { CUSTOMER_ROUTER_PATH } from "../../Routers/Routers";
import { ValidateLibrary } from "../../validate";
import "./forgotPassword.scss";
export const ForgotCodeInput = () => {
  const navigate = useNavigate();
  const [form] = useForm();
  const admin = getAccount("admin");
  const location = useLocation();
  const handleNextStep = () => {
    if (location?.state?.email === admin?.email) {
      navigate(CUSTOMER_ROUTER_PATH.FORGOT_EDIT_PASSWORD);
    }
  };
  return (
    <div className="forgot-password_code">
      <FormWrap
        onFinish={handleNextStep}
        form={form}
        className="forgot-password_code-form"
      >
        <h1 className="forgot-password_title">XÁC NHẬN MÃ OTP</h1>
        <p className="forgot-password_sub">
          <span>
            Vui lòng nhập mã OTP được gửi về email:
            <span style={{ marginRight: "8px", color: "blue" }}>
              {location?.state?.email}
            </span>{" "}
            Fcủa bạn (Mã OTP có hiệu lực trong vòng 1 phút).
          </span>
        </p>
        <div className="forgot-password_code-input">
          <FormInput
            name={"code"}
            formItemProps={{
              className: "forgot-password_code-input-confirm",
              rules: ValidateLibrary().number,
            }}
            inputProps={{
              placeholder: "Vui lòng nhập mã OTP được gửi về email của bạn! ",
            }}
          />
        </div>
        <div className="forgot-password_code-link">
          <Link to={"/"}>Gửi lại mã.</Link>
        </div>
        <div className="forgot-password_code-button">
          <FormButtonSubmit
            content={"Xác nhận"}
            buttonProps={{
              className: "forgot-password_code-button-submit",
              onClick: handleNextStep,
            }}
          />
        </div>
      </FormWrap>
    </div>
  );
};
