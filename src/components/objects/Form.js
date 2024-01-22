import * as React from "react"
import { useForm } from "react-hook-form"
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import LazyLoad from "react-lazy-load"

export default function Form() {
  // destructure react-hook-form hook into functinos that we need -> register, handleSubmit, errors and watch
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = data => console.log(data)
  const handleErrors = errors => {}

  return (
    <LazyLoad>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit, handleErrors)}>
          {/* First Name */}
          <p className="label">First Name</p>
          <input
            className="inputField"
            type="text"
            name="firstName"
            {...register("firstName", { required: "name needed" })}
          />
          <p className="error">{errors.firstName?.message}</p>

          {/* Last Name */}
          <p className="label">Last Name</p>
          <input
            className="inputField"
            type="text"
            name="lastName"
            {...register("lastName", { required: "name needed" })}
          />
          <p className="error">{errors.lastName?.message}</p>

          {/* Email */}
          <p className="label">Email</p>
          <input
            className="inputField"
            type="email"
            name="email"
            {...register("email", {
              required: "please enter an email address",
            })}
          />
          <p className="error">{errors.email?.message}</p>

          {/* Message */}
          <p className="label">Message</p>
          <textarea
            className="inputField-Large"
            type="text"
            name="message"
            {...register("message", { required: "please enter a message" })}
          />
          <p className="error">{errors.message?.message}</p>

          <input type="submit" className="formButton" />
        </form>
      </FormWrapper>
    </LazyLoad>
  )
}

const slideRight = keyframes`
  from { opacity: 0;  transform: translateX(80px); filter: blur(10px); }
  to { opacity: 1;   transform: translateX(0px);  filter: blur(0px)}
`

const FormWrapper = styled.div`
  background-color: ${themes.secondaryBackground};
  padding: 30px;
  border: 0.5px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 7px 22px rgba(0, 0, 0, 0.1);

  opacity: 0;
  animation: ${slideRight} 1s forwards;

  form {
    display: grid;
    gap: 20px;
  }

  .inputField {
    padding: 10px;
    border-radius: 10px;
    border: 0;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    font-size: 15px;

    opacity: 0;
    animation: ${slideRight} 1s 0.6s forwards;
  }

  .inputField-Large {
    padding: 10px;
    border-radius: 10px;
    border: 0;
    min-height: 140px;
    resize: none;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    font-size: 15px;

    opacity: 0;
    animation: ${slideRight} 1s 0.6s forwards;
  }

  .formButton {
    background-color: ${themes.yellow};
    color: ${themes.text1};
    box-shadow: 0px 13px 30px rgba(0, 0, 0, 0.1);
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    width: fit-content;
    padding: 18px 22px;
    border-radius: 50px;
    font-weight: 900;
    font-size: 20px;
    border: 0;

    opacity: 0;
    animation: ${slideRight} 1s 0.6s forwards;

    :hover {
      box-shadow: 0px 13px 30px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  }

  .label {
    font-size: 14px;

    opacity: 0;
    animation: ${slideRight} 1s 0.2s forwards;
  }

  .error {
    font-size: 12px;
    color: red;
  }
`
