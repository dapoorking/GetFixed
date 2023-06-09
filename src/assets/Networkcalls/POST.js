import baseUrl from "../../screens/baseUrl"


const PostMethod = async (requestData, routeName) => {

  var response = await fetch(`${baseUrl}${routeName}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(requestData),
  })
    .then(res => res.json())
    .then(success => {
      return success
    })
    .catch(err => {
      return err
    })
  return response
}
export default PostMethod