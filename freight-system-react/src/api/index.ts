import request from "@/utils/request";
import { LoginType, User, Workbench } from "@/types/api";

export default {
  login(params: LoginType.params) {
    return request.post<string>("/user/login", params, { showError: false });
  },

  getUserInfo() {
    return request.get<User.UserItem>("/user/getUserInfo");
  },

  getReportData() {
    return request.get<Workbench.ReportData>("/order/workbench/getReportData");
  },

  getLineChartData() {
    return request.get<Workbench.LineChartData>(
      "/order/workbench/getLineChartData"
    );
  },

  getPieAgeChartData() {
    return request.get<Workbench.PieChartData[]>(
      "/order/workbench/getPieAgeChartData"
    );
  },

  getPieCityChartData() {
    return request.get<Workbench.PieChartData[]>(
      "/order/workbench/getPieCityChartData"
    );
  },

  getRadarChartData() {
    return request.get<Workbench.RadarChartData>(
      "/order/workbench/getRadarChartData"
    );
  },
};
