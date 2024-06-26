import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: ['https://crm.allowebs.com/graphql'],
  overwrite: true,
  documents: ['./src/**/*.ts', '!src/generated/**/*.*'],
  generates: {
    './src/generated/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: true,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
};

export default config;
