export type User = {
  name: string | null;
  email: string | null;
  phone: string | null;
};

export type UserSessionState = {
  user: User | null | undefined;
  accessToken: string | null | undefined;
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string | null | undefined;
};
