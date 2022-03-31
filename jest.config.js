module.exports = {
    preset: 'react-native',
    setupFilesAfterEnv: [
        "@testing-library/jest-native/extend-expect",
        "jest-styled-components"
    ],
    setupFiles: [
        "./jestSetupFile.js"
    ],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/android/",
        "/ios/",
        "/c/"
    ],
    transformIgnorePatterns: [
        "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/**/*.spec.{js,jsx,ts,tsx}",
    ],
    coverageReporters: [
        "lcov",
    ]
}