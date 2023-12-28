import React, { useState } from "react";
import { useForm } from "react-hook-form";

const TodoList = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm();
  console.log(watch());
  const onValid = (data: any) => {
    if (data.password !== data.password1) {
      setError(
        "passWord1",
        { message: "Password is not the same..." },
        { shouldFocus: true }
      );
    }
    setValue("email", "");
  };

  // console.log(register("todo"));
  // const [toDo, setTodo] = useState("");
  // const onChange = (event: React.FormEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = event;
  //   setTodo(value);
  // };

  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(toDo);
  // };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9]+@naver.com/gm,
              message: "Only naver.com email allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message as string}</span>
        <input
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message as string}</span>
        <input
          {...register("lastname", {
            required: "Write Here",
            validate: (value) =>
              value.includes("test") ? "No test allowed" : true,
          })}
          placeholder="Last Name"
        />
        <span>{errors?.lastname?.message as string}</span>
        <input
          {...register("username", { required: true, minLength: 10 })}
          placeholder="User Name"
        />
        <span>{errors?.username?.message as string}</span>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short",
            },
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message as string}</span>
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short",
            },
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message as string}</span>
        <span>{errors?.passWord1?.message as string}</span>
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
