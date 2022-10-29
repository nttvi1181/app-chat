import React, { useState } from "react";
import Styles from "./style.module.scss";
import { Tabs, Button, Spin } from "antd";
import CustomInput from "@/components/common/customInput/CustomInput";
import { MdPhoneIphone } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/common/Loading";
import clsx from "clsx";
import withAuth from "../../components/common/WithAuth/WithAuth";

function Login() {
  const { onLogin, loading } = useAuth();

  const [forgotPassword, setForgotPassword] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      phone: "0345475176",
      password: "12345678",
    },
    onSubmit: (values) => {
      onLogin(values);
    },
  });

  return (
    <>
      {loading && <Loading />}
      <div className={clsx(Styles.main, loading && Styles.loading)}>
        <div className={`${Styles.headerTitle} mt-40`}>Zalo</div>
        <div className={Styles.title}>
          Đăng nhập tài khoản Zalo để kết nối với ứng dụng Zalo Web
        </div>
        <div className={`${Styles.form} mt-20`}>
          <Tabs
            defaultActiveKey="1"
            tabBarStyle={{
              width: "100%",
            }}
            size="large"
          >
            <Tabs.TabPane tab="VỚI MÃ QR" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="VỚI SỐ ĐIỆN THOẠI" key="2">
              <form onSubmit={formik.handleSubmit}>
                <div className={Styles.inputForm}>
                  <CustomInput
                    label={<MdPhoneIphone size={20} />}
                    placeholder="Số điện thoại"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    name="phone"
                  />
                </div>
                <div className={Styles.inputForm}>
                  <CustomInput
                    label={<RiLockPasswordFill size={20} />}
                    placeholder="Mật khẩu"
                    type="password"
                    onChange={formik.handleChange}
                    name="password"
                    value={formik.values.password}
                  />
                </div>
                <div className={`${Styles.btn} ${Styles.btnLogin}`}>
                  Đăng nhập với mật khẩu
                </div>
                <button
                  className={`${Styles.btn} ${Styles.btnRequest}`}
                  type="submit"
                >
                  Login
                </button>
                <div style={{ textAlign: "center", marginTop: "5px" }}>
                  Quên mật khẩu ?
                </div>
              </form>
            </Tabs.TabPane>
          </Tabs>
        </div>
        <div className={Styles.footerNoAccount}>
          Bạn chưa có tài khoản ? <Link to="/test">Đăng ký ngay</Link>
        </div>
      </div>
    </>
  );
}

export default withAuth(Login);
