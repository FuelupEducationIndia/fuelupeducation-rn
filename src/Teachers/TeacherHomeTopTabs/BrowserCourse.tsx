import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import theme, { Card, Text } from '../../theme'
import Icon from 'react-native-vector-icons/Feather'
import { SearchBar, CourseCard, Button, FilterModal } from '../../components'

// Testing Data
import Thumbnail from '../../assets/images/thumbnail1.png'
import Thumbnai2 from '../../assets/images/thumbnail2.png'
import Thumbnai3 from '../../assets/images/thumbnail3.png'

const data = [
  {
    id: '1',
    title: 'Micro-organisms s sdf ssdfasd',
    thumbnail: Thumbnail,
    author: 'Sarah William',
  },
  {
    id: '2',
    title: 'Micro-organisms',
    thumbnail: Thumbnai2,
    author: 'Sarah William',
  },
  {
    id: '3',
    title: 'Micro-organisms',
    thumbnail: Thumbnai3,
    author: 'Sarah William',
  },
  {
    id: '4',
    title: 'Micro-organisms',
    thumbnail: Thumbnail,
    author: 'Sarah William',
  },
  {
    id: '5',
    title: 'Micro-organisms',
    thumbnail: Thumbnai2,
    author: 'Sarah William',
  },
  {
    id: '6',
    title: 'Micro-organisms',
    thumbnail: Thumbnai3,
    author: 'Sarah William',
  },
]

const BrowserCourse = () => {
  const [search, setSearch] = React.useState('')
  const [showFilter, setShowFilter] = React.useState(false)

  const onSearch = () => {
    console.log('searching')
    return
  }
  const onPrev = () => {
    return
  }
  const onNext = () => {
    return
  }

  return (
    <ScrollView>
      <Card
        variant='elevated'
        borderRadius='l'
        borderTopLeftRadius='none'
        borderTopRightRadius='none'
        marginBottom='l'
        backgroundColor='white'
        padding='s'>
        <SearchBar
          value={search}
          onChange={(text: string) => setSearch(text)}
          onSubmit={() => onSearch()}
        />
        <View style={{ alignItems: 'flex-start' }}>
          <TouchableOpacity
            onPress={() => setShowFilter(true)}
            activeOpacity={0.9}
            style={styles.filterButton}>
            <Text variant='body' marginRight='s' color='primary'>
              Filter
            </Text>
            <Icon name={'filter'} color={theme.colors.primary} size={15} />
          </TouchableOpacity>
        </View>
        <FilterModal
          visible={showFilter}
          onRequestClose={() => setShowFilter(false)}
        />
        <View
          style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {data.map((data) => {
            return (
              <CourseCard
                key={data.id}
                title={data.title}
                thumbnail={data.thumbnail}
                author={data.author}
              />
            )
          })}
        </View>
        <View
          style={{
            marginVertical: theme.spacing.s,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Button
            onPress={onPrev}
            variant='default'
            style={{ backgroundColor: 'white' }}
            iconSize={18}
            label='Previous'
            icon='chevron-left'
          />
          <Button
            onPress={onNext}
            variant='default'
            style={{ backgroundColor: 'white' }}
            iconSize={18}
            label='Next'
            icon='chevron-right'
            iconRight={true}
          />
        </View>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  filterButton: {
    backgroundColor: theme.colors.lightBlue,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginVertical: theme.spacing.s,
  },
})
export default BrowserCourse
