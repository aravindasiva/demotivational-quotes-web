import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  quotes: Array<Quote>;
  randomQuote: Quote;
};

export type Quote = {
  __typename?: 'Quote';
  id: Scalars['ID'];
  quote: Scalars['String'];
  author: Scalars['String'];
};

export type GetRandomQuoteQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRandomQuoteQuery = (
  { __typename?: 'Query' }
  & { randomQuote: (
    { __typename?: 'Quote' }
    & Pick<Quote, 'id' | 'quote' | 'author'>
  ) }
);


export const GetRandomQuoteDocument = gql`
    query GetRandomQuote {
  randomQuote {
    id
    quote
    author
  }
}
    `;

/**
 * __useGetRandomQuoteQuery__
 *
 * To run a query within a React component, call `useGetRandomQuoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRandomQuoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRandomQuoteQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRandomQuoteQuery(baseOptions?: Apollo.QueryHookOptions<GetRandomQuoteQuery, GetRandomQuoteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRandomQuoteQuery, GetRandomQuoteQueryVariables>(GetRandomQuoteDocument, options);
      }
export function useGetRandomQuoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRandomQuoteQuery, GetRandomQuoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRandomQuoteQuery, GetRandomQuoteQueryVariables>(GetRandomQuoteDocument, options);
        }
export type GetRandomQuoteQueryHookResult = ReturnType<typeof useGetRandomQuoteQuery>;
export type GetRandomQuoteLazyQueryHookResult = ReturnType<typeof useGetRandomQuoteLazyQuery>;
export type GetRandomQuoteQueryResult = Apollo.QueryResult<GetRandomQuoteQuery, GetRandomQuoteQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    