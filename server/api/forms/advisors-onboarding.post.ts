import { add_form_submission } from "~/server/controller/formCont";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const client_uid = body.client_uid ?? "";
    const answers = (body?.answers as question_answer[]) ?? [];

    if (answers.length === 0) throw new Error("question answers not provided");

    if (!client_uid) throw new Error("client uid not provided");

    const submission_id = await add_form_submission(
      "advisior_onboarding_form",
      client_uid,
      answers
    );

    return {
      error: false,
      data: {
        submission_id,
      },
      message: "submitted successfully",
    };
  } catch (err) {
    console.log(err instanceof Error ? err.message : String(err));
    return {
      error: true,
      data: null,
      message: err instanceof Error ? err.message : String(err),
    };
  }
});
