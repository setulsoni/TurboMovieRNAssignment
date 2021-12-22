import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import React, { useState } from 'react';
import {
  TYPES,
  fetchMovieList,
  fetchMovieListReset
} from '../../actions/MovieActions';
import { getMovieData, getMovieList } from '../../selectors/MovieSelectors';
import { hasErrorsSelector, isLoadingSelector, successSelector } from '../../selectors/StatusSelectors';
import { useDispatch, useSelector } from 'react-redux';

import MovieItem from './MovieItem';
import { Strings } from '../../constants';
import { logo } from '../../assets';
import { styles } from './MovieList.styles';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';

export function MovieList(props) {

  const [error, setError] = useState('');
  const [pageNo, setPageNo] = useState(1);
  const [isRefreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const isLoading = useSelector(state => isLoadingSelector([TYPES.FETCH_MOVIE_LIST], state));
  const success = useSelector(state => successSelector([TYPES.FETCH_MOVIE_LIST], state));
  const hasErrors = useSelector(state => hasErrorsSelector([TYPES.FETCH_MOVIE_LIST], state));

  const movieList = useSelector(state => getMovieList(state));
  const movieData = useSelector(state => getMovieData(state));

  if ((success || hasErrors) && isFocused) {
    setRefreshing(false)
    if (!movieList || movieList.length == 0) {
      setError('No data found.')
    }
    dispatch(fetchMovieListReset()), [dispatch];
  }

  const fetchData = (pageNo) => {
    dispatch(fetchMovieList(pageNo)), [dispatch];
  }

  const onRefresh = () => {
    setPageNo(1);
    setRefreshing(true)
    fetchData(1);
  }

  useEffect(() => {
    setPageNo(1);
    setRefreshing(true);
    fetchData(1);
  }, []);


  const onEndReached = () => {
    if (movieList.length < movieData.movie_count) {
      fetchData(pageNo + 1);
      setPageNo(pageNo + 1);
    }
  }

  const renderFooter = (isShowFooter) => {
    if (isShowFooter) {
      return <ActivityIndicator />
    }
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ paddingTop: 16 }}
        keyExtractor={(item, index) => `${item.id} ${index}`}
        data={movieList}
        onRefresh={() => onRefresh()}
        refreshing={isRefreshing}
        onEndReachedThreshold={0.5}
        onEndReached={onEndReached}
        ListFooterComponent={() => renderFooter(movieList.length < movieData.movie_count)}
        ListEmptyComponent={() => <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>{error}</Text>
        </View>
        }
        renderItem={({ item }) => {
          return (
            <MovieItem movieItemData={item} />
          )
        }
        }
      />
    </View>
  );
}
