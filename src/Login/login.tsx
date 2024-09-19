import { Form, Image } from "antd";
import { Checkbox } from "antd";
import React from "react";
import "./login.scss";
import FormWrap from "../Components/Form/FormWrap/index";
import { FormInput } from "../Components/Form/FormInput/index";
import { CustomButton } from "../Components/buttons/CustomButton";
const options = [{ label: "ログインしたままにする", value: "1" }];

const Login = () => {
  const [form] = Form.useForm();
  return (
    <div className="login">
      <div className="login_logo">
        <Image
          src="https://cafefcdn.com/thumb_w/640/203337114487263232/2022/3/23/photo1648012210921-16480122111121649082453.jpg"
          className="login_logo_image"
        />
        <p className="login_logo_title">ログイン</p>
      </div>
      <div className="login_form">
        <FormWrap form={form} className="login_form-wrap">
          <div className="login_form-header">
            <p className="login_form-header-content">ログイン</p>
          </div>
          <div className="login-form-email">
            <p className="login_form-email-label">Eメールまたは携帯電話番号</p>
            <FormInput
              name={"email"}
              formItemProps={{
                className: "login_form-email-input",
              }}
            />
          </div>
          <div className="login-form-pw">
            <p className="login_form-pw-label">パスワード</p>
            <FormInput
              name={"password"}
              formItemProps={{
                className: "login_form-pw-input",
              }}
            />
          </div>

          <div className="login_form-login">
            <CustomButton
              content="ログイン"
              buttonProps={{
                className: "login_form-login-btn",
              }}
            />
          </div>

          <p className="login_form-p1">
            ●●●の<a href="/">利用規約</a>と
            <a href="/">プライバシー規約に同意</a>
            いただける場
            <br />
            合はログインしてください。
          </p>
          <Checkbox.Group className="login_form-cb" options={options} />
          <div className="login_form-btnlogin">
            <CustomButton
              content="今すぐ、ご登録ください。"
              buttonProps={{
                className: "login_form-btnlogin-btn",
              }}
            />
          </div>
        </FormWrap>
      </div>
    </div>
  );
};
export default Login;