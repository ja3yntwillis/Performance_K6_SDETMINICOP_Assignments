// Creator: WebInspector 537.36

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  group('page_1 - http://k6.io/', function () {
    response = http.get('http://k6.io/', {
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Tue, 06 Aug 2024 11:24:36 GMT',
        'If-None-Match': 'W/"7db0748bda547ca646241153bb2c49e8"',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/', {
      headers: {
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
      },
    })

    response = http.get(
      'https://fonts.googleapis.com/css?family=Roboto+Mono%3A300%2C400%7CKalam%3A400&display=swap&family=Roboto%2BMono%3A300%2C400%7CKalam%3A400',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get('https://k6.io/static/amazon-a8a3f55484b0e7d30c3ab0ae416cc69d.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/static/noaa-7fbe83bf43a3e1b9681893cc82ebc43b.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/static/sephora-922efcf5b1b703d5a04fa7c3b4aa1d36.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/static/citrix-4b63b90f22c5e8bf12e9b568aeb52a51.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/static/microsoft-78dd4a41b7bc3af7ebec21b1093da07b.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/static/yum-e3693c4fc2cbcc677a0fbe9f5c55e689.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/static/gitlab-4efdbb1df4fbce23b88b616a4296d2d2.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/static/carvana-4678a6323dc843e68faa8baea7cb78ac.svg', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/app-5929e806068e78e0fc98.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/framework-396647af4f31b9368f98.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/webpack-runtime-e77a5bbb0e49dbd96611.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://www.googletagmanager.com/gtm.js?id=GTM-KBV9L4L', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://snap.licdn.com/li.lms-analytics/insight.min.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://munchkin.marketo.net/munchkin.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get(
      'https://k6.io/static/tt-pro-medium-webfont-a6840e7b36e244e19cb32d1b3b519a9f.woff2',
      {
        headers: {
          Origin: 'https://k6.io',
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get(
      'https://k6.io/static/tt-pro-regular-webfont-c026b25692b4d657d3410332d773a00d.woff2',
      {
        headers: {
          Origin: 'https://k6.io',
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get(
      'https://k6.io/static/tt-pro-bold-webfont-7842c22fb63b8a859ccff64910254df7.woff2',
      {
        headers: {
          Origin: 'https://k6.io',
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get(
      'https://fonts.gstatic.com/s/robotomono/v23/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vvtSM1J-gEPT5Ese09hHSh0mQ.woff2',
      {
        headers: {
          Origin: 'https://k6.io',
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://fonts.googleapis.com/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get(
      'https://k6.io/static/home-page-main-30c6e72806506138b9bd44a2ab31a419.mp4',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'Accept-Encoding': 'identity;q=1, *;q=0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          Range: 'bytes=0-',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get('https://static.hotjar.com/c/hotjar-1699068.js?sv=6', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://munchkin.marketo.net/164/munchkin.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.post(
      'https://o175050.ingest.sentry.io/api/5509583/envelope/?sentry_key=59c36eeefc1246ecbfa516c2edd773e6&sentry_version=7&sentry_client=sentry.javascript.gatsby%2F7.57.0',
      '{"sent_at":"2025-03-04T14:29:46.091Z","sdk":{"name":"sentry.javascript.gatsby","version":"7.57.0"}}\n{"type":"session"}\n{"sid":"c5457ca664fd483495b8ed117ce9a334","init":true,"started":"2025-03-04T14:29:46.091Z","timestamp":"2025-03-04T14:29:46.091Z","status":"ok","errors":0,"attrs":{"release":"ae4071d0d796b60c4b1194a5a38a8c5570f26bfd","environment":"production","user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36"}}',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          'Content-Type': 'text/plain;charset=UTF-8',
          Host: 'o175050.ingest.sentry.io',
          Origin: 'https://k6.io',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'cross-site',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://k6.io/page-data/app-data.json', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Tue, 06 Aug 2024 11:24:36 GMT',
        'If-None-Match': '"9fa7e6b207240852bade7135bc890c1c"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/page-data/index/page-data.json', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Tue, 06 Aug 2024 11:24:36 GMT',
        'If-None-Match': '"f59fccbbdf7952f5adb9749c61e03de3"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://px.ads.linkedin.com/attribution_trigger?pid=4981058&time=1741098586102&url=https%3A%2F%2Fk6.io%2F',
      {
        headers: {
          Accept: '*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en-US,en;q=0.9',
          'Attribution-Reporting-Eligible': 'trigger, not-navigation-source=event-source',
          'Attribution-Reporting-Support': 'web, not-os',
          Connection: 'keep-alive',
          Host: 'px.ads.linkedin.com',
          Origin: 'https://k6.io',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'cross-site',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://px.ads.linkedin.com/collect?v=2&fmt=js&pid=4981058&time=1741098586102&li_adsId=29f5f294-42c4-493d-ac83-e63c502446aa&url=https%3A%2F%2Fk6.io%2F',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Host: 'px.ads.linkedin.com',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Storage-Access': 'active',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://sc.lfeeder.com/lftracker_v1_ywVkO4X2AnO8Z6Bj.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://script.hotjar.com/modules.ef5986d046c68a8c77c1.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.post(
      'https://356-yfg-389.mktoresp.com/webevents/visitWebPage?_mchNc=1741098586131&_mchCn=&_mchId=356-YFG-389&_mchTk=_mch-k6.io-85eeb125bfe067a6385b1724380af3c4&_mchHo=k6.io&_mchPo=&_mchRu=%2F&_mchPc=https%3A&_mchVr=164&_mchEcid=&_mchHa=&_mchRe=&_mchQp=',
      null,
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Host: '356-yfg-389.mktoresp.com',
          Origin: 'https://k6.io',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Storage-Access': 'active',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://k6.io/ea88be26-949b8f06ac65684f24b7.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/commons-962a5d4825c150475167.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get(
      'https://k6.io/420f3b9cb13584731bf50cebd0d0316a0769aa9a-a9ec2fd2a8b09a0bea5d.js',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get(
      'https://k6.io/1d0cd7e0ea7d1fef6d35344a52762abf9879f0ec-4531d9dba3d6b84b5e90.js',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get('https://k6.io/component---src-pages-index-js-fe617514ca0c5b29b002.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/page-data/sq/d/1437192782.json', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 28 Nov 2022 17:36:49 GMT',
        'If-None-Match': '"047c3a7ba6fbca7dc9d29edd8fd47253"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/page-data/sq/d/1918644930.json', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 08 Jul 2024 14:44:48 GMT',
        'If-None-Match': 'W/"ad2965d91537a8bd1bd33a02f4d87705"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/page-data/sq/d/3543381572.json', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Thu, 20 Jul 2023 10:04:58 GMT',
        'If-None-Match': 'W/"85e0e5a7b5e08cea9d611f4c90b9cc0b"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://tr-rc.lfeeder.com/?sid=ywVkO4X2AnO8Z6Bj&data=eyJnYVRyYWNraW5nSWRzIjpbXSwiZ2FNZWFzdXJlbWVudElkcyI6W10sImdhQ2xpZW50SWRzIjpbIjExMTYzNzU4MDguMTc0MDA2MDAwOCJdLCJjb250ZXh0Ijp7ImxpYnJhcnkiOnsibmFtZSI6ImxmdHJhY2tlciIsInZlcnNpb24iOiIyLjY5LjAifSwicGFnZVVybCI6Imh0dHBzOi8vazYuaW8vIiwicGFnZVRpdGxlIjoiTG9hZCB0ZXN0aW5nIGZvciBlbmdpbmVlcmluZyB0ZWFtcyB8IEdyYWZhbmEgazYiLCJyZWZlcnJlciI6IiJ9LCJldmVudCI6InRyYWNraW5nLWV2ZW50IiwiY2xpZW50RXZlbnRJZCI6IjQ5OWNkNDBjNjg4MmI3NWEiLCJzY3JpcHRJZCI6Inl3VmtPNFgyQW5POFo2QmoiLCJjb29raWVzRW5hYmxlZCI6dHJ1ZSwiY29uc2VudExldmVsIjoibm9uZSIsImFub255bWl6ZUlwIjpmYWxzZSwibGZDbGllbnRJZCI6IkxGMS4xLjViNzgxYTVmYzcwYTkyZWIuMTc0MDA2MDAwNzIxMSIsImZvcmVpZ25Db29raWVzIjpbXSwicHJvcGVydGllcyI6e30sImF1dG9UcmFja2luZ0VuYWJsZWQiOnRydWUsImF1dG9UcmFja2luZ01vZGUiOiJvbl9zY3JpcHRfbG9hZCJ9',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Host: 'tr-rc.lfeeder.com',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Storage-Access': 'active',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://pbs.twimg.com/profile_images/1744229221998702592/lzlen6zq_400x400.jpg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Host: 'pbs.twimg.com',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Storage-Access': 'active',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://pbs.twimg.com/profile_images/1599851549337194496/TUE6LkYS_400x400.jpg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Host: 'pbs.twimg.com',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Storage-Access': 'active',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://pbs.twimg.com/profile_images/1543739876016656384/FUGen2m7_400x400.jpg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Host: 'pbs.twimg.com',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Storage-Access': 'active',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://pbs.twimg.com/profile_images/1353037199302815744/f9L0ozTE_400x400.jpg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Host: 'pbs.twimg.com',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Storage-Access': 'active',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://pbs.twimg.com/profile_images/1794443042822279168/y0lVPPSC_400x400.jpg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Host: 'pbs.twimg.com',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Storage-Access': 'active',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://pbs.twimg.com/profile_images/1783200598126473216/Yqa619No_400x400.jpg',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Host: 'pbs.twimg.com',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Storage-Access': 'active',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://k6.io/data/jobs-positions.json', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/dashboard/img_0.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 31 Oct 2022 15:32:34 GMT',
        'If-None-Match': 'W/"c68d98eac0fb56e29944171b4885e5ba"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/17.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 31 Oct 2022 15:32:34 GMT',
        'If-None-Match': '"54ecfd867299bf41de1466f77fe13aa3"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/16.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 31 Oct 2022 15:32:34 GMT',
        'If-None-Match': 'W/"418babdfcaf5b027a94b432eb425c47d"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/15.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 31 Oct 2022 15:32:34 GMT',
        'If-None-Match': '"792335662908642fdfe2aea66aa494fa"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/14.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 31 Oct 2022 15:32:34 GMT',
        'If-None-Match': '"596e87452a06b2150f377443ff727b53"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/13.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 31 Oct 2022 15:32:34 GMT',
        'If-None-Match': '"4e99643058b3672e87c8d58117e6a771"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/12.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 31 Oct 2022 15:32:34 GMT',
        'If-None-Match': '"2b5898e662c3625ba2c5b4483999a3f9"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/11.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 31 Oct 2022 15:32:34 GMT',
        'If-None-Match': '"6eff427bc158b66f927d3da54c753ad7"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/10.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 31 Oct 2022 15:32:34 GMT',
        'If-None-Match': '"386ecb232397e6388301f3cce0d84c71"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/9.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 31 Oct 2022 15:32:34 GMT',
        'If-None-Match': '"dd5d8c274537e508ebb06a38b5ade9c2"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/8.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 31 Oct 2022 15:32:34 GMT',
        'If-None-Match': '"13b6db8b8b858edcee0b64d1e2909a48"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/7.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 31 Oct 2022 15:32:34 GMT',
        'If-None-Match': 'W/"85768bf7e2b58ee7f8ddeae8988f0fb6"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/6.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 31 Oct 2022 15:32:34 GMT',
        'If-None-Match': '"da95354ddd11fe548b4e409cb5d6d239"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/5.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 31 Oct 2022 15:32:34 GMT',
        'If-None-Match': '"2e115908c4d695d1e8a8a2af6051cb64"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/4.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 31 Oct 2022 15:32:34 GMT',
        'If-None-Match': '"f974797649711fb4158daf44833ef151"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/3.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 31 Oct 2022 15:32:34 GMT',
        'If-None-Match': '"883e39cca6cee525552e45d1187ea312"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/2.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 31 Oct 2022 15:32:34 GMT',
        'If-None-Match': '"7d61b95bd5bef2a0343d57a456c73884"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/1.svg', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Mon, 31 Oct 2022 15:32:34 GMT',
        'If-None-Match': '"3b315d4a5479cdbe3f4ad8de2479ce7f"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://www.googletagmanager.com/gtag/js?id=G-H2LHZ4M8SN&l=dataLayer&cx=c&gtm=45He52q0v9126785498za200&tag_exp=101732282~101732284~102067808~102482433~102539968~102558064~102587591~102605417~102640600~102717422~102732003',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://px.ads.linkedin.com/wa/',
      '{"pids":[4981058],"scriptVersion":199,"time":1741098586451,"domain":"k6.io","url":"https://k6.io/","pageTitle":"Load testing for engineering teams | Grafana k6","websiteSignalRequestId":"3700cb7d-d744-7917-ad60-8187ba82f418","isTranslated":false,"liFatId":"","liGiant":"","misc":{"psbState":-4},"isLinkedInApp":false,"hem":null,"signalType":"PAGE_VISIT"}',
      {
        headers: {
          Accept: '*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          'Content-Type': 'text/plain;charset=UTF-8',
          Host: 'px.ads.linkedin.com',
          Origin: 'https://k6.io',
          Referer: 'https://k6.io/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Storage-Access': 'active',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://k6.io/manifest.webmanifest', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/icons/icon-144x144.png?v=b39a6f3e0dc925c8ec4f77e0a65490e9', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://k6.io/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
      },
    })

    response = http.get('https://k6.io/page-data/privacy-policy/page-data.json', {
      headers: {
        Accept: 'application/signed-exchange;v=b3;q=0.7,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Wed, 07 Dec 2022 13:49:05 GMT',
        'If-None-Match': 'W/"4a57edd103cbbed1a086edf18451d99a"',
        Origin: 'https://k6.io',
        Purpose: 'prefetch',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/page-data/open-source/page-data.json', {
      headers: {
        Accept: 'application/signed-exchange;v=b3;q=0.7,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Tue, 06 Aug 2024 11:24:37 GMT',
        'If-None-Match': '"4108d162f8c2cf9259926b75700010df"',
        Origin: 'https://k6.io',
        Purpose: 'prefetch',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/page-data/privacy-policy/page-data.json', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Wed, 07 Dec 2022 13:49:05 GMT',
        'If-None-Match': 'W/"4a57edd103cbbed1a086edf18451d99a"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/page-data/open-source/page-data.json', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Tue, 06 Aug 2024 11:24:37 GMT',
        'If-None-Match': '"4108d162f8c2cf9259926b75700010df"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://k6.io/component---src-pages-open-source-js-db4dc3811d6f09b97a70.js',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get(
      'https://k6.io/component---src-pages-privacy-policy-js-ffb14146f6200849bef5.js',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://analytics.google.com/g/collect?v=2&tid=G-H2LHZ4M8SN&gtm=45je52q0v9126796651z89126785498za200zb9126785498&_p=1741098585896&gcd=13l3l3l3l1l1&npa=0&dma=0&tag_exp=101732279~101732281~102067808~102482433~102539968~102558064~102587591~102605417~102640600~102643510~102717421~102732003&cid=1116375808.1740060008&ul=en-us&sr=1536x864&ir=1&uaa=x86&uab=64&uafvl=Not(A%253ABrand%3B99.0.0.0%7CGoogle%2520Chrome%3B133.0.6943.142%7CChromium%3B133.0.6943.142&uamb=0&uam=&uap=Windows&uapv=19.0.0&uaw=0&are=1&pae=1&frm=0&pscdl=noapi&_eu=EA&_s=1&sid=1741098562&sct=2&seg=1&dl=https%3A%2F%2Fk6.io%2F&dt=Load%20testing%20for%20engineering%20teams%20%7C%20Grafana%20k6&en=page_view&tfd=6858',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://k6.io',
          priority: 'u=1, i',
          referer: 'https://k6.io/',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'x-client-data': 'CJe2yQEIpbbJAQipncoBCPyWywEIk6HLAQiKo8sBCJv+zAEIgJnNAQiFoM0BGOHizgE=',
        },
      }
    )

    response = http.get('https://k6.io/page-data/app-data.json', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Host: 'k6.io',
        'If-Modified-Since': 'Tue, 06 Aug 2024 11:24:36 GMT',
        'If-None-Match': '"9fa7e6b207240852bade7135bc890c1c"',
        Referer: 'https://k6.io/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://k6.io/component---src-pages-privacy-policy-js-ffb14146f6200849bef5.js',
      {
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          Referer: 'https://k6.io/',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )
  })

  // Automatically added sleep
  sleep(1)
}
