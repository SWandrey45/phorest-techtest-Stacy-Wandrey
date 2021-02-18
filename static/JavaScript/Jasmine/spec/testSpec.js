var xhr, requests;

beforeEach(function () {  
  xhr = sinon.useFakeXMLHttpRequest();
  requests = [];

  //when an ajax request is created it will be added to the requests array
  //rather than actually being sent
  xhr.onCreate = function (request) {
    requests.push(request);
 };
});

it("1.1 # Check xhr functionality", function () {

  var callback = sinon.spy();       

  //the code that is actually executing the ajax request called here
  $.ajax('/some/uri', { success: callback }); 

  //give the fake response to the request sent above
  requests[0].respond(200, { "Content-Type": "application/json" }, '[{ "some": "testData" }]');

  //assert some expectations
  expect(requests.length).toBe(1);
  expect(requests[0].url).toBe('/some/uri');
  expect(callback.calledWith([{ some: "testData" }])).toBe(true);

});

afterEach(function () {
  xhr.restore();
});