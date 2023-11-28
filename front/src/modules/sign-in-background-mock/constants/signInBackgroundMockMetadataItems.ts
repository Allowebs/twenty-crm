export const metadataItem = {
  __typename: 'object',
  id: '20202020-480c-434e-b4c7-e22408b97047',
  dataSourceId: '20202020-7f63-47a9-b1b3-6c7290ca9fb1',
  nameSingular: 'company',
  namePlural: 'companies',
  labelSingular: 'Company',
  labelPlural: 'Companies',
  description: 'A company',
  icon: 'IconBuildingSkyscraper',
  isCustom: false,
  isActive: true,
  isSystem: false,
  createdAt: '2023-11-23T15:38:02.187Z',
  updatedAt: '2023-11-23T15:38:02.187Z',
  fields: [
    {
      __typename: 'field',
      id: '20202020-5e4e-4007-a630-8a2617914889',
      type: 'TEXT',
      name: 'domainName',
      label: 'Domain Name',
      description:
        'The company website URL. We use this url to fetch the company icon',
      icon: 'IconLink',
      isCustom: false,
      isActive: true,
      isSystem: false,
      isNullable: true,
      createdAt: '2023-11-23T15:38:02.292Z',
      updatedAt: '2023-11-23T15:38:02.292Z',
      fromRelationMetadata: null,
      toRelationMetadata: null,
    },
    {
      __typename: 'field',
      id: '20202020-64b8-41bf-a01c-be6a806e8b70',
      type: 'DATE_TIME',
      name: 'updatedAt',
      label: 'Update date',
      description: null,
      icon: 'IconCalendar',
      isCustom: false,
      isActive: true,
      isSystem: true,
      isNullable: false,
      createdAt: '2023-11-23T15:38:02.292Z',
      updatedAt: '2023-11-23T15:38:02.292Z',
      fromRelationMetadata: null,
      toRelationMetadata: null,
    },
    {
      __typename: 'field',
      id: '20202020-7fbd-41ad-b64d-25a15ff62f04',
      type: 'NUMBER',
      name: 'employees',
      label: 'Employees',
      description: 'Number of employees in the company',
      icon: 'IconUsers',
      isCustom: false,
      isActive: true,
      isSystem: false,
      isNullable: true,
      createdAt: '2023-11-23T15:38:02.292Z',
      updatedAt: '2023-11-23T15:38:02.292Z',
      fromRelationMetadata: null,
      toRelationMetadata: null,
    },
    {
      __typename: 'field',
      id: '20202020-6d30-4111-9f40-b4301906fd3c',
      type: 'TEXT',
      name: 'name',
      label: 'Name',
      description: 'The company name',
      icon: 'IconBuildingSkyscraper',
      isCustom: false,
      isActive: true,
      isSystem: false,
      isNullable: true,
      createdAt: '2023-11-23T15:38:02.292Z',
      updatedAt: '2023-11-23T15:38:02.292Z',
      fromRelationMetadata: null,
      toRelationMetadata: null,
    },
    {
      __typename: 'field',
      id: '20202020-e7c8-4771-8cc4-ce0e8c36a3c0',
      type: 'RELATION',
      name: 'favorites',
      label: 'Favorites',
      description: 'Favorites linked to the company',
      icon: 'IconHeart',
      isCustom: false,
      isActive: true,
      isSystem: false,
      isNullable: true,
      createdAt: '2023-11-23T15:38:02.292Z',
      updatedAt: '2023-11-23T15:38:02.292Z',
      fromRelationMetadata: {
        __typename: 'relation',
        id: '73d9610a-a196-4186-b5b2-9a1da2d3bede',
        relationType: 'ONE_TO_MANY',
        toObjectMetadata: {
          __typename: 'object',
          id: '20202020-90e4-4701-a350-8ab75e23e3b8',
          dataSourceId: '20202020-7f63-47a9-b1b3-6c7290ca9fb1',
          nameSingular: 'favorite',
          namePlural: 'favorites',
        },
        toFieldMetadataId: '20202020-09e1-4384-ae3e-39e7956396ff',
      },
      toRelationMetadata: null,
    },
    {
      __typename: 'field',
      id: '20202020-ad10-4117-a039-3f04b7a5f939',
      type: 'TEXT',
      name: 'address',
      label: 'Address',
      description: 'The company address',
      icon: 'IconMap',
      isCustom: false,
      isActive: true,
      isSystem: false,
      isNullable: true,
      createdAt: '2023-11-23T15:38:02.292Z',
      updatedAt: '2023-11-23T15:38:02.292Z',
      fromRelationMetadata: null,
      toRelationMetadata: null,
    },
    {
      __typename: 'field',
      id: '20202020-0739-495d-8e70-c0807f6b2268',
      type: 'RELATION',
      name: 'accountOwner',
      label: 'Account Owner',
      description:
        'Your team member responsible for managing the company account',
      icon: 'IconUserCircle',
      isCustom: false,
      isActive: true,
      isSystem: false,
      isNullable: true,
      createdAt: '2023-11-23T15:38:02.292Z',
      updatedAt: '2023-11-23T15:38:02.292Z',
      fromRelationMetadata: null,
      toRelationMetadata: {
        __typename: 'relation',
        id: '729283e1-8134-494d-9df5-24a44e92c38b',
        relationType: 'ONE_TO_MANY',
        fromObjectMetadata: {
          __typename: 'object',
          id: '20202020-b550-40bb-a96b-9ab54b664753',
          dataSourceId: '20202020-7f63-47a9-b1b3-6c7290ca9fb1',
          nameSingular: 'workspaceMember',
          namePlural: 'workspaceMembers',
        },
        fromFieldMetadataId: '20202020-41bb-4c17-8979-40fa915df9e1',
      },
    },
    {
      __typename: 'field',
      id: '20202020-68b4-4c8e-af19-738eba2a42a5',
      type: 'RELATION',
      name: 'people',
      label: 'People',
      description: 'People linked to the company.',
      icon: 'IconUsers',
      isCustom: false,
      isActive: true,
      isSystem: false,
      isNullable: true,
      createdAt: '2023-11-23T15:38:02.292Z',
      updatedAt: '2023-11-23T15:38:02.292Z',
      fromRelationMetadata: {
        __typename: 'relation',
        id: '8256c11a-710d-48b5-bc86-f607895abec4',
        relationType: 'ONE_TO_MANY',
        toObjectMetadata: {
          __typename: 'object',
          id: '20202020-c64b-44bc-bd2c-502c99f49dca',
          dataSourceId: '20202020-7f63-47a9-b1b3-6c7290ca9fb1',
          nameSingular: 'person',
          namePlural: 'people',
        },
        toFieldMetadataId: '20202020-64e1-4080-b6ad-db03c3809885',
      },
      toRelationMetadata: null,
    },
    {
      __typename: 'field',
      id: '20202020-61af-4ffd-b79b-baed6db8ad11',
      type: 'RELATION',
      name: 'attachments',
      label: 'Attachments',
      description: 'Attachments linked to the company.',
      icon: 'IconFileImport',
      isCustom: false,
      isActive: true,
      isSystem: false,
      isNullable: true,
      createdAt: '2023-11-23T15:38:02.292Z',
      updatedAt: '2023-11-23T15:38:02.292Z',
      fromRelationMetadata: {
        __typename: 'relation',
        id: '54c7c707-09f8-4ce0-b2f6-0161443fffa8',
        relationType: 'ONE_TO_MANY',
        toObjectMetadata: {
          __typename: 'object',
          id: '20202020-5f98-4317-915d-3779bb821be2',
          dataSourceId: '20202020-7f63-47a9-b1b3-6c7290ca9fb1',
          nameSingular: 'attachment',
          namePlural: 'attachments',
        },
        toFieldMetadataId: '20202020-5463-4d03-9124-1775b9b7f955',
      },
      toRelationMetadata: null,
    },
    {
      __typename: 'field',
      id: '20202020-4dc2-47c9-bb15-6e6f19ba9e46',
      type: 'DATE_TIME',
      name: 'createdAt',
      label: 'Creation date',
      description: null,
      icon: 'IconCalendar',
      isCustom: false,
      isActive: true,
      isSystem: false,
      isNullable: false,
      createdAt: '2023-11-23T15:38:02.292Z',
      updatedAt: '2023-11-23T15:38:02.292Z',
      fromRelationMetadata: null,
      toRelationMetadata: null,
    },
    {
      __typename: 'field',
      id: '20202020-9e9f-4235-98b2-c76f3e2d281e',
      type: 'BOOLEAN',
      name: 'idealCustomerProfile',
      label: 'ICP',
      description:
        'Ideal Customer Profile:  Indicates whether the company is the most suitable and valuable customer for you',
      icon: 'IconTarget',
      isCustom: false,
      isActive: true,
      isSystem: false,
      isNullable: true,
      createdAt: '2023-11-23T15:38:02.292Z',
      updatedAt: '2023-11-23T15:38:02.292Z',
      fromRelationMetadata: null,
      toRelationMetadata: null,
    },
    {
      __typename: 'field',
      id: '20202020-8169-44a3-9e0b-6bad1ac50f87',
      type: 'UUID',
      name: 'id',
      label: 'Id',
      description: null,
      icon: null,
      isCustom: false,
      isActive: true,
      isSystem: true,
      isNullable: false,
      createdAt: '2023-11-23T15:38:02.292Z',
      updatedAt: '2023-11-23T15:38:02.292Z',
      fromRelationMetadata: null,
      toRelationMetadata: null,
    },
    {
      __typename: 'field',
      id: '20202020-a61d-4b78-b998-3fd88b4f73a1',
      type: 'LINK',
      name: 'linkedinLink',
      label: 'Linkedin',
      description: 'The company Linkedin account',
      icon: 'IconBrandLinkedin',
      isCustom: false,
      isActive: true,
      isSystem: false,
      isNullable: true,
      createdAt: '2023-11-23T15:38:02.292Z',
      updatedAt: '2023-11-23T15:38:02.292Z',
      fromRelationMetadata: null,
      toRelationMetadata: null,
    },
    {
      __typename: 'field',
      id: '20202020-e3fc-46ff-b552-3e757843f06e',
      type: 'RELATION',
      name: 'opportunities',
      label: 'Opportunities',
      description: 'Opportunities linked to the company.',
      icon: 'IconTargetArrow',
      isCustom: false,
      isActive: true,
      isSystem: false,
      isNullable: true,
      createdAt: '2023-11-23T15:38:02.292Z',
      updatedAt: '2023-11-23T15:38:02.292Z',
      fromRelationMetadata: {
        __typename: 'relation',
        id: '831b6b14-125c-4563-83a3-99d5e07c0a85',
        relationType: 'ONE_TO_MANY',
        toObjectMetadata: {
          __typename: 'object',
          id: '20202020-cae9-4ff4-9579-f7d9fe44c937',
          dataSourceId: '20202020-7f63-47a9-b1b3-6c7290ca9fb1',
          nameSingular: 'opportunity',
          namePlural: 'opportunities',
        },
        toFieldMetadataId: '20202020-31d5-4af5-b016-c61c1c265706',
      },
      toRelationMetadata: null,
    },
    {
      __typename: 'field',
      id: '20202020-0b9e-4b9e-8b0a-5b0b5b0b5b0b',
      type: 'UUID',
      name: 'accountOwnerId',
      label: 'Account Owner ID (foreign key)',
      description: 'Foreign key for account owner',
      icon: null,
      isCustom: false,
      isActive: true,
      isSystem: true,
      isNullable: true,
      createdAt: '2023-11-23T15:38:02.292Z',
      updatedAt: '2023-11-23T15:38:02.292Z',
      fromRelationMetadata: null,
      toRelationMetadata: null,
    },
    {
      __typename: 'field',
      id: '20202020-46e3-479a-b8f4-77137c74daa6',
      type: 'LINK',
      name: 'xLink',
      label: 'X',
      description: 'The company Twitter/X account',
      icon: 'IconBrandX',
      isCustom: false,
      isActive: true,
      isSystem: false,
      isNullable: true,
      createdAt: '2023-11-23T15:38:02.292Z',
      updatedAt: '2023-11-23T15:38:02.292Z',
      fromRelationMetadata: null,
      toRelationMetadata: null,
    },
    {
      __typename: 'field',
      id: '20202020-4a2e-4b41-8562-279963e8947e',
      type: 'RELATION',
      name: 'activityTargets',
      label: 'Activities',
      description: 'Activities tied to the company',
      icon: 'IconCheckbox',
      isCustom: false,
      isActive: true,
      isSystem: false,
      isNullable: true,
      createdAt: '2023-11-23T15:38:02.292Z',
      updatedAt: '2023-11-23T15:38:02.292Z',
      fromRelationMetadata: {
        __typename: 'relation',
        id: '56e2ab44-4718-4c05-b61c-a7f978d7bdd1',
        relationType: 'ONE_TO_MANY',
        toObjectMetadata: {
          __typename: 'object',
          id: '20202020-439a-4a41-83a3-3cda03d01d38',
          dataSourceId: '20202020-7f63-47a9-b1b3-6c7290ca9fb1',
          nameSingular: 'activityTarget',
          namePlural: 'activityTargets',
        },
        toFieldMetadataId: '20202020-9408-4cc0-9fe1-51467edb530b',
      },
      toRelationMetadata: null,
    },
    {
      __typename: 'field',
      id: '20202020-4a5a-466f-92d9-c3870d9502a9',
      type: 'CURRENCY',
      name: 'annualRecurringRevenue',
      label: 'ARR',
      description:
        'Annual Recurring Revenue: The actual or estimated annual revenue of the company',
      icon: 'IconMoneybag',
      isCustom: false,
      isActive: true,
      isSystem: false,
      isNullable: true,
      createdAt: '2023-11-23T15:38:02.292Z',
      updatedAt: '2023-11-23T15:38:02.292Z',
      fromRelationMetadata: null,
      toRelationMetadata: null,
    },
  ],
};