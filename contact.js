var cities = [
  'Brampton',
  'Calgary',
  'Edmonton',
  'Halifax',
  'Hamilton',
  'Kitchener',
  'London',
  'Markham',
  'Mississauga',
  'Montreal',
  'North York',
  'Ottawa',
  'Quebec City',
  'Toronto',
  'Vancouver',
  'Vaughan',
  'Winnipeg'
];
//datalist for cities - complete
//called when page is loaded
// eslint-disable-next-line no-unused-vars
function citiesDatalist() {
  var list = document.querySelector('#cityList');
  cities.forEach(function(city) {
    var option = document.createElement('option');
    option.value = city;
    list.appendChild(option);
  });
}

//dynamically reveal input box when "Order Problem" is checked
//called via onclick
// eslint-disable-next-line no-unused-vars
function enterOrder() {
  if (document.querySelector('#radio-option3').checked) {
    document.querySelector('#if-problem').style.display = 'block';
  } else {
    document.querySelector('#if-problem').style.display = 'none';
  }
}
window.onload = function() {
  this.citiesDatalist();
};
