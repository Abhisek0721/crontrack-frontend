

export interface NewUser {
    full_name: string,
    email: String,
    password: String,
}

export interface NewUSerResponse {
    access_token: String,
    user: {
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
    user_workspace: Boolean | null
  
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
    access_token: String,
    user: {
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
    
    user_workspace: Boolean | null
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