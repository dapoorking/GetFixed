import * as ImagePicker from 'react-native-image-picker';

export const OpenLibrary = () => {
  return new Promise((resolve, reject) => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    try {
      ImagePicker.launchImageLibrary(options, response => {
        // console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          response.assets.map(item => {
            return resolve({
              uri: item.uri,
              type: item.type,
              name: 'profile pic',
            });
          });
        }
      });
    } catch (err) {
      return reject(err);
    }
  });
};

export const OpenCamera = () => {
  return new Promise((resolve, reject) => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, response => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        response.assets.map(item => {
          resolve({uri: item.uri, type: item.type, name: 'profile pic'});
        });
      }
    });
  });
};
