url = 'http://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client?'

beforeEach(function() {
  jasmine.Ajax.install();
});
afterEach(function() {
  jasmine.Ajax.uninstall();
});

it("Response", function() {
  var doneFn = jasmine.createSpy("Successss");

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(args){
    if(this.readyState == this.DONE){
      doneFn(this.responseText);
    }
  };
  xhr.open("GET", url)
  xhr.send();

  expect(jasmine.Ajax.requests.mostRecent().url).toBe(url);
  expect(doneFn).not.toHaveBeenCalled();

  jasmine.Ajax.requests.mostRecent().response({
    "status": 200,
    "contentType": 'application/json',
    "responseText": 'cool',
  });
  expect(doneFn).toHaveBeenCalledWith('cool');
});