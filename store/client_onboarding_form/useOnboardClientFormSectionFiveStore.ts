import { defineStore } from "pinia";

export const useOnboardClientFormSectionFiveStore = defineStore(
  "OnboardClientFormSectionFiveStore",
  () => {
    const step_five_how_do_you_respond_to_significant_setbacks_in_your_biz =
      reactive({
        question_number: 1,
        question_label:
          "How do you typically respond to significant setbacks in your business?",
        question_answer: "",
        question_options: [
          "I get overwhelmed and disengage",
          "I struggle but eventually recover",
          "I reflect and learn slowly",
          "I bounce back quickly",
          "I view setbacks as opportunities to grow",
        ],
      });

    const step_five_rate_your_ability_to_stay_motivated_during_business_challenges =
      reactive({
        question_number: 2,
        question_label:
          "How do you rate your ability to stay motivated during business challenges?",
        question_answer: "",
        question_options: [
          "Not motivated at all",
          "Slightly motivated",
          "Moderately motivated",
          "Highly motivated",
          "Exceptionally motivated",
        ],
      });

    const step_five_how_do_you_adapt_your_strategies_after_facing_obstacles =
      reactive({
        question_number: 3,
        question_label:
          "How often do you adapt your strategies after facing obstacles in business?",
        question_answer: "",
        question_options: [
          "Never",
          "Rarely",
          "Occasionally",
          "Often",
          "Always",
        ],
      });

    const step_five_how_do_you_manage_stress_in_your_biz = reactive({
      question_number: 4,
      question_label:
        "How do you manage stress during periods of high pressure or uncertainty in your business?",
      question_answer: "",
      question_options: [
        "I avoid dealing with it",
        "Poorly",
        "with frequent breakdowns",
        "With difficulty but stay functional",
        "Proactively with effective tools",
        "Exceptionally with confidence and calm",
      ],
    });

    const step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges =
      reactive({
        question_number: 5,
        question_label:
          "How often do you feel confident in your ability to overcome business challenges?",
        question_answer: "",
        question_options: [
          "Never",
          "Rarely",
          "Occasionally",
          "Often",
          "Always",
        ],
      });

    const get_step_five_how_do_you_respond_to_significant_setbacks_in_your_biz =
      computed(() => {
        return step_five_how_do_you_respond_to_significant_setbacks_in_your_biz.question_answer;
      });

    const get_step_five_rate_your_ability_to_stay_motivated_during_business_challenges =
      computed(() => {
        return step_five_rate_your_ability_to_stay_motivated_during_business_challenges.question_answer;
      });

    const get_step_five_how_do_you_adapt_your_strategies_after_facing_obstacles =
      computed(() => {
        return step_five_how_do_you_adapt_your_strategies_after_facing_obstacles.question_answer;
      });

    const get_step_five_how_do_you_manage_stress_in_your_biz = computed(() => {
      return step_five_how_do_you_manage_stress_in_your_biz.question_answer;
    });

    const get_step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges =
      computed(() => {
        return step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges.question_answer;
      });

    const get_is_step_valid = computed(() => {
      return (
        step_five_how_do_you_respond_to_significant_setbacks_in_your_biz.question_answer !==
          "" &&
        step_five_rate_your_ability_to_stay_motivated_during_business_challenges.question_answer !==
          "" &&
        step_five_how_do_you_adapt_your_strategies_after_facing_obstacles.question_answer !==
          "" &&
        step_five_how_do_you_manage_stress_in_your_biz.question_answer !== "" &&
        step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges.question_answer !==
          ""
      );
    });

    const update_step_five_how_do_you_respond_to_significant_setbacks_in_your_biz =
      (answer: string) => {
        if (answer === null) return;
        step_five_how_do_you_respond_to_significant_setbacks_in_your_biz.question_answer =
          answer;
      };

    const update_step_five_rate_your_ability_to_stay_motivated_during_business_challenges =
      (answer: string) => {
        if (answer === null) return;
        step_five_rate_your_ability_to_stay_motivated_during_business_challenges.question_answer =
          answer;
      };

    const update_step_five_how_do_you_adapt_your_strategies_after_facing_obstacles =
      (answer: string) => {
        if (answer === null) return;
        step_five_how_do_you_adapt_your_strategies_after_facing_obstacles.question_answer =
          answer;
      };

    const update_step_five_how_do_you_manage_stress_in_your_biz = (
      answer: string
    ) => {
      if (answer === null) return;
      step_five_how_do_you_manage_stress_in_your_biz.question_answer = answer;
    };

    const update_step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges =
      (answer: string) => {
        if (answer === null) return;
        step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges.question_answer =
          answer;
      };

    const get_answers_for_submission = computed(() => {
      return [
        {
          question:
            step_five_how_do_you_respond_to_significant_setbacks_in_your_biz.question_label,
          answer:
            step_five_how_do_you_respond_to_significant_setbacks_in_your_biz.question_answer,
        },
        {
          question:
            step_five_rate_your_ability_to_stay_motivated_during_business_challenges.question_label,
          answer:
            step_five_rate_your_ability_to_stay_motivated_during_business_challenges.question_answer,
        },
        {
          question:
            step_five_how_do_you_adapt_your_strategies_after_facing_obstacles.question_label,
          answer:
            step_five_how_do_you_adapt_your_strategies_after_facing_obstacles.question_answer,
        },
        {
          question:
            step_five_how_do_you_manage_stress_in_your_biz.question_label,
          answer:
            step_five_how_do_you_manage_stress_in_your_biz.question_answer,
        },
        {
          question:
            step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges.question_label,
          answer:
            step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges.question_answer,
        },
      ];
    });

    return {
      step_five_how_do_you_respond_to_significant_setbacks_in_your_biz,
      step_five_rate_your_ability_to_stay_motivated_during_business_challenges,
      step_five_how_do_you_adapt_your_strategies_after_facing_obstacles,
      step_five_how_do_you_manage_stress_in_your_biz,
      step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges,

      // Getters
      get_step_five_how_do_you_respond_to_significant_setbacks_in_your_biz,
      get_step_five_rate_your_ability_to_stay_motivated_during_business_challenges,
      get_step_five_how_do_you_adapt_your_strategies_after_facing_obstacles,
      get_step_five_how_do_you_manage_stress_in_your_biz,
      get_step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges,
      get_is_step_valid,
      get_answers_for_submission,

      // Mutations
      update_step_five_how_do_you_respond_to_significant_setbacks_in_your_biz,
      update_step_five_rate_your_ability_to_stay_motivated_during_business_challenges,
      update_step_five_how_do_you_adapt_your_strategies_after_facing_obstacles,
      update_step_five_how_do_you_manage_stress_in_your_biz,
      update_step_five_how_often_do_you_feel_confident_to_overcome_biz_challenges,
    };
  }
);
