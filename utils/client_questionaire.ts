export const format_answer = (answer: any) => {
  if (typeof answer === "string") return answer;
  if (typeof answer === "object") {
    if (answer && (answer?.length ?? false)) return answer.join(", ");
  }
};

export const get_form_type = (form_type: string) => {
  let output = "";
  switch (form_type) {
    case "client_onboarding_form":
      output = "CEO Onboarding";
      break;

    case "advisior_onboarding_form":
      output = "Advisors Onboarding";
      break;
  }

  return output;
};
