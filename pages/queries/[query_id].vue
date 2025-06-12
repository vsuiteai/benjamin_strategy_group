<script setup lang="ts">
import { useModalStore } from "~/store/modal_store";
import { modalTypes } from "~/config/modal_types";
import { initAccordions } from "flowbite";

const route = useRoute();
const domain = useDomain();
const query_id = route.params.query_id as string;

definePageMeta({
  layout: "authenticated",
  breadcrumb_top: "",
  breadcrumb_bottom: "Query",
  middleware: ["authenticated"],
});

const modal_store = useModalStore();
const queryController = useQueryController();

const query = ref<Query>(null);
const prompt_types = ref<Record<string, boolean>>({
  "Narrative Builder": false,
  "Financial Risk Scoring Engine": false,
  "Strategic Diagnostic & Competitive Landscape": false,
  "Nirvana Navigation Scenario Architect": false,
});
const loading_prompt = ref<boolean>(true);

if (query_id) {
  route.meta.breadcrumb_top = `${query_id}`;
}

const parse_query_keys = () => {
  if (!query.value) return;

  if (query.value["BSANarrativeBuilder"])
    prompt_types.value["Narrative Builder"] = true;
  if (query.value["BSAFinancialRiskScoringEngine"])
    prompt_types.value["Financial Risk Scoring Engine"] = true;
  if (query.value["StrategicDiagnosticAndCompetitiveLandscape"])
    prompt_types.value["Strategic Diagnostic & Competitive Landscape"] = true;
  if (query.value["NirvanaNavigationScenarioArchitect"])
    prompt_types.value["Nirvana Navigation Scenario Architect"] = true;
};

const parse_BSANarrativeBuilder = () => {
  const input = query.value?.BSANarrativeBuilder?.prompt_result ?? "";

  if (input === "") return "";

  const cleanedText = input
    .replace(/<\/?current_state_narrative>/g, "") // Remove tags
    .replace(/\\n/g, "\n") // Convert \n to actual newlines
    .trim();

  const paragraphs = cleanedText
    .split(/\n{2,}/) // Split by double newlines
    .map((p) => `<p class="mb-2">${p.trim()}</p>`) // Wrap in <p> tags
    .join("\n");

  return `<div>\n  <h2 class="font-bold mb-4">Current State Narrative</h2>\n  ${paragraphs}\n</div>`;
};

