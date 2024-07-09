import React, { createContext } from "react";

const userContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

export default userContext;