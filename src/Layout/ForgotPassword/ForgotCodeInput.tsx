import { Link, useLocation, useNavigate } from "react-router-dom";
import { FormInput } from "../../Components/Form/FormInput";
import FormWrap from "../../Components/Form/FormWrap";
import { CustomButton } from "../../Components/buttons/CustomButton";
import "./forgotPassword.scss";
import { CUSTOMER_ROUTER_PATH } from "../../Routers/Routers";
import { useForm } from "antd/es/form/Form";
import { getAccount } from "../../account";
import ErrorNotification from "../Notification/ErrorNotification";
export const ForgotCodeInput = () => {
  const navigate = useNavigate();
  const [form] = useForm();
  const admin = getAccount("admin");
  const location = useLocation();
  const handleNextStep = () => {
    if (location.state.email === admin?.email) {
      if (form.getFieldValue("code") === admin?.verifyCode) {
        navigate(CUSTOMER_ROUTER_PATH.FORGOT_EDIT_PASSWORD);
      } else {
        <ErrorNotification
          message={"Tài khoản hoặc mật khẩu không chính xác"}
        />;
      }
    }
  };
  return (
    <div className="forgot-password_code">
      <FormWrap className="forgot-password_code-form">
        <h1 className="forgot-password_title">Authentication code input</h1>
        <p className="forgot-password_sub">
          <span>Email@gmail.com</span>
          <span>
            Please enter the 6-digit number you received in half-width
            characters (the verification number is valid for 1 minute).
          </span>
        </p>
        <div className="forgot-password_code-input">
          <FormInput
            name={"code"}
            formItemProps={{
              className: "forgot-password_code-input-confirm",
            }}
            inputProps={{
              placeholder: "Please enter the code in the email form ",
            }}
          />
        </div>
        <div className="forgot-password_code-link">
          <Link to={"/"}>Authentication code reissued</Link>
        </div>
        <div className="forgot-password_code-button">
          <CustomButton
            content={"Certification"}
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
