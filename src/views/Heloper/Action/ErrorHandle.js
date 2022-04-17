import toast from "react-hot-toast";

export const errorHandle = (error, Navigate) => {
  console.log(error);
  if (error.toString() === "Error: Request failed with status code 401")
    Navigate("/login");
  else toast.error(error.toString());
};
