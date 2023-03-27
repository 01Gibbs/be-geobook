import { faker } from "@faker-js/faker";
import fs from "fs";

function generateUsers() {
  let users = [];

  for (let id = 1; id <= 100; id++) {
    let username = faker.internet.userName();
    let uid = faker.datatype.uuid();
    let name = faker.name.fullName();

    users.push({
      username: username,
      firebase_id: uid,
      name: name,
    });
  }

  return { data: users };
}

let dataObj = generateUsers();

//to use, add "type": "module" to package.json
//remember to remove!
fs.writeFileSync("userData.json", JSON.stringify(dataObj, null, "\t"));
