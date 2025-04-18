/**
 * utility functions encapsulated
 */

export const formatCurrency = (num: number) => {
  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
  }).format(num);
};

export const formatNumber = (num: number) => {
  return new Intl.NumberFormat("zh-CN").format(num);
};

export const formatPercent = (num: number) => {
  return new Intl.NumberFormat("zh-CN", {
    style: "percent",
    minimumFractionDigits: 2,
  }).format(num);
};

export const formatDateTime = (date: Date = new Date()) => {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
    .format(date)
    .replace(/\//g, "-");
};

export const formatDate = (date: Date = new Date()) => {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(date)
    .replace(/\//g, "-");
};

export const formatTime = (date: Date = new Date()) => {
  return new Intl.DateTimeFormat("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
};

export const formatMonth = (date: Date = new Date()) => {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "long",
  }).format(date);
};

export const formatDay = (date: Date = new Date()) => {
  return new Intl.DateTimeFormat("zh-CN", {
    weekday: "long",
  }).format(date);
};

export const formatYear = (date: Date = new Date()) => {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
  }).format(date);
};

export const formatWeek = (date: Date = new Date()) => {
  return new Intl.DateTimeFormat("zh-CN", {
    weekday: "long",
    day: "numeric",
  }).format(date);
};
