import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;
  email: string;
  admin?: boolean;
  created_at?: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      Object.assign(this, {
        id: uuidV4(),
        admin: false,
        created_at: new Date(),
      });
    }
  }
}

export { User };
