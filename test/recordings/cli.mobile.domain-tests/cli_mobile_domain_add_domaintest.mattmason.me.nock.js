// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['mobileservice', 'mobileservice', 'website', 'mobileservice', 'mobileservice', 'mobileservice'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .post('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/mobileservices/mobileservices/mamaso-domain-test/hostnames/domaintest.mattmason.me')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  server: '1.0.6198.205 (rd_rdfe_stable.150316-1043) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '5c77ed9acbb8858d89c9a669140b8f62',
  date: 'Fri, 20 Mar 2015 19:53:10 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/mobileservices/mobileservices/mamaso-domain-test/hostnames')
  .reply(200, "[\"domaintest.mattmason.me\",\"mamaso-domain-test.azure-mobile.net\"]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '65',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.205 (rd_rdfe_stable.150316-1043) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'c5c8598e1e568057bf694140fe1577cd',
  date: 'Fri, 20 Mar 2015 19:53:10 GMT' });
 return result; }]];