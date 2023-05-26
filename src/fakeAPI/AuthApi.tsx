class ClassAuthApi {
  loginUser({ email, password }: { email: string; password: string }) {
    if (email === "123" && password === "qwe") {
      return Promise.resolve({
        data: { message: "message" },
        userData: {
          id: 2,
          level: 1,
          email: `email.com`,
          first_name: "first",
          last_name: "last",
        },
      });
    }
    if (email === "1234" && password === "qwe") {
      return Promise.resolve({
        data: { message: "message" },
        userData: {
          id: 2,
          level: 2,
          email: `email.com`,
          first_name: "first",
          last_name: "last",
        },
      });
    }
    if (email === "12345" && password === "qwe") {
      return Promise.resolve({
        data: { message: "message" },
        userData: {
          id: 2,
          level: 3,
          email: `email.com`,
          first_name: "first",
          last_name: "last",
        },
      });
    }
    return Promise.reject({ data: { message: "error" } });
  }
}

const AuthApi = new ClassAuthApi();

export default AuthApi;
