var title = document.getElementById("title");
var body = document.getElementById("body");
var form_el = document.getElementById("myForm");

form_el.addEventListener("submit", function(evt) {
    evt.preventDefault();
    convertToJSON();
});

function postData(data) {
  axios.post('/form', data)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log('ERROR: ' + err)
    })
};

function convertToJSON() {
  const obj = {};
  obj.title = title.value;
  obj.body = body.value;
  postData(obj);
};
