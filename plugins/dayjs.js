import dayjs from "dayjs";
import Vue from "vue";

Vue.filter("dateFormat", (value, format = "YYYY-MM-DD HH-mm-ss") => {
  return dayjs(value).format(format);
});
