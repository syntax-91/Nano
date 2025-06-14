export default {
  transform: {
    "^.+\\.js$": ["@swc/jest"],
  },
  extensionsToTreatAsEsm: [".js"],
  testEnvironment: "jsdom", // 💡 для frontend
  moduleFileExtensions: ["js", "json"],
};
