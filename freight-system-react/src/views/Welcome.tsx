import { useEffect } from "react";
import request from "@/utils/request";

const Welcome = () => {
  useEffect(() => {
    request
      .post("/user/login", {})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};

export default Welcome;
