import gql from 'graphql-tag';

export const getVeiculo = gql`
  query veiculo($id: ID!) {
    veiculo(id: $id) {
      _id
      marca
      modelo
      ano_fabricacao
      ano_modelo
      cor
    }
  }
`;

export const updateVeiculo = gql`
  mutation updateVeiculo($id: ID!, $data: JSON!) {
    updateVeiculo(id: $id, data: $data)
  }
`;

export const updateVeiculoCache = gql`
  mutation updateVeiculoCache($id: ID!, $data: JSON!) {
    updateVeiculoCache(id: $id, data: $data) @client
  }
`;