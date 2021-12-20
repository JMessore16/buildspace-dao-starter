import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x97a8220f63a4353191622E9f771b25427Ba08057",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "W3B Token",
        description: "This NFT will give you access to W3BDAO!",
        image: readFileSync("scripts/assets/token.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()