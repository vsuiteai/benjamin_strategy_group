import axios from "axios";
import { useAOFSectionOneStore } from "~/store/advisior_onboarding_form/useOnboardClientFormSectionOneStore";
import { useAOFSectionTwoStore } from "~/store/advisior_onboarding_form/useOnboardClientFormSectionTwoStore";
import { useAOFSectionThreeStore } from "~/store/advisior_onboarding_form/useOnboardClientFormSectionThreeStore";
import { useAOFSectionFourStore } from "~/store/advisior_onboarding_form/useOnboardClientFormSectionFourStore";
import { useAOFSectionFiveStore } from "~/store/advisior_onboarding_form/useOnboardClientFormSectionFiveStore";
import { useAOFSectionSixStore } from "~/store/advisior_onboarding_form/useOnboardClientFormSectionSixStore";

export const useAdvisiorFormController = () => {
  const submit_form = async (client: ClientDetail) => {
    const AOFSectionOneStore = useAOFSectionOneStore();
    const AOFSectionTwoStore = useAOFSectionTwoStore();
    const AOFSectionThreeStore = useAOFSectionThreeStore();
    const AOFSectionFourStore = useAOFSectionFourStore();
    const AOFSectionFiveStore = useAOFSectionFiveStore();
    const AOFSectionSixStore = useAOFSectionSixStore();

    const all_answers = Array().concat(
      AOFSectionOneStore.get_answers_for_submission,
      AOFSectionTwoStore.get_answers_for_submission,
      AOFSectionThreeStore.get_answers_for_submission,
      AOFSectionFourStore.get_answers_for_submission,
      AOFSectionFiveStore.get_answers_for_submission,
      AOFSectionSixStore.get_answers_for_submission
    );

    const response = await axios.post("/api/forms/advisors-onboarding", {
      client_uid: client.client_uid,
      answers: all_answers,
    });

    // console.log(response);

    const submission_id = (response.data?.data?.submission_id as string) ?? "";
    return { submission_id };
  };

  return {
    submit_form,
  };
};
