class ClassAuthApi {
  loginUser({ email, password }: { email: string; password: string }) {
    if (email === "Janek" && password === "qwe") {
      return Promise.resolve({
        data: { message: "message" },
        userData: {
          id: 2,
          level: 1,
          email: `email.com`,
          first_name: "Janek",
          last_name: "last",
        },
      });
    }
    if (email === "Marysia" && password === "qwe") {
      return Promise.resolve({
        data: { message: "message" },
        userData: {
          id: 2,
          level: 2,
          email: `email.com`,
          first_name: "Marysia",
          last_name: "last",
        },
      });
    }
    if (email === "Karol" && password === "qwe") {
      return Promise.resolve({
        data: { message: "message" },
        userData: {
          id: 2,
          level: 3,
          email: `email.com`,
          first_name: "Karol",
          last_name: "last",
        },
      });
    }
    return Promise.reject({ data: { message: "error" } });
  }
}

const AuthApi = new ClassAuthApi();

export default AuthApi;
