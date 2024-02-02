export interface APIResponse {
  data: {
    accessToken: [];
    refreshToken: [];
    userInfo: [];
    menuList: [];
  };
  isSuccess: boolean;
  message: {
    code: string;
    description: string;
    details: string;
  };
  totalPages: number;
}
