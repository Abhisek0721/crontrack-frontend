

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

export interface verifyUserResponse {
    verified: Boolean
}

export interface LoginUser {
    email: String,
    password: String
  }
export interface LoginuserResponse {
    user: LoginUser,
    token: string
  }
  