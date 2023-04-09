import { stagingUsers, productionUsers, role } from "./users";

const users =
  Cypress.env("APP_ENV") === "production" ? productionUsers : stagingUsers;


const getUnkownUser = () => users.find((user) => user.role === role.unknown);

/**
 * @param {role} - role of the user
 */

const getStandardUser = () =>
  users.find((user) => user.role === role.standardUser);

const getProblemUser = () =>
  users.find((user) => user.role === role.problemUser);

  export {
    role,
    getProblemUser,
    getUnkownUser,
    getStandardUser,
  };