import { defineStore } from "pinia";

export const useOnboardClientFormSectionNineStore = defineStore(
  "OnboardClientFormSectionNineStore",
  () => {
    const step_nine_do_you_currently_have_a_documented_marketing_plan =
      reactive({
        question_number: 1,
        question_label:
          "Do you currently have a documented marketing plan that outlines your goals and objectives?",
        question_answer: "",
        question_options: [
          "No, I do not have a marketing plan",
          "I have an informal plan but it is not documented",
          "Yes, but it is outdated",
          "Yes, and it is partially implemented",
          "Yes, and it is fully implemented",
        ],
      });

    const step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts =
      reactive({
        question_number: 2,
        question_label:
          "How often do you evaluate the impact of your marketing efforts on key business outcomes (e.g., revenue growth, customer acquisition)?",
        question_answer: "",
        question_options: [
          "Never",
          "Rarely",
          "Occasionally",
          "Often",
          "Always",
        ],
      });

    const step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need =
      reactive({
        question_number: 3,
        question_label:
          "How confident are you in understanding which marketing channels (e.g., social media, email, SEO) drive the most significant results for your business?",
        question_answer: "",
        question_options: [
          "Not confident",
          "Slightly confident",
          "Neutral",
          "Confident",
          "Exceptionally confident",
        ],
      });

    const step_nine_how_effectively_do_you_measure_the_ROI = reactive({
      question_number: 4,
      question_label:
        "How effectively do you measure the return on investment (ROI) of your marketing activities?­",
      question_answer: "",
      question_options: [
        "Not effectively",
        "Poorly",
        "Adequately",
        "Well",
        "Exceptionally well",
      ],
    });

    const get_step_nine_do_you_currently_have_a_documented_marketing_plan =
      computed(() => {
        return step_nine_do_you_currently_have_a_documented_marketing_plan.question_answer;
      });

    const get_step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts =
      computed(() => {
        return step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts.question_answer;
      });

    const get_step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need =
      computed(() => {
        return step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need.question_answer;
      });

    const get_step_nine_how_effectively_do_you_measure_the_ROI = computed(
      () => {
        return step_nine_how_effectively_do_you_measure_the_ROI.question_answer;
      }
    );

    const get_is_step_valid = computed(() => {
      return (
        step_nine_do_you_currently_have_a_documented_marketing_plan.question_answer !==
          "" &&
        step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts.question_answer !==
          "" &&
        step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need.question_answer !==
          "" &&
        step_nine_how_effectively_do_you_measure_the_ROI.question_answer !== ""
      );
    });

    const update_step_nine_do_you_currently_have_a_documented_marketing_plan = (
      answer: string
    ) => {
      if (answer === null) return;
      step_nine_do_you_currently_have_a_documented_marketing_plan.question_answer =
        answer;
    };

    const update_step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts =
      (answer: string) => {
        if (answer === null) return;
        step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts.question_answer =
          answer;
      };

    const update_step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need =
      (answer: string) => {
        if (answer === null) return;
        step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need.question_answer =
          answer;
      };

    const update_step_nine_how_effectively_do_you_measure_the_ROI = (
      answer: string
    ) => {
      if (answer === null) return;
      step_nine_how_effectively_do_you_measure_the_ROI.question_answer = answer;
    };

    const get_answers_for_submission = computed(() => {
      return [
        {
          question:
            step_nine_do_you_currently_have_a_documented_marketing_plan.question_label,
          answer:
            step_nine_do_you_currently_have_a_documented_marketing_plan.question_answer,
        },
        {
          question:
            step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts.question_label,
          answer:
            step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts.question_answer,
        },
        {
          question:
            step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need.question_label,
          answer:
            step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need.question_answer,
        },
        {
          question:
            step_nine_how_effectively_do_you_measure_the_ROI.question_label,
          answer:
            step_nine_how_effectively_do_you_measure_the_ROI.question_answer,
        },
      ];
    });

    return {
      step_nine_do_you_currently_have_a_documented_marketing_plan,
      step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts,
      step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need,
      step_nine_how_effectively_do_you_measure_the_ROI,

      // Getters
      get_step_nine_do_you_currently_have_a_documented_marketing_plan,
      get_step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts,
      get_step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need,
      get_step_nine_how_effectively_do_you_measure_the_ROI,
      get_is_step_valid,
      get_answers_for_submission,

      // Mutations
      update_step_nine_do_you_currently_have_a_documented_marketing_plan,
      update_step_nine_how_often_do_you_evaluate_the_impact_of_your_marketing_efforts,
      update_step_nine_how_confident_are_you_in_understanding_which_marketing_channels_you_need,
      update_step_nine_how_effectively_do_you_measure_the_ROI,
    };
  }
);
