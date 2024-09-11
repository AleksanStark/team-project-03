import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import toast from "react-hot-toast";

import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { LuUpload } from "react-icons/lu";
import css from "./ModalSettind.module.css";
import clsx from "clsx";
import sprite from "../../../images/sprite.svg";

import {
  updateAvatar,
  updateUserData,
  updatePassword,
} from "../../../redux/auth/operations";

const UserSchema = Yup.object().shape({
  username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").optional(),
  email: Yup.string().email("Must be a valid email!").optional(),
  oldPassword: Yup.string().min(8, "Too Short!").optional(),
  newPassword: Yup.string().min(8, "Too Short!").max(64, "Too Long!"),
  repeatPassword: Yup.string()
    .min(8, "Too Short!")
    .max(64, "Too Long!")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
  gender: Yup.string().oneOf(["woman", "man"]).optional(),
});

export default function ModalSetting({
  isOpen,
  closeModal,
  user,
  imageDefault,
}) {
  const dispatch = useDispatch();

  const [hideEyeOld, setHideEyeOld] = useState(false);
  const [hideEyeRepeat, setHideEyeRepeat] = useState(false);
  const [hideEyeNew, setHideEyeNew] = useState(false);

  //=============StateForSowAndHiddenPassword===================
  const [isOldPassword, setOldPassword] = useState("password");
  const [isRepeatPassword, setRepeatPassword] = useState("password");
  const [isNewPassword, setNewPassword] = useState("password");
  const handleVisiblePasswordRepeatPassword = () => {
    if (isRepeatPassword === "password") {
      setRepeatPassword("text");
      setHideEyeRepeat(true);
    } else {
      setRepeatPassword("password");
      setHideEyeRepeat(false);
    }
  };
  const handleVisiblePasswordNewPassword = () => {
    if (isNewPassword === "password") {
      setNewPassword("text");
      setHideEyeNew(true);
    } else {
      setNewPassword("password");
      setHideEyeNew(false);
    }
  };
  const handleVisiblePasswordOldPassword = () => {
    if (isOldPassword === "password") {
      setOldPassword("text");
      setHideEyeOld(true);
    } else {
      setOldPassword("password");
      setHideEyeOld(false);
    }
  };
  //============================================================

  //===========EffectModal===========
  const modalRef = useRef(null);
  const formikRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
        formikRef.current && formikRef.current.resetForm();
      }
    };
    const handleMouseDown = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
        formikRef.current && formikRef.current.resetForm();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleMouseDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [isOpen, closeModal]);

  //=================================

  const changeHandler = async (e, setFieldValue) => {
    const file = e.target.files[0];

    if (file) {
      setFieldValue("photo", file);

      try {
        await dispatch(updateAvatar({ photo: file }));
        toast.success("Photo successfully updated");
      } catch (error) {
        toast.error("Failed to update photo");
        console.error("Failed to update photo:", error);
      }
    }
  };

  const handleSubmit = async (values, actions) => {
    if (values.oldPassword) {
      if (values.newPassword !== values.repeatPassword) {
        toast.error("New passwords do not match");
        return;
      }
      try {
        await dispatch(
          updatePassword({
            oldPassword: values.oldPassword,
            newPassword: values.newPassword,
          })
        ).unwrap();
        toast.success("Password successfully updated");
      } catch (error) {
        toast.error("Failed to update password");
        console.error("Failed to update password:", error);
        actions.setErrors({ submit: error.message });
        return;
      }
    }
    try {
      const result = await dispatch(
        updateUserData({
          gender: values.gender,
          name: values.username,
          email: values.email,
        })
      ).unwrap();
      if (values.newPassword) {
        toast.success("The password success update !");
      }
      if (values.name) {
        toast.success("The name success update !");
      }
      if (values.email !== user?.email) {
        toast.success("The email success update !");
      }
      if (values.gender !== user?.gender) {
        toast.success("The gender success update !");
      }
      if (result) {
        actions.resetForm();
        closeModal();
      }
    } catch (error) {
      toast.error("Something went wrong :( Try again later.");
      console.error("Failed to update user data:", error);
      actions.setErrors({ submit: error.message });
      closeModal(true);
    }
  };

  return (
    <div className={clsx(css.backdrop, { [css["is-hidden"]]: !isOpen })}>
      <div className={css.modal} ref={modalRef}>
        <div className={css["title-block"]}>
          <div className={css["title-container"]}>
            <p className={css["main-title"]}>Setting</p>
            <button
              type="button"
              className={css["button-close"]}
              onClick={() => {
                closeModal();
                formikRef.current && formikRef.current.resetForm();
              }}
            >
              <IoMdClose />
            </button>
          </div>
        </div>

        <Formik
          innerRef={formikRef}
          initialValues={{
            username: user?.name || "",
            email: user?.email || "",
            oldPassword: "",
            newPassword: "",
            repeatPassword: "",
            gender: user?.gender || "woman",
          }}
          onSubmit={handleSubmit}
          validationSchema={UserSchema}
          key={isOpen ? "open" : "closed"}
        >
          {({ setFieldValue, values, errors, touched }) => (
            <Form className={css.form}>
              <div className={css["photo-block"]}>
                <p className={css["title"]}>Your photo</p>
                <div className={css["container-photo"]}>
                  {!user?.photo ? (
                    <p className={css["first-letter"]}>{imageDefault()}</p>
                  ) : (
                    <img
                      src={imageDefault()}
                      className={css.image}
                      width="80"
                      height="80"
                      alt="user"
                    />
                  )}
                  <label
                    htmlFor="upload-photo"
                    className={css["upload-button"]}
                  >
                    <LuUpload />
                    Upload a photo
                    <input
                      type="file"
                      className={css["upload-input"]}
                      accept="image/*"
                      onChange={(e) => changeHandler(e, setFieldValue)}
                      id="upload-photo"
                    />
                  </label>
                </div>
              </div>
              <div className={css.block}>
                <div className={css["block-inputs"]}>
                  <div className={css.check}>
                    <p className={css["title"]}>Your gender identity</p>
                    <div className={css["check-box-container"]}>
                      <label className={css["check-box-label"]}>
                        <Field
                          className={css["check-box-input"]}
                          type="radio"
                          name="gender"
                          value="woman"
                          checked={values.gender === "woman"}
                          onChange={() => setFieldValue("gender", "woman")}
                        />
                        Woman
                      </label>
                      <label className={css["check-box-label"]}>
                        <Field
                          className={css["check-box-input"]}
                          type="radio"
                          name="gender"
                          value="man"
                          checked={values.gender === "man"}
                          onChange={() => setFieldValue("gender", "man")}
                        />
                        Man
                      </label>
                    </div>
                  </div>
                  <div className={css["info-container"]}>
                    <div className={css["input-container"]}>
                      <p className={css.title}>Your name</p>
                      <Field
                        className={clsx(css["info-input"], {
                          [css["info-input-error"]]:
                            errors.username && touched.username,
                        })}
                        type="text"
                        name="username"
                        placeholder="user_name"
                      />
                      <ErrorMessage
                        className={css.error}
                        name="username"
                        component="span"
                      />
                    </div>
                    <div className={css["input-container"]}>
                      <p className={css.title}>E-mail</p>
                      <Field
                        className={clsx(css["info-input"], {
                          [css["info-input-error"]]:
                            errors.email && touched.email,
                        })}
                        type="email"
                        name="email"
                        placeholder="user_email@mail.com"
                      />
                      <ErrorMessage
                        className={css.error}
                        name="email"
                        component="span"
                      />
                    </div>
                  </div>
                </div>
                <div className={css["password-container"]}>
                  <p className={css.title}>Password</p>
                  <div className={css["password-box"]}>
                    <label className={css["password-label"]}>
                      Outdated password:
                    </label>
                    <Field
                      type={isOldPassword}
                      name="oldPassword"
                      className={clsx(css["info-input"], {
                        [css["info-input-error"]]:
                          errors.oldPassword && touched.oldPassword,
                      })}
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      className={css["eyes-hide"]}
                      onClick={handleVisiblePasswordOldPassword}
                    >
                      <svg className={css.icon}>
                        <use
                          href={
                            sprite + (hideEyeOld ? "#eye-show" : "#eye-hide")
                          }
                        />
                      </svg>
                    </button>
                    <ErrorMessage
                      className={css.error}
                      name="oldPassword"
                      component="span"
                    />
                  </div>
                  <div className={css["password-box"]}>
                    <label className={css["password-label"]}>
                      New Password:
                    </label>
                    <Field
                      type={isNewPassword}
                      name="newPassword"
                      className={clsx(css["info-input"], {
                        [css["info-input-error"]]:
                          errors.newPassword && touched.newPassword,
                      })}
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      className={css["eyes-hide"]}
                      onClick={handleVisiblePasswordNewPassword}
                    >
                      <svg className={css.icon}>
                        <use
                          href={
                            sprite + (hideEyeNew ? "#eye-show" : "#eye-hide")
                          }
                        />
                      </svg>
                    </button>
                    <ErrorMessage
                      className={css.error}
                      name="newPassword"
                      component="span"
                    />
                  </div>
                  <div className={css["password-box"]}>
                    <label className={css["password-label"]}>
                      Repeat new password:
                    </label>
                    <Field
                      type={isRepeatPassword}
                      name="repeatPassword"
                      className={clsx(css["info-input"], {
                        [css["info-input-error"]]:
                          errors.repeatPassword && touched.repeatPassword,
                      })}
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      className={css["eyes-hide"]}
                      onClick={handleVisiblePasswordRepeatPassword}
                    >
                      <svg className={css.icon}>
                        <use
                          href={
                            sprite + (hideEyeRepeat ? "#eye-show" : "#eye-hide")
                          }
                        />
                      </svg>
                    </button>
                    <ErrorMessage
                      className={css.error}
                      name="repeatPassword"
                      component="span"
                    />
                  </div>
                </div>
              </div>
              <button className={css["button-modal"]} type="submit">
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
