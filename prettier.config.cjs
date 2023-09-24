const options = {
    semi: true,
    tabWidth: 4,
    printWidth: 135,
    endOfLine: "lf",
    singleQuote: false,
    arrowParens: "avoid",
    bracketSpacing: true,
    bracketSameLine: true,
    trailingComma: "none",
    plugins: ["prettier-plugin-svelte"],
    overrides: [{"files": "*svelte", "options": {"parser": "svelte"}}]
};

module.exports = options;
