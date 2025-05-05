import { defineStore } from "pinia";

export const useOnboardClientFormSectionEightStore = defineStore(
  "OnboardClientFormSectionEightStore",
  () => {
    const step_eight_do_you_currently_have_a_documented_strategy = reactive({
      question_number: 1,
      question_label:
        "Do you currently have a documented strategy that outlines your longer-term goals and objectives?",
      question_answer: "",
      question_options: [
        "No, I do not have a plan",
        "I have an informal plan but it is not documented",
        "Yes, but it is outdated",
        "Yes, and it is partially implemented",
        "Yes, and it is fully implemented",
      ],
    });

    const step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts =
      reactive({
        question_number: 2,
        question_label:
          "How often do you evaluate the impact of your sales efforts on key business outcomes (e.g., revenue growth, customer acquisition)?",
        question_answer: "",
        question_options: [
          "Never",
          "Rarely",
          "Occasionally",
          "Often",
          "Always",
        ],
      });

    const step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities =
      reactive({
        question_number: 3,
        question_label:
          "How effectively do you measure the return on investment (ROI) of your sales activities?",
        question_answer: "",
        question_options: [
          "Not effectively",
          "Poorly",
          "Adequately",
          "Well",
          "Exceptionally well",
        ],
      });

    const step_eight_how_frequently_do_you_adjust_your_sales_tactics = reactive(
      {
        question_number: 4,
        question_label:
          "How frequently do you adjust your sales tactics based on their measurable impact on your business goals (e.g., sales growth, customer retention)?",
        question_answer: "",
        question_options: [
          "Never",
          "Rarely",
          "Occasionally",
          "Often",
          "Always",
        ],
      }
    );

    const get_step_eight_do_you_currently_have_a_documented_strategy = computed(
      () => {
        return step_eight_do_you_currently_have_a_documented_strategy.question_answer;
      }
    );

    const get_step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts =
      computed(() => {
        return step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts.question_answer;
      });

    const get_step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities =
      computed(() => {
        return step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities.question_answer;
      });

    const get_step_eight_how_frequently_do_you_adjust_your_sales_tactics =
      computed(() => {
        return step_eight_how_frequently_do_you_adjust_your_sales_tactics.question_answer;
      });

    const get_is_step_valid = computed(() => {
      return (
        step_eight_do_you_currently_have_a_documented_strategy.question_answer !==
          "" &&
        step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts.question_answer !==
          "" &&
        step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities.question_answer !==
          "" &&
        step_eight_how_frequently_do_you_adjust_your_sales_tactics.question_answer !==
          ""
      );
    });

    const update_step_eight_do_you_currently_have_a_documented_strategy = (
      answer: string
    ) => {
      if (answer === null) return;
      step_eight_do_you_currently_have_a_documented_strategy.question_answer =
        answer;
    };

    const update_step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts =
      (answer: string) => {
        if (answer === null) return;
        step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts.question_answer =
          answer;
      };

    const update_step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities =
      (answer: string) => {
        if (answer === null) return;
        step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities.question_answer =
          answer;
      };

    const update_step_eight_how_frequently_do_you_adjust_your_sales_tactics = (
      answer: string
    ) => {
      if (answer === null) return;
      step_eight_how_frequently_do_you_adjust_your_sales_tactics.question_answer =
        answer;
    };

    const get_answers_for_submission = computed(() => {
      return [
        {
          question:
            step_eight_do_you_currently_have_a_documented_strategy.question_label,
          answer:
            step_eight_do_you_currently_have_a_documented_strategy.question_answer,
        },

        {
          question:
            step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts.question_label,
          answer:
            step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts.question_answer,
        },

        {
          question:
            step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities.question_label,
          answer:
            step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities.question_answer,
        },

        {
          question:
            step_eight_how_frequently_do_you_adjust_your_sales_tactics.question_label,
          answer:
            step_eight_how_frequently_do_you_adjust_your_sales_tactics.question_answer,
        },
      ];
    });

    return {
      step_eight_do_you_currently_have_a_documented_strategy,
      step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts,
      step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities,
      step_eight_how_frequently_do_you_adjust_your_sales_tactics,

      // Getters
      get_step_eight_do_you_currently_have_a_documented_strategy,
      get_step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts,
      get_step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities,
      get_step_eight_how_frequently_do_you_adjust_your_sales_tactics,
      get_is_step_valid,
      get_answers_for_submission,

      // Mutations
      update_step_eight_do_you_currently_have_a_documented_strategy,
      update_step_eight_how_often_do_you_evaluate_the_impact_of_your_sales_efforts,
      update_step_eight_how_effectively_do_you_measure_the_ROI_of_your_sales_activities,
      update_step_eight_how_frequently_do_you_adjust_your_sales_tactics,
    };
  }
);
