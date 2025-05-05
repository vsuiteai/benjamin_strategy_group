declare global {
  type fileType = "csv" | "pdf" | "xlsx" | "word";

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
}

export {};
