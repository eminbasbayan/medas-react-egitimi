import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Zorunlu alan!")
        .email("Geçersiz bir e-mail girdiniz."),
      password: Yup.string()
        .required("Zorunlu alan!")
        .min(6, "Şifre en az 6 karakter olmalıdır"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-item">
        <label htmlFor="email">E-posta:</label>
        <br />
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="email"
          className="border-2 border-red-400"
        />
        <br />
        {formik.touched.email && formik.errors.email ? (
          <b>{formik.errors.email}</b>
        ) : (
          ""
        )}
      </div>
      <div className="form-item">
        <label htmlFor="password">Şifre: </label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          className="border-2 border-red-400"
        />
        <br />
        {formik.touched.password && formik.errors.password ? (
          <b>{formik.errors.password}</b>
        ) : (
          ""
        )}
      </div>
      <button>Giriş Yap</button>
    </form>
  );
};

export default LoginPage;
