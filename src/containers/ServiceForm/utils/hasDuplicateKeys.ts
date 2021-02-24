import { HealthHubServiceById } from 'generated-types';
import strings from 'strings';

const texts = strings.services;

export const hasDuplicateKeys = (
  payload: HealthHubServiceById,
  setError: (name: string, message: any) => void
) => {
  const { procedureFields } = payload;
  const procedureKeys = procedureFields.reduce(
    (prev: (string | null | undefined)[], curr, position) => {
      if ([...prev].includes(curr.key)) {
        setError(`procedureFields[${position}].key`, {
          message: texts.form.feedback.duplicated.key,
        });
      }
      return [...prev, curr.key];
    },
    []
  );
  return procedureKeys.length !== new Set(procedureKeys).size;
};
