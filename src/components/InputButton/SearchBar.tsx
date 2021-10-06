import React from 'react'
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import SearchIcon from '../../assets/svgs/search-icon.svg'
import theme from '../../theme'

const SearchBar = (props: any) => {
  return (
    <View style={[styles.searchBar, { ...props.style }]}>
      <TextInput
        placeholder='Search Certificate...'
        style={[theme.textVariants.body, styles.searchInput]}
        value={props.value}
        onChangeText={(text: string) => props.onChange(text)}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.searchButton}
        onPress={() => props.onSubmit()}>
        <SearchIcon height={20} fill={theme.colors.darkSilver} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'stretch',
  },
  searchInput: {
    backgroundColor: '#F5F4F4',
    color: theme.colors.darkSilver,
    paddingLeft: theme.spacing.l,
    borderColor: theme.colors.darkSilver,
    height: 45,
    flex: 1,
    borderWidth: 0.2,
    borderRightWidth: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  searchButton: {
    height: 45,
    width: 45,
    backgroundColor: '#F5F4F4',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.2,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
})
export default SearchBar
