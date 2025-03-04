import http from 'k6/http';
import { check } from 'k6';

//Define the options for the test
export const options = {
  vus: 100,
  thresholds: {
    http_req_duration: ['p(95)<200'],
  },
};

export default function beginner_challange_simple_api_load_test() {
  //Make a GET request to the test.k6.io/pi.php endpoint
  const res = http.get('https://test.k6.io/pi.php?decimals=9');
  //Assert the status code
  check(res, {
    'checking for the status code if 200': (r) => r.status === 200,
  });

  //response time
  console.info(`Test Response Time : ${res.timings.duration} ms`); 

}