import toast from "react-hot-toast";

export const errorHandle = (error, navigate) => {
  if (error.toString() === "Error: Request failed with status code 401")
    navigate("/login");
  else toast.error("Something went  wrong!");
};
