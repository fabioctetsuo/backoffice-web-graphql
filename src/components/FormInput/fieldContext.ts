import { createContext } from 'react';

export type FieldContextProps = {
  path?: string;
};

const FieldContext = createContext<Partial<FieldContextProps>>({
  path: '',
});

export default FieldContext;
