import React from 'react';
import {Image, ImageProps, StyleSheet, TouchableOpacity} from 'react-native';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';

interface AvatarProps extends ImageProps {
  onChange?: (image: ImageOrVideo) => void;
}

export const Avatar = (props: AvatarProps) => {
  const [uri, setUri] = React.useState(props.source?.uri || undefined);

  const pickPicture = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setUri(image.path);
      props.onChange?.(image);
    });
  };
  return (
    <TouchableOpacity onPress={pickPicture}>
      <Image
          style={styles.avatar}
          {...props}
          source={uri ? {uri} : props.source}
        />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatar: {
    paddingTop: 20,
    height: 100,
    width: 100,
    borderRadius: 100,
    padding: 20,
  },
});