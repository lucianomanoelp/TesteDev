import gql from 'graphql-tag';

export const buscaVeiculo = gql`
  query BuscaVeiculo($page: Int, $limit: Int, $query: String) {
    buscaVeiculo(page: $page, limit: $limit, query: $query) {
      pageInfo {
        hasNextPage
        page
      }
      total
      edges {
        node {
          _id
          marca
          modelo
          ano_fabricacao
          ano_modelo
          cor
        }
      }
    }
  }
`;