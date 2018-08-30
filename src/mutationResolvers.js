import gql from 'graphql-tag';

const query = gql`
  query veiculo($id: ID!) {
    veiculo(id: $id) @client {
      _id
      marca
      modelo
      ano_fabricacao
      ano_modelo
      cor
    }
  }
`;

export default {
  updateVeiculoCache: (_, { id, data }, { cache }) => {
    const previous = cache.readQuery({ query, variables: { id } });
    const newData = {
      veiculo:  Object.assign({}, previous.veiculo, data)
    };
    cache.writeQuery({ query, data: newData });
    return newData;
  } 
};