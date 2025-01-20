"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { AuthActions } from "../auth/utils";

type LoginData = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginData>();

  const { login, storeToken } = AuthActions();

  const onSubmit = (data: LoginData) => {
    login(data.email, data.password)
      .json((json) => {
        storeToken(json.access, "access");
        storeToken(json.refresh, "refresh");
      })
      .catch((err) => {
        setError("root", { type: "manual", message: err.json.detail });
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-96 border-2 border-blue-600 rounded-lg p-4 grid grid-flow-row auto-rows-max gap-4"
    >
      <h1 className="font-bold text-2xl">Sign In</h1>
      <input
        type="email"
        className="border border-slate-500 rounded p-2"
        placeholder="EMail"
        {...register("email", { required: true })}
      />
      {errors.email && (
        <span className="text-sm text-red-600">Email is required.</span>
      )}
      <input
        type="password"
        className="border border-slate-500 rounded p-2"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      {errors.password && (
        <span className="text-sm text-red-600">Password is required.</span>
      )}
      <button type="submit" className="rounded bg-slate-500 p-2 text-white">
        Submit
      </button>
    </form>
  );
}
