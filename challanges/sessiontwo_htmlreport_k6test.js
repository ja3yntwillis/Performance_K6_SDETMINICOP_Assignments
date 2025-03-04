import http from 'k6/http';
import { check } from 'k6';
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

// Define the test options
export const options = {
  vus: 100,
  thresholds: {
    http_req_duration: ['p(95)<200'],
  },
};

export default function testAPI() {
  const res = http.get('https://test.k6.io/pi.php?decimals=9');

  // Assert the response status
  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  console.info(`Response Time: ${res.timings.duration} ms`);
}


export function handleSummary(data) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const resultDir = `C:/SDET_COP/performenceK6/challanges/results/logs/`;

  return {
    [`${resultDir}Resultsummary_${timestamp}.html`]: htmlReport(data), // Generate HTML report
    [`${resultDir}Resultsummary_${timestamp}.json`]: JSON.stringify(data, null, 2), // Save JSON summary
    [`${resultDir}Resultsummary_${timestamp}.txt`]: textSummary(data, { indent: " ", enableColors: false }), // Save text summary
  };
}
