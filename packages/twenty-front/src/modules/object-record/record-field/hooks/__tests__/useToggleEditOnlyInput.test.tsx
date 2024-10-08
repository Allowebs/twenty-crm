import { gql } from '@apollo/client';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { act, renderHook, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { useUpdateOneRecord } from '@/object-record/hooks/useUpdateOneRecord';
import { booleanFieldDefinition } from '@/object-record/record-field/__mocks__/fieldDefinitions';
import {
  FieldContext,
  RecordUpdateHook,
  RecordUpdateHookParams,
} from '@/object-record/record-field/contexts/FieldContext';
import { useToggleEditOnlyInput } from '@/object-record/record-field/hooks/useToggleEditOnlyInput';

const recordId = 'recordId';

const mocks: MockedResponse[] = [
  {
    request: {
      query: gql`
        mutation UpdateOneCompany(
          $idToUpdate: ID!
          $input: CompanyUpdateInput!
        ) {
          updateCompany(id: $idToUpdate, data: $input) {
            __typename
            updatedAt
            domainName {
              primaryLinkUrl
              primaryLinkLabel
              secondaryLinks
            }
            visaSponsorship
            address {
              addressStreet1
              addressStreet2
              addressCity
              addressState
              addressCountry
              addressPostcode
              addressLat
              addressLng
            }
            position
            employees
            deletedAt
            accountOwnerId
            annualRecurringRevenue {
              amountMicros
              currencyCode
            }
            id
            name
            xLink {
              primaryLinkUrl
              primaryLinkLabel
              secondaryLinks
            }
            createdAt
            createdBy {
              source
              workspaceMemberId
              name
            }
            workPolicy
            introVideo {
              primaryLinkUrl
              primaryLinkLabel
              secondaryLinks
            }
            linkedinLink {
              primaryLinkUrl
              primaryLinkLabel
              secondaryLinks
            }
            tagline
            idealCustomerProfile
          }
        }
      `,
      variables: {
        idToUpdate: 'recordId',
        input: { idealCustomerProfile: true },
      },
    },
    result: jest.fn(() => ({
      data: {
        updateWorkspaceMember: {
          id: 'recordId',
        },
      },
    })),
  },
];

const Wrapper = ({ children }: { children: ReactNode }) => {
  const useUpdateOneRecordMutation: RecordUpdateHook = () => {
    const { updateOneRecord } = useUpdateOneRecord({
      objectNameSingular: CoreObjectNameSingular.Company,
    });

    const updateEntity = ({ variables }: RecordUpdateHookParams) => {
      updateOneRecord?.({
        idToUpdate: variables.where.id as string,
        updateOneRecordInput: variables.updateOneRecordInput,
      });
    };

    return [updateEntity, { loading: false }];
  };

  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      <FieldContext.Provider
        value={{
          fieldDefinition: booleanFieldDefinition,
          recordId,
          hotkeyScope: 'hotkeyScope',
          isLabelIdentifier: false,
          useUpdateRecord: useUpdateOneRecordMutation,
        }}
      >
        <RecoilRoot>{children}</RecoilRoot>
      </FieldContext.Provider>
    </MockedProvider>
  );
};

describe('useToggleEditOnlyInput', () => {
  it('should toggle field', async () => {
    const { result } = renderHook(
      () => ({ toggleField: useToggleEditOnlyInput() }),
      {
        wrapper: Wrapper,
      },
    );

    act(() => {
      result.current.toggleField();
    });

    await waitFor(() => {
      expect(mocks[0].result).toHaveBeenCalled();
    });
  });
});
