import { faker } from "@faker-js/faker";
import fs from "fs";

function generateLocation() {
  let locationData = [];

  // to consider linking data /users/:user_id/ username to this input?
  for (let id = 1; id <= 25; id++) {
    let location = {
      type: "Point",
      coordinates: [
        faker.address.longitude(-1.454922, -1.62933),
        faker.address.latitude(53.850197, 53.766673),
      ],
    };
    let location_description = faker.hacker.phrase();

    locationData.push({
      location: location,
      location_description: location_description,
    });
  }

  return { data: locationData };
}

let dataObj = generateLocation();

//to use, add "type": "module" to package.json
//remember to remove!
fs.writeFileSync("locationData.json", JSON.stringify(dataObj, null, "\t"));
