type User = {
  id: string;
  email: string;
  displayName: string;
};

type LoginDTO = {
  email: string;
  password: string;
};

type SignupDTO = {
  fullName: string;
  email: string;
  password: string;
};

export type { User, LoginDTO, SignupDTO };
