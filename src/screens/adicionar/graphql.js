import gql from 'graphql-tag';

export const createVeiculo = gql`
  mutation createVeiculo($veiculo: VeiculoInput!) {
    createVeiculo(data: $veiculo)
  }
`;