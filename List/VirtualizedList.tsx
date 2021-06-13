import React from 'react'
import { View, Text, FlatList } from 'react-native'

interface ListProps {
    children: React.ReactElement;
}

const VirtualizedList = ({children}: ListProps) => {
    return (
        <FlatList
            data={[]}
            // keyExtractor={() => '1'}
            ListHeaderComponent={<>{children}</>}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default VirtualizedList
