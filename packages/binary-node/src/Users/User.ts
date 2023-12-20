export interface User {
  id: string;
  name: string;
  email: string;
  token: string;
  password: string;
}

// because express User interface is empty
declare global {
  namespace Express {
    interface User {
      id: string;
      name: string;
      email: string;
      token: string;
      password: string;
    }
  }
}
