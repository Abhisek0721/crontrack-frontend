

export interface NewUser {
    full_name: string,
    email: String,
    password: String,
}

export interface NewUSerResponse {
    id: String,
    email: String,
    full_name: String,
    verified: Boolean,
    google_id: null | String,
    message: String
    profile_picture: null | String,
    bio: null | String,
    created_at: Date
    updated_at: Date
  
}

export interface ResendverifyUser {
    email: String
}

export interface verificationToken {
    "verification_token": String;
}

export interface verifyUserResponse {
    data: {
        verified: Boolean
    }
    message: String
}

export interface LoginUser {
    email: String,
    password: String
  }
export interface LoginuserResponse {
    user: LoginUser,
    token: string
  }
  

export interface sendForgotPassword{
    email: String
}

export interface sendForgotPasswordResponse{
    data: null,
    message: String,
}

export interface changeForgotPassword {
    verification_token: String,
    new_password: String
}

export interface changeForgotPasswordResponse{
    data: null,
    message: String
}