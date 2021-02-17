$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login to Retail Website",
  "description": "",
  "id": "login-to-retail-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginRegression"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 20,
      "value": "#if i want to run same scenario with multiple userName and Password"
    },
    {
      "line": 21,
      "value": "# Should i copy and past same scenario with multiple user and pass ?"
    }
  ],
  "line": 24,
  "name": "Login to Retail Site with multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@MultipleUserLogin"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User enter username \u0027\u003cuserName\u003e\u0027 and password \u0027\u003cpassword\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 33,
      "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;1"
    },
    {
      "cells": [
        "sdet@tekschool.us",
        "sdet"
      ],
      "line": 34,
      "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;2"
    },
    {
      "cells": [
        "consumer@tekschool.us",
        "JBond"
      ],
      "line": 35,
      "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;3"
    },
    {
      "cells": [
        "students@tekschool.us",
        "TEST"
      ],
      "line": 36,
      "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7184059200,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#any steps which are repeated at the beginning of all scenarios in one feature can be placed"
    },
    {
      "line": 5,
      "value": "#under Background keyword and it will reduce code duplicate and writing same steps over and over"
    }
  ],
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 4492949200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 48870800,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Login to Retail Site with multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginRegression"
    },
    {
      "line": 23,
      "name": "@MultipleUserLogin"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3606074800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 484876100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 386034200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3305601600,
  "status": "passed"
});
formatter.after({
  "duration": 713921100,
  "status": "passed"
});
formatter.before({
  "duration": 1377726500,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#any steps which are repeated at the beginning of all scenarios in one feature can be placed"
    },
    {
      "line": 5,
      "value": "#under Background keyword and it will reduce code duplicate and writing same steps over and over"
    }
  ],
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2529551500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 49997900,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Login to Retail Site with multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginRegression"
    },
    {
      "line": 23,
      "name": "@MultipleUserLogin"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User enter username \u0027consumer@tekschool.us\u0027 and password \u0027JBond\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3562696300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "consumer@tekschool.us",
      "offset": 21
    },
    {
      "val": "JBond",
      "offset": 58
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 512440100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 371717700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3310513000,
  "status": "passed"
});
formatter.after({
  "duration": 689393100,
  "status": "passed"
});
formatter.before({
  "duration": 1365945600,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#any steps which are repeated at the beginning of all scenarios in one feature can be placed"
    },
    {
      "line": 5,
      "value": "#under Background keyword and it will reduce code duplicate and writing same steps over and over"
    }
  ],
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2392755400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 49488900,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Login to Retail Site with multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginRegression"
    },
    {
      "line": 23,
      "name": "@MultipleUserLogin"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User enter username \u0027students@tekschool.us\u0027 and password \u0027TEST\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3566257700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "students@tekschool.us",
      "offset": 21
    },
    {
      "val": "TEST",
      "offset": 58
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 467706300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 355801400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3317760500,
  "status": "passed"
});
formatter.after({
  "duration": 696878100,
  "status": "passed"
});
});