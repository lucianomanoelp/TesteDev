import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import VeiculoListItem from './VeiculoListItem';
import ListFooterComponent from './ListFooterComponent';
import { ScreenContainer } from '../../components';
import { buscaVeiculo } from './graphql';
import { Query } from "react-apollo";
import debounce from '../../utils/debounce';

export default class ListaScreen extends React.Component {

  state = {
    inputSearchText: '',
  };

  goToAdicionar = () => this.props.navigation.navigate('Adicionar');

  goToDetalhes = veiculoId => this.props.navigation.navigate('Detalhes', veiculoId);

  onSearchBarChangeText = inputSearchText => this.setState({ inputSearchText }); 

  onFetchMore = (fetchMore, buscaVeiculo, loading) => {
    if (buscaVeiculo.pageInfo.hasNextPage && !loading) {      
      fetchMore({
        variables: {
          page: buscaVeiculo.pageInfo.page + 1,
          limit: 20,
          query: this.state.inputSearchText
        },
        updateQuery: (prev, { fetchMoreResult }) => ({          
          ...fetchMoreResult,
          buscaVeiculo: {
            ...fetchMoreResult.buscaVeiculo,
            edges: [...prev.buscaVeiculo.edges, ...fetchMoreResult.buscaVeiculo.edges]
          }          
        })
      });
    }
  };

  render() {
    return(
      <ScreenContainer>
        <Navbar onAddPress={this.goToAdicionar}/>        

        <Searchbar onChangeText={debounce(this.onSearchBarChangeText, 500)} />
        
        <Query query={buscaVeiculo} 
            variables={{ page: 1, limit: 20, query: this.state.inputSearchText }}
            notifyOnNetworkStatusChange={true}>
          {({ loading, error, data, fetchMore, refetch, networkStatus }) => {
            return(
              <FlatList                  
                data={ (data.buscaVeiculo && data.buscaVeiculo.edges) ? data.buscaVeiculo.edges : [] }
                keyExtractor={ item => item.node._id }
                renderItem={ ({item}) => 
                  (<VeiculoListItem veiculo={ item.node}  onPress={ veiculoId => this.goToDetalhes({ veiculoId }) } />)
                }
                refreshControl={(
                  <RefreshControl 
                    refreshing={ loading && networkStatus === 4 }
                    onRefresh={() => refetch()}
                  />
                )}
                ListFooterComponent={(
                  <ListFooterComponent 
                    error={ error } 
                    loading={ loading && (networkStatus === 1 || networkStatus === 3) }
                    onTentarNovamentePress={() => this.onFetchMore(fetchMore, data.buscaVeiculo, loading)}
                  /> 
                )}
                onEndReachedThreshold={ 0 }
                onEndReached={() => this.onFetchMore(fetchMore, data.buscaVeiculo, loading)}
              />              
            )
          }}
        </Query>
      </ScreenContainer>
    );
  }
}