export interface NewUser {
  full_name: string;
  email: string;
  password: string;
}

export interface NewUSerResponse {
  id: string;
  email: string;
  full_name: string;
  verified: boolean;
  google_id: null | string;
  message: string;
  profile_picture: null | string;
  bio: null | string;
  created_at: Date;
  updated_at: Date;
}

export interface ResendverifyUser {
  email: string;
}

export interface verificationToken {
  verification_token: string;
}

export interface verifyUserResponse {
  data: {
    verified: boolean;
  };
  message: string;
}

export interface LoginUser {
  email: string;
  password: string;
}
export interface LoginuserResponse {
  access_token: string;
  user: {
    id: string;
    email: string;
    full_name: string;
    verified: boolean;
    google_id: null | string;
    message: string;
    profile_picture: null | string;
    bio: null | string;
    created_at: Date;
    updated_at: Date;
  };
  user_workspace: Array<{
    id: string;
    role: string;
    workspace: {
      created_at: string;
      created_by: string;
      workspaceId: string;
      id: string;
      workspace_name: string;
    };
  }> | null;
}

export interface sendForgotPassword {
  email: string;
}

export interface sendForgotPasswordResponse {
  data: null;
  message: string;
}

export interface changeForgotPassword {
  verification_token: string;
  new_password: string;
}

export interface changeForgotPasswordResponse {
  data: null;
  message: string;
}

export interface user_Workspace {
  user_workspace: Array<{
    id: string;
    role: string;
    workspace: {
      created_at: string;
      created_by: string;
      workspaceId: string;
      id: string;
      workspace_name: string;
    };
  }> | null;
}

export interface verifyGoogleToken {
  code: string
}