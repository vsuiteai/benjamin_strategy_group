<script setup lang="ts">
import { useModalStore } from "~/store/modal_store";

const route = useRoute();
const domain = useDomain();
const uid = route.params.uid as string;

definePageMeta({
  layout: "authenticated",
  breadcrumb_top: "",
  breadcrumb_bottom: "",
  middleware: ["authenticated"],
});

const clientController = useClientController();
const queryController = useQueryController();

const client = ref<ClientDetail | null>(null);
const submissions = ref<any[]>([]);
const queries = ref<any[]>([]);
const form_link_copied = ref(false);

watchEffect(() => {
  if (form_link_copied.value) {
    setTimeout(() => {
      form_link_copied.value = false;
    }, 3000);
  }
});

const copy_form = async (form_type: client_form_types) => {
  let url = "";

  switch (form_type) {
    case "advisior_onboarding_form":
      url = `${domain}/advisior-onboarding?uid=${uid}`;
      break;
    case "client_onboarding_form":
      url = `${domain}/client-onboarding?uid=${uid}`;
      break;
    case "asset_upload_form":
      url = `${domain}/asset-upload?uid=${uid}`;
      break;
  }

  await navigator.clipboard.writeText(url);
  form_link_copied.value = true;
};

watch(client, (new_val) => {
  if (new_val) {
    route.meta.breadcrumb_bottom = new_val.client_company_name.toUpperCase();
  }
});

const parse_query_keys = (query: Query) => {
  const prompt_types: Record<string, boolean> = {
    "Narrative Builder": false,
    "Financial Risk Scoring Engine": false,
    "Strategic Diagnostic & Competitive Landscape": false,
    "Nirvana Navigation Scenario Architect": false,
  };

  if (!query) return prompt_types;

  if (query["BSANarrativeBuilder"]) prompt_types["Narrative Builder"] = true;
  if (query["BSAFinancialRiskScoringEngine"])
    prompt_types["Financial Risk Scoring Engine"] = true;
  if (query["StrategicDiagnosticAndCompetitiveLandscape"])
    prompt_types["Strategic Diagnostic & Competitive Landscape"] = true;
  if (query["NirvanaNavigationScenarioArchitect"])
    prompt_types["Nirvana Navigation Scenario Architect"] = true;

  return prompt_types;
};

const goto_query = async (query_id: string) => {
  const router = useRouter();
  await router.push(`/queries/${query_id}`);
};

onBeforeMount(async () => {
  const res = await clientController.get_client(uid);
  console.log(res);

  client.value = res.client;

  submissions.value = (
    await clientController.get_client_submissions(uid)
  ).submissions;

  queries.value = (await queryController.get_queries(uid)).queries;
});
</script>

<template>
  <section class="min-w-full min-h-full px-[25px] lg:px-[50px] mb-[50px]">
    <div
      class="grid grid-cols-12 items-start justify-between gap-x-[20px] w-full mb-16"
    >
      <div class="col-span-7">
        <h3 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Submissions
        </h3>

        <div class="flex gap-2">
          <button
            @click="copy_form('advisior_onboarding_form')"
            class="flex items-center justify-center text-white bg-black hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center"
          >
            <IconsCopy class="mr-2" />
            Advisor onboarding form
          </button>
          <button
            @click="copy_form('client_onboarding_form')"
            class="flex items-center justify-center text-white bg-black hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center"
          >
            <IconsCopy class="mr-2" />
            Client onboarding form
          </button>
          <button
            @click="copy_form('asset_upload_form')"
            class="flex items-center justify-center text-white bg-black hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center"
          >
            <IconsCopy class="mr-2" />
            Asset Upload
          </button>
        </div>
        <p v-if="form_link_copied" class="my-2 text-xs font-semibold">
          form link copied
        </p>

        <div class="mt-14">
          <!-- {{ submissions }} -->
          <div
            v-if="submissions.length"
            class="border-l-2 border-gray-500 max-h-[400px] overflow-y-scroll"
          >
            <div
              v-for="sm in submissions"
              class="flex flex-col md:flex-row md:justify-between hover:bg-gray-400 p-4 hover:cursor-pointer"
            >
              <div class="mb-4 md:mb-0">
                <h3
                  v-if="(sm.form_type ?? '') == 'client_onboarding_form'"
                  class="text-xl font-bold mb-2"
                >
                  CEO Onboarding Form
                </h3>
                <h3
                  v-if="(sm.form_type ?? '') == 'advisior_onboarding_form'"
                  class="text-xl font-bold mb-2"
                >
                  Advisor Onboarding Form
                </h3>

                <p class="text-gray-600 text-sm">{{ sm.formattedDate }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-5 flex justify-start overflow-y-scroll">
        <div
          class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden p-4 w-full"
        >
          <!-- {{ client }} -->

          <div class="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
            <h3 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
              Contacts
            </h3>

            <div class="bg-white">
              <div
                v-if="client"
                class="relative flex items-center space-x-3 mt-4"
              >
                <div class="flex-shrink-0">
                  <div
                    class="h-8 w-8 rounded-full shadow flex items-center justify-center"
                  >
                    <svg
                      class="h-5 w-5"
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
                          d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div class="min-w-0 flex-1">
                  <!-- Extend touch target to entire panel -->
                  <p class="text-sm font-medium text-gray-900">
                    {{ client?.client_contact_fullname }}
                    <span class="text-xs"
                      >({{ client?.client_contact_work_email }})</span
                    >
                  </p>
                  <p class="truncate text-sm text-gray-500">
                    {{ client?.client_contact_role }}
                  </p>
                </div>
                <div>
                  <span
                    class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-indigo-900 dark:text-indigo-300"
                    >Primary</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- {{ queries.length }} -->
    <div v-if="queries.length > 0" class="w-full">
      <h3 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        AI Queries
      </h3>
      <div
        v-for="query in queries"
        class="w-full mb-6 p-6 bg-white border rounded-md"
      >
        <div class="flex justify-start items-center gap-3">
          <h3
            @click="goto_query(query.query_id)"
            class="text-lg text-gray-500 font-semibold decoration-dashed underline underline-offset-4 hover:opacity-[.5] hover:cursor-pointer"
          >
            {{ query.query_id }}
          </h3>
          <PromptsQueryStatus :status="query.status" />
        </div>
        <div class="mt-8">
          <PromptsPromptTypeBadges :prompt_types="parse_query_keys(query)" />
        </div>
        <p class="mt-2 text-gray-400">
          {{ query.formattedDate }}
        </p>
      </div>
    </div>
  </section>
</template>
