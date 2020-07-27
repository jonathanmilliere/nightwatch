// nightwatch.conf.js (not using a json file for config either)
const chrome = require('chromedriver')
const firefox = require('geckodriver')

module.exports = {
  src_folders: ['tests'],
  custom_commands_path: 'nw/commands',
  custom_assertions_path: 'nw/assertions',
  page_objects_path: ['nw/page-objects'],
  output_folder: 'tests-output/reports',
  globals_path: "nightwatch.globals.js",
  test_workers: {
    enabled: false,
    workers: "auto"
  },
  webdriver: {
    start_process: true,
    server_path: chrome.path,
    port: 4444,
    log_path: 'tests-output/logs'
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ["--headless"]
       }
      },
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: false,
        path: 'tests-output/screenshots'
      },
    },
  },
}