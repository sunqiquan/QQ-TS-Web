/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * mock data
 */

const data: any = {
  "user/login": {
    code: 0,
    data: "EVJhDGCIOIJIUZIINIISINRSCCI6IKDXVCI9.EVJKYXRAIID7INVZZXIJDWCIUIJOCHRWCZOVL3DVCYSNOGLWYXLVYMDLYSRZLmNVOSVDXNWD3JBYWWamtGL2TFnzwvBweVJovultbmlwc2xaZldobkpldVoucGSnIiwiX2LKIiOINiNIYZMMWIZMDA3MZJiMiC2OTAMMAZIIWIdXNICKIKIIOXMDAWMDE3LCI1C2VVTmF+ZSI6IIRLc30iLCJ1c2vyRW1hawwiOiIsdWN5OGIhCMUY29tIIWIZGWWdELKIjOININIYZMXYWUZMDA3MzJjMic20TdmMWY@Iiwic3RhdGUi0jIsInJvbGU1OjEsInJvbGWaXNBIjOINjNIYZMODCZMDA3MZJjMjC2OTdMWU2IIWIY3JIYXRISWOIOjB9LCIPYXO1OjE20DQWNTIBMDISIMV4CI6MTY4NDA3NDAWOHB.EyfVMYrxwoIejkokfcJbjZlY83DRCFfSYclgC40TOLU",
    msg: "success",
  },

  "user/getUserInfo": {
    code: 0,
    data: {
      _id: "63bc321b300732c27697f203",
      userId: 1000017,
      userName: "Sean",
      userEmail: "user@email.com",
      deptId: "63bc31ae300732c27697f1f4",
      state: 1,
      mobile: "13888888888",
      job: "TestJob",
      role: 1,
      roleList: "63bc3187300732c27697f1e6",
      createId: 0,
      deptName: "TestDpt",
      userImg: "/imgs/headimg.svg",
    },
    msg: "success",
  },

  "order/workbench/getReportData": {
    code: 0,
    data: {
      driverCount: 278600,
      totalMoney: 3984200,
      orderCount: 130600,
      cityNum: 78,
    },
    msg: "success",
  },

  "order/workbench/getLineChartData": {
    code: 0,
    data: {
      label: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      order: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290],
      money: [
        8900, 9320, 9010, 9340, 12900, 13300, 13200, 8900, 9320, 9010, 9340,
        12900,
      ],
    },
    msg: "success",
  },

  "order/workbench/getPieAgeChartData": {
    code: 0,
    data: [
      { value: 335, name: "Under 18" },
      { value: 310, name: "18-24" },
      { value: 234, name: "25-29" },
      { value: 135, name: "30-34" },
      { value: 548, name: "35-39" },
      { value: 679, name: "40-49" },
      { value: 309, name: "50+" },
    ],
    msg: "success",
  },

  "order/workbench/getPieCityChartData": {
    code: 0,
    data: [
      { value: 235, name: "Shanghai" },
      { value: 410, name: "Beijing" },
      { value: 634, name: "Guangzhou" },
      { value: 335, name: "Shenzhen" },
      { value: 248, name: "Hangzhou" },
      { value: 579, name: "Nanjing" },
      { value: 509, name: "Chengdu" },
    ],
    msg: "success",
  },

  "order/workbench/getRadarChartData": {
    code: 0,
    data: {
      indicator: [
        { name: "Sales", max: 6500 },
        { name: "Administration", max: 16000 },
        { name: "Information Technology", max: 30000 },
        { name: "Customer Support", max: 38000 },
        { name: "Development", max: 52000 },
        { name: "Marketing", max: 25000 },
      ],
      value: [4300, 10000, 28000, 35000, 50000, 19000],
    },
    msg: "success",
  },
};

const getData = (key: string): any => {
  return data[key];
};

export default getData;
