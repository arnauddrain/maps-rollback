// from https://stackoverflow.com/questions/2090551/parse-query-string-in-javascript
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  console.log("Query variable %s not found", variable);
}

function getUrl() {
  return (
    "https://" + window.location.hostname + "/maps?q=" + getQueryVariable("q")
  );
}

const rightMap = document.getElementById("lu_map");
if (rightMap) {
  rightMap.parentElement.href = getUrl();
}

const centralMap = document.getElementById("pimg_1");
if (centralMap) {
  const parent = centralMap.parentElement;
  const wrapper = document.createElement("a");
  wrapper.href = getUrl();
  parent.replaceChild(wrapper, centralMap);
  wrapper.appendChild(centralMap);
}
