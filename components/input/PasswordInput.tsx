"use client";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

type PasswordInputProps = {
  placeholder?: string;
  id?: string;
  name?: string;
};

export default function PasswordInput({
  placeholder = "Password",
  id = "password",
  name = "password",
}: PasswordInputProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={show ? "text" : "password"}
        id={id}
        name={name}
        placeholder={placeholder}
        required
        className="text-sm leading-6 text-gray placeholder:text-gray font-inter w-full bg-white border border-[#B6C3C8] p-3 sm:p-4 focus:outline-0 pr-10"
      />

      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-body"
        aria-label={show ? "Hide password" : "Show password"}
      >
        {show ? (
          <EyeSlashIcon className="w-5 h-5" />
        ) : (
          <EyeIcon className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}