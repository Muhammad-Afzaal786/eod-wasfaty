export const hasRule = () => {
  let role = ["admin", "inspector"];
  let userData = JSON.parse(localStorage.getItem("loginUser"));
  let token = localStorage.getItem("userData");
  if (token && userData?.type) {
    let users = role?.filter((user) => user === userData?.type);
    return users[0];
  } else {
    return false;
  }
};
