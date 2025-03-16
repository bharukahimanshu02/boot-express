const config = require("@bootloader/config");
import { Controller, RequestMapping, ResponseBody, ResponseView } from "@bootloader/core/decorators";

var pjson = require("../../package.json");
var bjson = require("../../public/build.info.json");
const UP_STAMP = new Date();
const UP_TIME = Date.now();

@Controller("/info")
export default class AppInfoController {
  constructor() {
    console.log("===AppInfoController instantiated:", this.constructor);
  }

  @ResponseBody
  @RequestMapping({ path: "/build", method: "get" })
  async getBuildInfo() {
    return {
      package_version: pjson.version,
      app_version: config.getIfPresent("app.version"),
      db_prefix: config.getIfPresent("mongodb.db.prefix"),
      db_prefix: config.getIfPresent("mongodb.db.prefix"),
      db_domain: config.getIfPresent("mongodb.db.domain"),
      UP_TIME: UP_TIME,
      UP_STAMP: UP_STAMP.toISOString(),
      build: bjson,
    };
  }
}
