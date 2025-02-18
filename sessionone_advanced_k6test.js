import http from 'k6/http';
import { check, sleep } from 'k6';

//Define the options for the test
export const options = {
  stages: [
    { duration: '10s', target: 10 }, 
    { duration: '10s', target: 10 }, 
    { duration: '5s', target: 5 },  
  ],
  thresholds: {
    'http_req_duration': ['p(95)<900']
  },
};

export default function advanced_challenge_simulating_high_load_with_ramp_up() {
  //Make a GET request to the test.k6.io/pi.php endpoint
  const res = http.get('https://test.k6.io/pi.php?decimals=9');
//Assert the status code
  check(res, {
    'checking for the status code if 200': (r) => r.status === 200,
  });
  // Log the response time
  console.info(`Test Response Time: ${res.timings.duration} ms`);
  // Adding delay
  sleep(2); 
}
