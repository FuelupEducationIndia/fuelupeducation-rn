import React from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SearchIcon from '../../assets/svgs/search-icon.svg'
import theme, { Card } from '../../theme'
import { width } from '../../constants'

import FilterIcon from '../../assets/svgs/filter-icon.svg'

const BrowserCourse = () => {
  return (
    <ScrollView>
      <Card backgroundColor='white'>
        <View style={styles.searchBar}>
          <TextInput
            placeholder='Search Certificate...'
            style={[theme.textVariants.body, styles.searchInput]}
          />
          <TouchableOpacity activeOpacity={0.8} style={styles.searchButton}>
            <SearchIcon height={20} fill={theme.colors.darkSilver} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <TouchableOpacity activeOpacity={0.9} style={styles.filterButton}>
            <Text
              style={[
                theme.textVariants.body,
                { color: theme.colors.primary },
              ]}>
              Filter
            </Text>
            <FilterIcon />
          </TouchableOpacity>
        </View>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 15,
    width: width - 3 * theme.spacing.l,
  },
  searchInput: {
    backgroundColor: '#F5F4F4',
    color: theme.colors.darkSilver,
    paddingLeft: theme.spacing.l,
    borderColor: theme.colors.darkSilver,
    width: '100%',
    height: 45,
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
  filterButton: {
    backgroundColor: theme.colors.lightBlue,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
})
export default BrowserCourse
