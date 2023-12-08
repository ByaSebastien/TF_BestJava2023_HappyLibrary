import {UserDtoModel} from "./user.dto.model";

export interface TokenDtoModel {
  accessToken: string;
  user: UserDtoModel;
}
