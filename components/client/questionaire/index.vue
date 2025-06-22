<script setup lang="ts">
const props = defineProps({
  questionaire: {
    required: true,
    type: Object,
  },
});

const emits = defineEmits(["close"]);

const active_question = ref();
const active_question_index = ref(0);

const goto_questionaire = () => {
  emits("close");
};

const change_active_question = (new_val: number) => {
  const questionaire_answers = props.questionaire.answers ?? [];

  if (questionaire_answers.length > 0) {
    active_question.value = questionaire_answers[new_val];
  }
};

const next_question = () => {
  const next_question_index = active_question_index.value + 1;
  const questionaire_answers = props.questionaire.answers ?? [];

  if (next_question_index >= questionaire_answers.length) {
    active_question_index.value = 0;
  } else {
    active_question_index.value = next_question_index;
  }

  change_active_question(active_question_index.value);
};

const prev_question = () => {
  if (active_question_index.value === 0) return;

  const next_question_index = active_question_index.value - 1;

  active_question_index.value = next_question_index;

  change_active_question(active_question_index.value);
};

onMounted(() => {
  change_active_question(active_question_index.value);
});
</script>

<template>
  <div class="grid grid-cols-12 items-start justify-start gap-x-8 w-full mt-24">
    <div
      class="col-span-4 min-h-[300px] h-full bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col items-center justify-start"
    >
      <div
        class="h-[90px] w-full bg-gray-700 rounded-t-lg flex items-center justify-between px-4"
      >
        <span class="text-white"
          >Benjamin Strategy {{ get_form_type(questionaire?.form_type ?? "") }}
        </span>

        <button
          class="h-8 w-8 rounded-full shadow inline-flex items-center justify-center bg-white"
        >
          <svg
            class="h-4 w-4"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title></title>
              <g id="Complete">
                <g id="edit">
                  <g>
                    <path
                      d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                    <polygon
                      fill="none"
                      points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div
        class="h-[85%] max-h-[80vh] w-full flex flex-col divide-y overflow-y-auto"
      >
        <div
          @click.self="
            () => {
              active_question_index = index;
              change_active_question(index);
            }
          "
          v-for="(ans, index) in questionaire.answers"
          :class="{
            'bg-gray-200': index === active_question_index,
          }"
          class="w-full flex gap-4 items-start px-4 py-6 hover:bg-gray-200 hover:cursor-pointer"
        >
          <div
            class="min-h-[50px] min-w-[50px] rounded-full shadow inline-flex items-center justify-center bg-indigo-200"
          >
            <svg
              class="h-[30px] w-[30px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.11241 7.82201C9.44756 6.83666 10.5551 6 12 6C13.7865 6 15 7.24054 15 8.5C15 9.75946 13.7865 11 12 11C11.4477 11 11 11.4477 11 12L11 14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14L13 12.9082C15.203 12.5001 17 10.7706 17 8.5C17 5.89347 14.6319 4 12 4C9.82097 4 7.86728 5.27185 7.21894 7.17799C7.0411 7.70085 7.3208 8.26889 7.84366 8.44673C8.36653 8.62458 8.93457 8.34488 9.11241 7.82201ZM12 20C12.8285 20 13.5 19.3284 13.5 18.5C13.5 17.6716 12.8285 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20Z"
                  fill="#3730A3"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <h6 class="mb-1 text-sm font-semibold tracking-tight text-gray-700">
              {{ ans.question }}
            </h6>
            <p class="text-sm tracking-tight text-gray-700">
              {{ format_answer(ans.answer) }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="col-span-8 min-h-[300px] h-full bg-white p-4 rounded-lg flex flex-col items-center justify-center"
    >
      <div
        class="h-[90%] w-full flex flex-col items-center justify-center relative"
      >
        <button
          @click="goto_questionaire"
          class="px-[20px] py-[8px] hover:opacity-[.65] rounded-[2px] flex items-center justify-center gap-[10px] text-black border-[1px] absolute top-[15px] right-[15px] text-white bg-black rounded-lg"
        >
          <span class="text-[18px] font-[500]">Questionaires</span>
        </button>
        <h5 class="mb-4 text-md font-bold tracking-tight text-gray-700">
          {{ format_answer(active_question?.question) }}
        </h5>
        <h5 class="mb-8 text-2xl font-bold tracking-tight text-gray-900">
          {{ format_answer(active_question?.answer) }}
        </h5>
      </div>
      <div class="h-[10%] w-full">
        <div class="w-full h-full flex gap-x-8 items-end justify-between">
          <button
            @click="prev_question"
            class="px-[20px] py-[8px] hover:opacity-[.65] rounded-[2px] flex items-center justify-center gap-[10px] text-black border-[1px]"
          >
            <span class="text-[18px] font-[500]">Back</span>
          </button>
          <button
            @click="next_question"
            class="px-[20px] py-[8px] hover:opacity-[.65] rounded-[2px] flex items-center justify-center gap-[10px] text-black border-[1px]"
          >
            <span class="text-[18px] font-[500]">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
