const getPrecipitation = (request) => {
  let { method, data, callback } = request;
  let r = new XMLHttpRequest();
  let url = "'http://gwgp-h4bqkmub7dg.n.bdcloudapi.com/rain";
  r.open(method, url, true);
  r.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  r.setRequestHeader(
    "X-Bce-Signature",
    "AppCode/acd7095440fa49e891ac9a504f7db10c"
  );
  r.send(data);
  r.onreadystatechange = () => {
    // log('r', r, r.readyState)
    if (r.readyState === 4) {
      // log('r', r.response)
      console.log("method" + method);
      callback(r.response);
    }
  };
  if (method === "POST") {
    data = JSON.stringify(data);
  }
};

export default {
  getPrecipitation,
};
