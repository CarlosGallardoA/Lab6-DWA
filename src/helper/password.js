import hash from "object-hash";

export const hashPassword = (password) => {
    return hash(password);
};