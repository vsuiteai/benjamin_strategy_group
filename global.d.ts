import type { Timestamp } from "firebase-admin/firestore";

declare global {
  type fileType = "csv" | "pdf" | "xlsx" | "word";

  type AdminDetail = {
    admin_id?: string;
    admin_username: string;
    admin_firstname: string;
    admin_lastname: string;
    admin_password: string;
    admin_created_at?: string;
    admin_updated_at?: string;
  };

  type ClientDetail = {
    client_id?: string;
    client_uid?: string;
    client_company_name: string;
    client_contact_fullname: string;
    client_contact_phone: string;
    client_contact_work_email: string;
    client_contact_role: string;
    client_created_at?: string;
    client_updated_at?: string;
  };

  type ClientUploadedFile = {
    file_id?: string;
    file_type: fileType;
    file_original_name: string;
    file_GCS_name: string;
    file_GCS_id: string;
    file_metric_contained: string;
    file_owner: string; // client_id
    created_at?: string;
    updated_at?: string;
  };

  type Pagination = {
    currentPage: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    showing: string;
    hasNext: boolean;
    hasPrev: boolean;
    pages: number[];
  };

  type client_form_types =
    | "client_onboarding_form"
    | "asset_upload_form"
    | "advisior_onboarding_form";

  type question_answer = {
    question: string;
    answer: string;
  };

  type file_to_be_uploaded = File | null;

  type Query_file = {
    OAF_id: number;
    OAF_openai_based_file_id: string;
    OAF_openai_based_file_name: string;
    OAF_openai_based_file_created_at: Timestamp;
    OAF_client_file: number;
  };

  type QueryProcessStatus = "processing" | "completed" | "failed";

  type Query = {
    id: string;
    created_at: Timestamp;
    status: QueryProcessStatus;
    client: ClientDetail;
    query_id: string;
    BSANarrativeBuilder?: {
      prompt_result: string;
      created_at: Timestamp;
      files_used: Query_file[];
    };
    BSAFinancialRiskScoringEngine?: {
      prompt_result: string;
      created_at: Timestamp;
      files_used: Query_file[];
    };
    StrategicDiagnosticAndCompetitiveLandscape?: {
      prompt_result: string;
      created_at: Timestamp;
      files_used: Query_file[];
    };

    NirvanaNavigationScenarioArchitect?: {
      prompt_result: string;
      created_at: Timestamp;
      files_used: Query_file[];
    };

    formattedDate: string;
  } | null;

  type EmailTypes = "insufficient_files";
}

export {};
