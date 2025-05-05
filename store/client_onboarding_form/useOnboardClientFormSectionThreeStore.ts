import { defineStore } from "pinia";

export const useOnboardClientFormSectionThreeStore = defineStore(
  "onboardClientFormSectionThreeStore",
  () => {
    const step_three_how_often_do_you_review_financial_stmt = reactive({
      question_number: 1,
      question_label:
        "How often do you review your business's financial statements (e.g., income statement, balance sheet)?",
      question_answer: "",
      question_options: [
        "Never",
        "Quarterly",
        "Monthly",
        "Bi-weekly",
        "Weekly",
      ],
    });

    const step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt =
      reactive({
        question_number: 2,
        question_label:
          "How would you rate your understanding of your business's cash flow management?",
        question_answer: "",
        question_options: [
          "Nonexistent",
          "Limited",
          "Moderate",
          "Strong",
          "Expert",
        ],
      });

    const step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz =
      reactive({
        question_number: 3,
        question_label:
          "How frequently do you set and track financial goals for your business?",
        question_answer: "",
        question_options: [
          "Never",
          "Rarely",
          "Occasionally",
          "Often",
          "Always",
        ],
      });

    const step_three_how_confident_are_you_in_creating_nd_managing_budgets =
      reactive({
        question_number: 4,
        question_label:
          "How confident are you in creating and managing budgets for scaling or operational improvements?",
        question_answer: "",
        question_options: [
          "Not confident",
          "Slightly confident",
          "Neutral",
          "Confident",
          "Very confident",
        ],
      });

    const step_three_how_do_you_assess_the_profitability_before_launch =
      reactive({
        question_number: 5,
        question_label:
          "How do you assess the profitability of a new product or service before launching?",
        question_answer: "",
        question_options: [
          "I don't assess profitability",
          "Informally estimate",
          "Use rough calculations",
          "Use structured analysis tools",
          "Use detailed financial projections",
        ],
      });

    const get_step_three_how_often_do_you_review_financial_stmt = computed(
      () => {
        return step_three_how_often_do_you_review_financial_stmt.question_answer;
      }
    );

    const get_step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt =
      computed(() => {
        return step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt.question_answer;
      });

    const get_step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz =
      computed(() => {
        return step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz.question_answer;
      });

    const get_step_three_how_confident_are_you_in_creating_nd_managing_budgets =
      computed(() => {
        return step_three_how_confident_are_you_in_creating_nd_managing_budgets.question_answer;
      });

    const get_step_three_how_do_you_assess_the_profitability_before_launch =
      computed(() => {
        return step_three_how_do_you_assess_the_profitability_before_launch.question_answer;
      });

    const get_is_step_valid = computed(() => {
      return (
        step_three_how_often_do_you_review_financial_stmt.question_answer !==
          "" &&
        step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt.question_answer !==
          "" &&
        step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz.question_answer !==
          "" &&
        step_three_how_confident_are_you_in_creating_nd_managing_budgets.question_answer !==
          "" &&
        step_three_how_do_you_assess_the_profitability_before_launch.question_answer !==
          ""
      );
    });

    const update_step_three_how_often_do_you_review_financial_stmt = (
      answer: string
    ) => {
      if (answer === null) return;
      step_three_how_often_do_you_review_financial_stmt.question_answer =
        answer;
    };

    const update_step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt =
      (answer: string) => {
        if (answer === null) return;
        step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt.question_answer =
          answer;
      };

    const update_step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz =
      (answer: string) => {
        if (answer === null) return;
        step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz.question_answer =
          answer;
      };

    const update_step_three_how_confident_are_you_in_creating_nd_managing_budgets =
      (answer: string) => {
        if (answer === null) return;
        step_three_how_confident_are_you_in_creating_nd_managing_budgets.question_answer =
          answer;
      };

    const update_step_three_how_do_you_assess_the_profitability_before_launch =
      (answer: string) => {
        if (answer === null) return;
        step_three_how_do_you_assess_the_profitability_before_launch.question_answer =
          answer;
      };

    const get_answers_for_submission = computed(() => {
      return [
        {
          question:
            step_three_how_often_do_you_review_financial_stmt.question_label,
          answer:
            step_three_how_often_do_you_review_financial_stmt.question_answer,
        },
        {
          question:
            step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt.question_label,
          answer:
            step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt.question_answer,
        },
        {
          question:
            step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz.question_label,
          answer:
            step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz.question_answer,
        },
        {
          question:
            step_three_how_confident_are_you_in_creating_nd_managing_budgets.question_label,
          answer:
            step_three_how_confident_are_you_in_creating_nd_managing_budgets.question_answer,
        },
        {
          question:
            step_three_how_do_you_assess_the_profitability_before_launch.question_label,
          answer:
            step_three_how_do_you_assess_the_profitability_before_launch.question_answer,
        },
      ];
    });

    return {
      step_three_how_often_do_you_review_financial_stmt,
      step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt,
      step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz,
      step_three_how_confident_are_you_in_creating_nd_managing_budgets,
      step_three_how_do_you_assess_the_profitability_before_launch,

      // Getters
      get_step_three_how_often_do_you_review_financial_stmt,
      get_step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt,
      get_step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz,
      get_step_three_how_confident_are_you_in_creating_nd_managing_budgets,
      get_step_three_how_do_you_assess_the_profitability_before_launch,
      get_is_step_valid,
      get_answers_for_submission,

      // Mutations
      update_step_three_how_often_do_you_review_financial_stmt,
      update_step_three_rate_your_understanding_of_your_biz_cash_flow_mgmt,
      update_step_three_how_frequently_do_you_set_nd_track_financial_goals_for_your_biz,
      update_step_three_how_confident_are_you_in_creating_nd_managing_budgets,
      update_step_three_how_do_you_assess_the_profitability_before_launch,
    };
  }
);
