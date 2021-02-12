import {
  HealthHubServiceValueById,
  HealthHubServiceFieldData,
  HealthHubServiceFieldById,
  HealthHubServiceById,
} from 'generated-types';

type HealthHubFieldValidationForm = {
  min?: number | '';
  max?: number | '';
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
  return Object.entries(validations)
    .filter(([_, value]) => value !== '')
    .reduce((acc, [prevKey, prevValue]) => {
      if (prevKey === 'min' || prevKey === 'max') {
        return { ...acc, [prevKey]: parseFloat(prevValue as string) };
      }
      return { ...acc, [prevKey]: prevValue };
    }, {});
};

const getFormattedData = (data?: HealthHubServiceFieldData | null) => {
  if (!data?.unit) return null;
  return data;
};

const getFormattedProcedureFields = (procedureFields: HealthHubServiceFieldById[]) => {
  return procedureFields.map(procedureField => {
    const values = getFormattedValues(procedureField.values);
    return {
      ...procedureField,
      values,
      validations: getFormattedValidations(
        procedureField.validations as HealthHubFieldValidationForm
      ),
      data: getFormattedData(procedureField.data),
    };
  });
};

const getFormattedPrice = (price?: string | null) => {
  if (!price) return null;
  if (typeof price === 'number') return price;
  const unmaskPrice = price.replace(/R\$ /g, '').replace(/\./g, '').replace(',', '.');
  return parseFloat(unmaskPrice);
};

export const getFormattedPayload = (payload: HealthHubServiceById) => {
  return {
    ...payload,
    price: getFormattedPrice((payload.price as unknown) as string),
    procedureFields: getFormattedProcedureFields(payload.procedureFields),
  };
};
