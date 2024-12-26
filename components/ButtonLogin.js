"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";

const ButtonLogin = ({ session, extraStyle }) => {
  const dashboardURL = "/dashboard";
  if (session) {
    return (
      <Link
        href={dashboardURL}
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        Welcome Back {session.user.name || "Freund"}
      </Link>
    );
  }

  return (
    <button
      href="/api/auth/signin"
      className={`btn btn-secondary ${extraStyle ? extraStyle : ""}`}
      onClick={() => {
        signIn(undefined, { callbackUrl: dashboardURL });
      }}
    >
      Login
    </button>
  );
};

export default ButtonLogin;
