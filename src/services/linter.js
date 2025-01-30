import { mago_get_definitions, mago_analysis } from "./wasm/mago_wasm.js";

function getIssuePriority(issue) {
  switch (issue.level.toLowerCase()) {
    case "error":
      return 2;
    case "warning":
      return 3;
    case "note":
      return 4;
    case "help":
      return 5;
    default:
      return 6;
  }
}

export const getLinterDefinitions = () => {
  return mago_get_definitions();
};

export const performAnalysis = (code, format_settings, linter_settings) => {
  let result = mago_analysis(code, format_settings, linter_settings);

  console.log(result);

  result.linter_issues.issues.sort((a, b) => {
    return getIssuePriority(a) - getIssuePriority(b);
  });

  result.linter_issues = result.linter_issues.issues;
  result.semantic_issues = result.semantic_issues.issues.map((issue) => {
    issue.code = "semantics";

    return issue;
  });

  return result;
};
