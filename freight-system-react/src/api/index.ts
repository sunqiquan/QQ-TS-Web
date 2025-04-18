import request from "@/utils/request";
import { LoginType } from "@/types/api";

export default {
  login(params: LoginType.params) {
    return request.post("/user/login", params, { showError: false });
  },
};
