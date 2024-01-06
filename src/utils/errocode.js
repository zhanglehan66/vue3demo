export const errorCodeType = function (code) {
  let msg = "";
  switch (code) {
    case "401":
      msg = "无法访问系统资源";
      break;
    case "403":
      msg = "当前操作没有权限";
      break;
    case "404":
      msg = "访问资源不存在";
      break;
    case "default":
      msg = "系统未知错误";
      break;
    default:
      return "未知错误，请联系管理员";
  }
  return msg;
};
