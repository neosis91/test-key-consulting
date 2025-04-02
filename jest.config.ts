import type { Config } from "jest";

const config: Config = {
  preset: "jest-preset-angular",
  testMatch: ["**/?(*.)+(test).ts"],
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
};

export default config;
