/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */
// define interface type

export interface Result<T = any> {
  code: number;
  data: T;
  msg: string;
}

export namespace LoginType {
  export interface params {
    userName: string;
    userPwd: string;
  }
}

// user manage
export namespace User {
  export interface UserItem {
    _id: string;
    userId: number;
    userName: string;
    userEmail: string;
    deptId: string;
    state: number;
    mobile: string;
    job: string;
    role: number;
    roleList: string;
    createId: number;
    deptName: string;
    userImg: string;
  }
}

// workbench data
export namespace Workbench {
  export interface ReportData {
    driverCount: number;
    totalMoney: number;
    orderCount: number;
    cityNum: number;
  }

  export interface LineChartData {
    label: string[];
    order: number[];
    money: number[];
  }

  export interface PieChartData {
    value: number;
    name: string;
  }

  export interface RadarChartData {
    indicator: Array<{ name: string; max: number }>;
    value: number[];
  }
}
