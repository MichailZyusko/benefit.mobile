import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  categoryCardContainer: {
    flex: 1,
    // flexDirection: 'column',
    // alignItems: 'center',

    // width: '45%',
    // height: 305,
    marginHorizontal: 8,
    // padding: 8,

    // backgroundColor: '#fff',
    // borderRadius: 20,
    // borderColor: '#e0e0e0',
    //
    // elevation: 5,
    // shadowColor: 'rgba(160, 160, 160)',
    //shadow-offset: {width: 0, height: 2};
    //shadow-color: rgba(160, 160, 160, 0.15);
  },
  categoryImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,

    marginBottom: -60,
    zIndex: 1,
  },
  categoryNameContainer: {
    width: 124,
    height: 124,

    justifyContent: 'flex-end',

    backgroundColor: '#fff',

    borderRadius: 20,
    padding: 10,
  },
  categoryName: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,

    color: '#000',
  },
});
