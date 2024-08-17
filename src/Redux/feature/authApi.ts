import { apiSlice } from "../api/apiSlice";
import type { 
  NewUSerResponse,
  LoginUser,
  LoginuserResponse,
  NewUser,
  ResendverifyUser,
  verifyUserResponse,
  verificationToken,
  sendForgotPassword,
  sendForgotPasswordResponse,
  changeForgotPassword,
  changeForgotPasswordResponse
} from "../util/InterfaceTypes";

//build.mutation<Response_Type, Arg_Type> Response_Type matlab api hit krne ke baad jo data milega uska type and Arg_type ka matlab body me jo data jayga uska type

export const authAPi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    userSignUp: build.mutation<NewUSerResponse, NewUser>({
      query: (body) => ({
        url: "/api/v1/auth/signup",
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body
      }),
    }),

    userResendVerificationMail: build.mutation<void,ResendverifyUser>({
      query: (body) => ({
        url: "api/v1/auth/resend-verification-email",
        method: "Post",
        body
      }),
    }),

    userVerify: build.mutation<verifyUserResponse,verificationToken>({
      query: (body) => ({
        url: "/api/v1/auth/verify-user",
        method: "PATCH",
        body
      }),
    }),

    userSignIn: build.mutation<LoginuserResponse,LoginUser>({
      query: (body) => ({
        url: "/api/v1/auth/login",
        method: "POST",
        body
      }),
    }),

    userSendforgotPassword: build.mutation<sendForgotPasswordResponse,sendForgotPassword>({
      query: (body) => ({
        url: "/api/v1/auth/send-forgot-password-email",
        method: "POST",
        body
      })
    }),

    userChangePassword: build.mutation<changeForgotPasswordResponse,changeForgotPassword>({
      query: (body) => ({
        url: "/api/v1/auth/change-forgot-password",
        method: "PATCH",
        body
      })
    })



  }),
});

export const {
  useUserSignUpMutation,
  useUserResendVerificationMailMutation,
  useUserSignInMutation,
  useUserVerifyMutation,
  useUserSendforgotPasswordMutation,
  useUserChangePasswordMutation,
} = authAPi;
