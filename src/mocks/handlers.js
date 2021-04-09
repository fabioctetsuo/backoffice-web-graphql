import { graphql } from 'msw';

export const handlers = [
  graphql.query('service', (req, res, ctx) => {
    return res(
      ctx.data({
        service: {
          emitDeclaration: true,
          id: '5fc9607adea2302e164d721f',
          info: 'Diretamente na farmácia',
          name: 'Hepatite A e B',
          price: null,
          type: 'VACCINE',
          result: null,
          description: null,
          preparation: null,
          procedureFields: [
            {
              key: 'indication',
              label: 'Indicação',
              type: 'TEXT',
              validations: {
                min: 5,
                max: 500,
                required: true,
                numbersOnly: false,
                currentDate: false,
                __typename: 'HealthHubFieldValidation',
              },
              position: 1,
              values: null,
              data: null,
              __typename: 'HealthHubServiceFieldById',
            },
            {
              key: 'vaccine',
              label: 'Vacina',
              type: 'SELECT',
              position: 2,
              validations: {
                min: null,
                max: null,
                required: true,
                numbersOnly: false,
                currentDate: false,
                __typename: 'HealthHubFieldValidation',
              },
              values: [
                {
                  key: 'twinrix',
                  label: 'Twinrix',
                  data: [{ label: 'fabricante', value: 'GSK' }],
                  __typename: 'HealthHubServiceValueById',
                },
              ],
              data: null,
              __typename: 'HealthHubServiceFieldById',
            },
            {
              key: 'shelf_life',
              label: 'Validade',
              type: 'DATE',
              position: 3,
              validations: {
                min: null,
                max: null,
                required: true,
                numbersOnly: false,
                currentDate: true,
                __typename: 'HealthHubFieldValidation',
              },
              values: null,
              data: null,
              __typename: 'HealthHubServiceFieldById',
            },
            {
              key: 'healthcare_professional_area',
              label: 'Se sim, qual a área?',
              type: 'TEXT',
              position: 4,
              validations: {
                min: 1,
                max: 200,
                required: true,
                numbersOnly: false,
                currentDate: true,
                __typename: 'HealthHubFieldValidation',
              },
              values: null,
              data: null,
              __typename: 'HealthHubServiceById',
            },
          ],
        },
      })
    );
  }),
  graphql.mutation('updateService', (req, res, ctx) => {
    return res(
      ctx.data({
        updateService: {
          info: 'Diretamente na farmácia',
          name: 'Crazy Service',
          price: 20,
          type: 'VACCINE',
          description: 'Description test',
          result: 'Result test',
          preparation: 'Preparation test',
          procedureFields: [
            {
              key: 'indication',
              label: 'Indicação médica',
              type: 'TEXTAREA',
              position: 1,
              validations: {
                min: 5,
                max: 500,
                required: true,
                numbersOnly: false,
                currentDate: false,
              },
              values: null,
              data: null,
            },
            {
              key: 'vaccine',
              label: 'Vacina',
              type: 'SELECT',
              position: 2,
              validations: {
                required: true,
                numbersOnly: false,
                currentDate: false,
              },
              values: [
                {
                  key: 'twinrix',
                  label: 'Twinrix',
                  data: { fabricante: 'GSK' },
                },
              ],
              data: null,
            },
            {
              key: 'shelf_life',
              label: 'Validade',
              type: 'DATE',
              position: 3,
              validations: {
                required: true,
                numbersOnly: false,
                currentDate: true,
              },
              values: null,
              data: null,
            },
            {
              key: 'diastolic_blood_pressure',
              label: 'Pressão arterial - diastólica',
              type: 'INTEGER',
              position: 4,
              validations: {
                min: 1,
                max: 300,
                required: true,
                numbersOnly: true,
                currentDate: false,
              },
              values: null,
              data: { unit: 'mmHg' },
            },
          ],
        },
      })
    );
  }),
];
