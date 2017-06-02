
/*
 * Created by https://github.com/YMFL on 2017/6/2.
 */
export default function isEmptyObject(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}
