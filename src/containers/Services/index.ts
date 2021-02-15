export enum HealthHubServiceFieldType {
  Float = 'FLOAT',
  Integer = 'INTEGER',
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Datetime = 'DATETIME',
  Text = 'TEXT',
  Textarea = 'TEXTAREA',
  Select = 'SELECT',
  FileUpload = 'FILE_UPLOAD',
  Label = 'LABEL',
}

export enum HealthHubFieldType {
  Vaccine = 'VACCINE',
  PharmaService = 'PHARMA_SERVICE',
  RapidTest = 'RAPID_TEST',
}

type HealthHubServiceValue = {
  key: string;
  label: string;
  data?: any;
};

type HealthHubFieldValidation = {
  min?: number;
  max?: number;
  required?: boolean;
  numbersOnly?: boolean;
  currentDate?: boolean;
};

type HealthHubServiceFieldData = {
  unit?: string;
};

type HealthHubServiceField = {
  key?: string;
  label: string;
  type: HealthHubServiceFieldType;
  value?: string;
  values?: HealthHubServiceValue[];
  validations?: HealthHubFieldValidation;
  data?: HealthHubServiceFieldData;
};

export type HealthHubService = {
  id: string;
  name: string;
  info?: string;
  price?: number;
  procedureFields: HealthHubServiceField[];
  type: HealthHubFieldType;
  attachMedicalReport: boolean;
  emitDeclaration: boolean;
};

export { default } from './Services';
