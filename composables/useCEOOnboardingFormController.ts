import axios from "axios";
import { useOnboardClientFormSectionOneStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionOneStore";
import { useOnboardClientFormSectionTwoStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionTwoStore";
import { useOnboardClientFormSectionThreeStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionThreeStore";
import { useOnboardClientFormSectionFourStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionFourStore";
import { useOnboardClientFormSectionFiveStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionFiveStore";
import { useOnboardClientFormSectionSixStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionSixStore";
import { useOnboardClientFormSectionSevenStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionSevenStore";
import { useOnboardClientFormSectionEightStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionEightStore";
import { useOnboardClientFormSectionNineStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionNineStore";
import { useOnboardClientFormSectionTenStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionTenStore";
import { useOnboardClientFormSectionElevenStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionElevenStore";
import { useOnboardClientFormSectionTwelveStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionTwelveStore";
import { useOnboardClientFormSectionOneThreeStore } from "~/store/client_onboarding_form/useOnboardClientFormSectionOneThreeStore";

export const useCEOOnboardingFormController = () => {
  const submit_form = async (client: ClientDetail) => {
    const onboardClientFormSectionOneStore =
      useOnboardClientFormSectionOneStore();
    const onboardClientFormSectionTwoStore =
      useOnboardClientFormSectionTwoStore();
    const onboardClientFormSectionThreeStore =
      useOnboardClientFormSectionThreeStore();
    const onboardClientFormSectionFourStore =
      useOnboardClientFormSectionFourStore();
    const onboardClientFormSectionFiveStore =
      useOnboardClientFormSectionFiveStore();
    const onboardClientFormSectionSixStore =
      useOnboardClientFormSectionSixStore();
    const onboardClientFormSectionSevenStore =
      useOnboardClientFormSectionSevenStore();
    const onboardClientFormSectionEightStore =
      useOnboardClientFormSectionEightStore();
    const onboardClientFormSectionNineStore =
      useOnboardClientFormSectionNineStore();
    const onboardClientFormSectionTenStore =
      useOnboardClientFormSectionTenStore();
    const onboardClientFormSectionElevenStore =
      useOnboardClientFormSectionElevenStore();
    const onboardClientFormSectionTwelveStore =
      useOnboardClientFormSectionTwelveStore();
    const onboardClientFormSectionOneThreeStore =
      useOnboardClientFormSectionOneThreeStore();

    const all_answers = Array().concat(
      onboardClientFormSectionOneStore.get_answers_for_submission,
      onboardClientFormSectionTwoStore.get_answers_for_submission,
      onboardClientFormSectionThreeStore.get_answers_for_submission,
      onboardClientFormSectionFourStore.get_answers_for_submission,
      onboardClientFormSectionFiveStore.get_answers_for_submission,
      onboardClientFormSectionSixStore.get_answers_for_submission,
      onboardClientFormSectionSevenStore.get_answers_for_submission,
      onboardClientFormSectionEightStore.get_answers_for_submission,
      onboardClientFormSectionNineStore.get_answers_for_submission,
      onboardClientFormSectionTenStore.get_answers_for_submission,
      onboardClientFormSectionElevenStore.get_answers_for_submission,
      onboardClientFormSectionTwelveStore.get_answers_for_submission,
      onboardClientFormSectionOneThreeStore.get_answers_for_submission
    );

    const response = await axios.post("/api/forms/ceo-onboarding", {
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
