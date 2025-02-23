import { Controller, RequestMapping, ResponseBody, ResponseView, AuthRequired } from "@bootloader/core/decorators";
import {Test} from "../../@core/decorators";
import middleware from "../middlewares/AuthRequired";

@Controller({path : "/users", middleware : "ClassLevelMiddleware"})
export default class UserController {
  constructor() {
    console.log("===UserController instantiated:", this.constructor);
  }

  @ResponseBody
  @RequestMapping({ path: "/", method: "get",middleware : "PathLevelMiddleware" })
  async getUsers() {
    return [{ id: 1, name: "John Doe" }];
  }

  @ResponseView
  @RequestMapping({ path: "/welcome", method: "get" })
  async welcomePage() {
    console.log("Welcom pagessss");
    return "welcome";
  }

  @AuthRequired()
  @RequestMapping({ path: "/get", method: "get" })
  @ResponseBody
  async getUsersGet() {
    return [{ id: 1, name: "John Doe" }];
  }
}
