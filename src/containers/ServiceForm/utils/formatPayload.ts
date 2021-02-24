import {
  HealthHubServiceValueById,
  HealthHubServiceFieldData,
  HealthHubServiceFieldById,
  HealthHubServiceById,
  HealthHubServiceInput,
} from 'generated-types';

type HealthHubFieldValidationForm = {
  min: number;
  max: number;
  required: boolean;
  numbersOnly: boolean;
  currentDate: boolean;
};

const getFormattedValuesData = (data: Record<string, string>[]) => {
  return data.reduce((prev, curr) => {
    const { label, value } = curr;
    return { ...prev, [label]: value };
  }, {});
};

const getFormattedValues = (values?: HealthHubServiceValueById[] | null) => {
  if (!values) return null;
  return values.map(({ key, label, data }) => {
    const payload = { key, label };
    if (!data) return payload;
    return { ...payload, data: getFormattedValuesData(data) };
  });
};

const getFormattedValidations = (validations: HealthHubFieldValidationForm) => {
  const { min, max, ...booleanProps } = validations;
  const optionalMin = min ? { min } : {};
  const optionalMax = max ? { max } : {};
  return { ...booleanProps, ...optionalMin, ...optionalMax };
};

const getFormattedData = (data?: HealthHubServiceFieldData | null) => {
  if (!data?.unit) return null;
  return data;
};

const getFormattedProcedureFields = (procedureFields: HealthHubServiceFieldById[]) => {
  return procedureFields.map(({ values, validations, data, ...procedureField }) => {
    return {
      ...procedureField,
      values: getFormattedValues(values),
      validations: getFormattedValidations(validations as HealthHubFieldValidationForm),
      data: getFormattedData(data),
    };
  });
};

export const getFormattedPrice = (price?: string | null) => {
  if (!price) return null;
  if (typeof price === 'number') return price;
  const unmaskPrice = price.replace(/R\$ /g, '').replace(/\./g, '').replace(',', '.');
  return parseFloat(unmaskPrice);
};

export const getFormattedPayload = (
  payload: HealthHubServiceById
): HealthHubServiceInput => {
  return {
    ...payload,
    price: (payload.price as unknown) as number | null,
    procedureFields: getFormattedProcedureFields(payload.procedureFields),
  };
};
