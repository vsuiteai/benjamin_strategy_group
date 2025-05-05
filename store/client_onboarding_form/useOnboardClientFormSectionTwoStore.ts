import { defineStore } from "pinia";

/**
 * 
 
8,  *
    
9,  *
    Never, Rarely, Sometimes, Often, Always,
 */

export const useOnboardClientFormSectionTwoStore = defineStore(
  "OnboardClientFormSectionTwoStore",
  () => {
    const step_two_how_often_do_you_recognize_your_emotions = reactive({
      question_number: 1,
      question_label:
        "How often do you recognize your emotions and their impact on your decision-making in business situations?",
      question_answer: "",
      question_options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    });

    const step_two_how_well_do_you_handle_negative_feedback = reactive({
      question_number: 2,
      question_label:
        "How well do you handle negative feedback from clients, employees, or business partners?",
      question_answer: "",
      question_options: [
        "Very poorly",
        "Poorly",
        "Neutral",
        "Well",
        "Exceptionally well",
      ],
    });

    const step_two_how_often_do_you_adjust_your_communication_style_to_better_connect =
      reactive({
        question_number: 3,
        question_label:
          "How often do you adjust your communication style to better connect with clients, employees, or stakeholders?",
        question_answer: "",
        question_options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
      });

    const step_two_how_do_you_typically_respond_when_facing_conflict = reactive(
      {
        question_number: 4,
        question_label:
          "How do you typically respond when facing conflict between employees or with clients?",
        question_answer: "",
        question_options: [
          "Avoid confrontation entirely",
          "Address it hesitantly",
          "Stay neutral and detached",
          "Proactively engage to resolve",
          "Resolve effectively with empathy",
        ],
      }
    );

    const step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics =
      reactive({
        question_number: 5,
        question_label:
          "How frequently do you feel comfortable discussing difficult topics, such as underperformance or unmet expectations, with your team or clients?",
        question_answer: "",
        question_options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
      });

    const get_step_two_how_often_do_you_recognize_your_emotions = computed(
      () => {
        return step_two_how_often_do_you_recognize_your_emotions.question_answer;
      }
    );

    const get_step_two_how_well_do_you_handle_negative_feedback = computed(
      () => {
        return step_two_how_well_do_you_handle_negative_feedback.question_answer;
      }
    );

    const get_step_two_how_often_do_you_adjust_your_communication_style_to_better_connect =
      computed(() => {
        return step_two_how_often_do_you_adjust_your_communication_style_to_better_connect.question_answer;
      });

    const get_step_two_how_do_you_typically_respond_when_facing_conflict =
      computed(() => {
        return step_two_how_do_you_typically_respond_when_facing_conflict.question_answer;
      });

    const get_step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics =
      computed(() => {
        return step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics.question_answer;
      });

    const get_is_step_valid = computed(() => {
      return (
        step_two_how_often_do_you_recognize_your_emotions.question_answer !==
          "" &&
        step_two_how_well_do_you_handle_negative_feedback.question_answer !==
          "" &&
        step_two_how_often_do_you_adjust_your_communication_style_to_better_connect.question_answer !==
          "" &&
        step_two_how_do_you_typically_respond_when_facing_conflict.question_answer !==
          "" &&
        step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics.question_answer !==
          ""
      );
    });

    const update_step_two_how_often_do_you_recognize_your_emotions = (
      answer: string
    ) => {
      if (answer === null) return;
      step_two_how_often_do_you_recognize_your_emotions.question_answer =
        answer;
    };

    const update_step_two_how_well_do_you_handle_negative_feedback = (
      answer: string
    ) => {
      if (answer === null) return;
      step_two_how_well_do_you_handle_negative_feedback.question_answer =
        answer;
    };

    const update_step_two_how_often_do_you_adjust_your_communication_style_to_better_connect =
      (answer: string) => {
        if (answer === null) return;
        step_two_how_often_do_you_adjust_your_communication_style_to_better_connect.question_answer =
          answer;
      };

    const update_step_two_how_do_you_typically_respond_when_facing_conflict = (
      answer: string
    ) => {
      if (answer === null) return;
      step_two_how_do_you_typically_respond_when_facing_conflict.question_answer =
        answer;
    };

    const update_step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics =
      (answer: string) => {
        if (answer === null) return;
        step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics.question_answer =
          answer;
      };

    const get_answers_for_submission = computed(() => {
      return [
        {
          question:
            step_two_how_often_do_you_recognize_your_emotions.question_label,
          answer:
            step_two_how_often_do_you_recognize_your_emotions.question_answer,
        },
        {
          question:
            step_two_how_well_do_you_handle_negative_feedback.question_label,
          answer:
            step_two_how_well_do_you_handle_negative_feedback.question_answer,
        },
        {
          question:
            step_two_how_often_do_you_adjust_your_communication_style_to_better_connect.question_label,
          answer:
            step_two_how_often_do_you_adjust_your_communication_style_to_better_connect.question_answer,
        },
        {
          question:
            step_two_how_do_you_typically_respond_when_facing_conflict.question_label,
          answer:
            step_two_how_do_you_typically_respond_when_facing_conflict.question_answer,
        },
        {
          question:
            step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics.question_label,
          answer:
            step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics.question_answer,
        },
      ];
    });

    return {
      step_two_how_often_do_you_recognize_your_emotions,
      step_two_how_well_do_you_handle_negative_feedback,
      step_two_how_often_do_you_adjust_your_communication_style_to_better_connect,
      step_two_how_do_you_typically_respond_when_facing_conflict,
      step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics,

      // Getters
      get_step_two_how_often_do_you_recognize_your_emotions,
      get_step_two_how_well_do_you_handle_negative_feedback,
      get_step_two_how_often_do_you_adjust_your_communication_style_to_better_connect,
      get_step_two_how_do_you_typically_respond_when_facing_conflict,
      get_step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics,
      get_is_step_valid,
      get_answers_for_submission,

      // Mutations
      update_step_two_how_often_do_you_recognize_your_emotions,
      update_step_two_how_well_do_you_handle_negative_feedback,
      update_step_two_how_often_do_you_adjust_your_communication_style_to_better_connect,
      update_step_two_how_do_you_typically_respond_when_facing_conflict,
      update_step_two_how_frequently_do_you_feel_comfortable_discussing_difficult_topics,
    };
  }
);
