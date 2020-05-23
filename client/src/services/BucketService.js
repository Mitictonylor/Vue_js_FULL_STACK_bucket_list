const baseUrl = 'http://localhost:3000/api/countries/';

export default {
  getBucketList() {
    return fetch(baseUrl)
    .then(res => res.json())
  },
  addInBucketList(payload){//payload is the new object created
    return fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(payload),//body is a js object, we need to convert it in json to let the server understand
        headers: {"Content-Type": 'application/json'}//we need to say that the server gonna get a json file content// so the request can be build up properly
      }).then(res => res.json())//once the request is made we get back a response is a big object that tell us that everything went well, we just want the json that is embedded in the response, that is the object we created plus the id so we can update our front end
  },
  updateBucketList(id,payload){
    return fetch(baseUrl + id, {
        method: "PUT",
        body: JSON.stringify(payload),//body is a js object, we need to convert it in json to let the server understand
        headers: {"Content-Type": 'application/json'}//we need to say that the server gonna get a json file content// so the request can be build up properly
      }).then(res => res.json())
  },
  deleteCountry(id){
    return fetch(baseUrl + id, {
      method: 'DELETE'
    })
  }
  }
