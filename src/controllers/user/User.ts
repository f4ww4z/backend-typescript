import { Request, Response } from "express";
import { CrudController } from "../CrudController";
import { ParamsDictionary } from "express-serve-static-core";

export class UserController extends CrudController {
  public create(req: Request<ParamsDictionary>, res: Response) {
    throw new Error("Method not implemented");
  }

  public read(req: Request<ParamsDictionary>, res: Response) {
    res.json({ message: "GET /user request received" });
  }

  public update(req: Request<ParamsDictionary>, res: Response) {
    throw new Error("Method not implemented");
  }

  public delete(req: Request<ParamsDictionary>, res: Response) {
    throw new Error("Method not implemented");
  }
}