function parse_BSAFinancialRiskScoringEngine() {
  const input = query.value?.BSAFinancialRiskScoringEngine?.prompt_result ?? "";

  if (input === "") return "";
  // Clean and normalize input
  const cleanText = input
    .replace(/\\n/g, "\n")
    .replace(/<\/?financial_risk_assessment>/g, "")
    .trim();

  // Extract individual sections using RegExp
  const extractTagContent = (tag: string, text: string) => {
    const match = new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`).exec(text);
    return match ? match[1].trim() : "";
  };

  const scoreBlocks = [
    "liquidity_score",
    "efficiency_score",
    "debt_burden_score",
    "cash_flow_score",
    "resilience_score",
  ]
    .map((tag) => {
      const block = extractTagContent(tag, cleanText);
      const score = extractTagContent("score", block);
      const rationale = extractTagContent("rationale", block);
      return `<h3 class="font-semibold mb-2">${tag
        .replace(/_/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())
        .replace(
          " Score",
          " Score"
        )}: ${score}</h3>\n<p class="mb-3">${rationale}</p>`;
    })
    .join("\n");

  const totalScore = extractTagContent("total_score", cleanText);
  const posture = extractTagContent("financial_posture", cleanText);
  const summary = extractTagContent("summary", cleanText);
  const recommendations = extractTagContent("recommendations", cleanText)
    .split(/•/g)
    .filter(Boolean)
    .map((item) => `<li>${item.trim()}</li>`)
    .join("\n");

  return `
<h2 class="font-bold mb-4">Financial Risk Assessment</h2>
<div class="mb-4">
  ${scoreBlocks}
</div>

<div class="mb-4">
  <h3 class="font-semibold mb-2">Total Score: ${totalScore}</h3>
  <p>Financial Posture: ${posture}</p>
</div>

<div class="mb-4">
  <h3 class="font-semibold mb-2">Summary</h3>
  <p>${summary}</p>
</div>

<div class="mb-4">
  <h3 class="font-semibold mb-2">Recommendations</h3>
  <ul class="space-y-1 list-disc list-inside ">
    ${recommendations}
  </ul>
</div>
`.trim();
}

function parse_StrategicDiagnosticAndCompetitiveLandscape() {
  const input =
    query.value?.StrategicDiagnosticAndCompetitiveLandscape?.prompt_result ??
    "";

  return input;
}

function parse_NirvanaNavigationScenarioArchitect() {
  const input =
    query.value?.NirvanaNavigationScenarioArchitect?.prompt_result ?? "";

  return input;
}

onBeforeMount(async () => {
  const res = await queryController.get_query(query_id);
  query.value = res.query as Query;

  parse_query_keys();

  loading_prompt.value = false;
});

onMounted(() => {
  initAccordions();
});
onUpdated(() => {
  initAccordions();
});
</script>

<template>
  <section class="min-w-full min-h-full px-[25px] lg:px-[50px] mb-[50px]">
    <div
      class="grid grid-cols-12 items-start justify-between gap-x-[20px] w-full mb-20"
    >
      <div class="col-span-7"></div>

      <div class="col-span-5 flex justify-start overflow-y-scroll">
        <div
          class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden p-4 w-full"
        >
          <div class="mb-3">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
              Overview
            </h3>
            <div
              v-if="false"
              class="mb-1 font-bold text-xs text-gray-500 dark:text-white w-full flex items-center justify-start gap-x-3"
            >
              <div class="flex items-center justify-end">
                <span class="mr-[3px]">
                  <IconsTag />
                </span>
                <span class="font-bold text-xs text-gray-500 dark:text-white"
                  >tag number</span
                >
              </div>
              <div class="flex items-center justify-end">
                <span class="mr-[3px]">
                  <IconsTag />
                </span>
                <span class="font-bold text-xs text-gray-500 dark:text-white"
                  >tag number</span
                >
              </div>
            </div>
          </div>
          <template v-if="loading_prompt">
            <div class="flex items-center justify-center w-full h-56">
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-gray-200 animate-spin fill-black"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </template>
          <template v-else>
            <div
              class="mb-4 px-4 text-right text-sm font-light text-gray-500 dark:text-gray-400"
            >
              <div
                v-if="query?.status === 'processing'"
                class="mb-4 inline-block px-3 py-1 text-xs font-medium leading-none text-center text-gray-800 bg-gray-200 rounded-md animate-pulse"
              >
                processing
              </div>
              <div
                v-else-if="query?.status === 'completed'"
                class="mb-4 inline-block px-3 py-1 text-xs font-medium leading-none text-center text-green-800 bg-green-200 rounded-md"
              >
                <span>
                  <IconsTickMark class="inline" :fill="'#016630'" />
                </span>
                completed
              </div>
              <div
                v-else-if="query?.status === 'failed'"
                class="mb-4 inline-block px-3 py-1 text-xs font-medium leading-none text-center text-red-800 bg-red-200 rounded-md"
              >
                failed
              </div>

              <p
                class="mb-1 font-bold text-xs text-gray-500 dark:text-white capitalize"
              >
                {{ query?.client?.client_company_name }}
              </p>
              <p class="mb-1 font-bold text-xs text-gray-500 dark:text-white">
                {{ query?.formattedDate }}
              </p>

              <div class>
                <template v-for="(value, key) in prompt_types">
                  <div
                    :class="{
                      'bg-green-300 text-green-800': value,
                      'bg-red-300 text-red-800': !value,
                    }"
                    class="inline-block items-center justify-end mb-1 text-xs font-medium ms-2 px-2.5 py-0.5 rounded-md"
                  >
                    {{ key }}
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <!-- {{ query }} -->
    <div
      class="grid grid-cols-12 items-start justify-between gap-x-[20px] w-full"
    >
      <div class="col-span-12">
        <h3 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Prompts
        </h3>
        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="dark:bg-gray-900 text-gray-900 dark:text-white"
          data-inactive-classes="text-gray-500 dark:text-gray-400"
        >
          <h2
            v-if="prompt_types['Narrative Builder']"
            id="accordion-flush-heading-1"
          >
            <button
              type="button"
              class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-1"
              aria-expanded="true"
              aria-controls="accordion-flush-body-1"
            >
              <span>BSA Narrative Builder</span>
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            v-if="prompt_types['Narrative Builder']"
            id="accordion-flush-body-1"
            class="hidden"
            aria-labelledby="accordion-flush-heading-1"
          >
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
              <div v-html="parse_BSANarrativeBuilder()"></div>
            </div>
          </div>
          <h2
            v-if="prompt_types['Financial Risk Scoring Engine']"
            id="accordion-flush-heading-2"
          >
            <button
              type="button"
              class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-2"
              aria-expanded="false"
              aria-controls="accordion-flush-body-2"
            >
              <span>Financial Risk Scoring Engine</span>
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            v-if="prompt_types['Financial Risk Scoring Engine']"
            id="accordion-flush-body-2"
            class="hidden"
            aria-labelledby="accordion-flush-heading-2"
          >
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
              <div v-html="parse_BSAFinancialRiskScoringEngine()"></div>
            </div>
          </div>
          <h2
            v-if="prompt_types['Strategic Diagnostic & Competitive Landscape']"
            id="accordion-flush-heading-3"
          >
            <button
              type="button"
              class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-3"
              aria-expanded="false"
              aria-controls="accordion-flush-body-3"
            >
              <span>Strategic Diagnostic & Competitive Landscape</span>
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            v-if="prompt_types['Strategic Diagnostic & Competitive Landscape']"
            id="accordion-flush-body-3"
            class="hidden"
            aria-labelledby="accordion-flush-heading-3"
          >
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
              <div
                v-html="parse_StrategicDiagnosticAndCompetitiveLandscape()"
              ></div>
            </div>
          </div>
          <h2
            v-if="prompt_types['Nirvana Navigation Scenario Architect']"
            id="accordion-flush-heading-4"
          >
            <button
              type="button"
              class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-4"
              aria-expanded="false"
              aria-controls="accordion-flush-body-4"
            >
              <span>Nirvana Navigation Scenario Architect</span>
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            v-if="prompt_types['Nirvana Navigation Scenario Architect']"
            id="accordion-flush-body-4"
            class="hidden"
            aria-labelledby="accordion-flush-heading-4"
          >
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
              <div v-html="parse_NirvanaNavigationScenarioArchitect()"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
