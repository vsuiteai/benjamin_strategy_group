import { defineStore } from "pinia";

export const useOnboardClientFormSectionTwelveStore = defineStore(
  "OnboardClientFormSectionTwelveStore",
  () => {
    const step_twelve_how_often_do_you_implement_innovative_ideas = reactive({
      question_number: 1,
      question_label:
        "How often do you implement innovative ideas to solve business challenges or improve processes?",
      question_answer: "",
      question_options: ["Never", "Rarely", "Occasionally", "Often", "Always"],
    });

    const step_twelve_how_confident_are_you_in_generating_creative_soln =
      reactive({
        question_number: 2,
        question_label:
          "How confident are you in generating creative solutions to meet your customers' needs?",
        question_answer: "",
        question_options: [
          "Not confident",
          "Slightly confident",
          "Neutral",
          "Confident",
          "Very confident",
        ],
      });

    const step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm =
      reactive({
        question_number: 3,
        question_label:
          "How frequently do you encourage your team to brainstorm and contribute creative ideas?",
        question_answer: "",
        question_options: [
          "Never",
          "Rarely",
          "Occasionally",
          "Often",
          "Always",
        ],
      });

    const get_step_twelve_how_often_do_you_implement_innovative_ideas =
      computed(() => {
        return step_twelve_how_often_do_you_implement_innovative_ideas.question_answer;
      });

    const get_step_twelve_how_confident_are_you_in_generating_creative_soln =
      computed(() => {
        return step_twelve_how_confident_are_you_in_generating_creative_soln.question_answer;
      });

    const get_step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm =
      computed(() => {
        return step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm.question_answer;
      });

    const get_is_step_valid = computed(() => {
      return (
        step_twelve_how_often_do_you_implement_innovative_ideas.question_answer !==
          "" &&
        step_twelve_how_confident_are_you_in_generating_creative_soln.question_answer !==
          "" &&
        step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm.question_answer !==
          ""
      );
    });

    const update_step_twelve_how_often_do_you_implement_innovative_ideas = (
      answer: string
    ) => {
      if (answer === null) return;
      step_twelve_how_often_do_you_implement_innovative_ideas.question_answer =
        answer;
    };

    const update_step_twelve_how_confident_are_you_in_generating_creative_soln =
      (answer: string) => {
        if (answer === null) return;
        step_twelve_how_confident_are_you_in_generating_creative_soln.question_answer =
          answer;
      };

    const update_step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm =
      (answer: string) => {
        if (answer === null) return;
        step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm.question_answer =
          answer;
      };

    const get_answers_for_submission = computed(() => {
      return [
        {
          question:
            step_twelve_how_often_do_you_implement_innovative_ideas.question_label,
          answer:
            step_twelve_how_often_do_you_implement_innovative_ideas.question_answer,
        },
        {
          question:
            step_twelve_how_confident_are_you_in_generating_creative_soln.question_label,
          answer:
            step_twelve_how_confident_are_you_in_generating_creative_soln.question_answer,
        },
        {
          question:
            step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm.question_label,
          answer:
            step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm.question_answer,
        },
      ];
    });

    return {
      step_twelve_how_often_do_you_implement_innovative_ideas,
      step_twelve_how_confident_are_you_in_generating_creative_soln,
      step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm,

      // Getters
      get_step_twelve_how_often_do_you_implement_innovative_ideas,
      get_step_twelve_how_confident_are_you_in_generating_creative_soln,
      get_step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm,
      get_is_step_valid,
      get_answers_for_submission,

      // Mutations
      update_step_twelve_how_often_do_you_implement_innovative_ideas,
      update_step_twelve_how_confident_are_you_in_generating_creative_soln,
      update_step_twelve_how_frequently_do_you_encourage_your_team_to_brainstorm,
    };
  }
);
