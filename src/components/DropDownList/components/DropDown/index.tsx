import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { IContentCard, IDropDown } from '../../../../types/components/dropDown';
import { ListItem } from '@rneui/themed';
import { colors } from '../../../../settings/styles/global';

export function DropDown({ title }: IDropDown): JSX.Element {
  const [expanded, setExpanded] = React.useState(false);

  const ContentCard = ({ index }: IContentCard): JSX.Element => {
    return (
      <TouchableOpacity style={styles.cardContainer}>
        <Text>{`${index + 1} Período`}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ListItem.Accordion
      containerStyle={styles.container}
      content={<Text>{title}</Text>}
      isExpanded={expanded}
      onPress={() => setExpanded(!expanded)}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((p, index) => (
        <ContentCard key={index} index={index} />
      ))}
    </ListItem.Accordion>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: '#333333',
    borderWidth: 1,
  },
  cardContainer: {
    backgroundColor: colors.secondary,
    marginBottom: 14,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});
