## Zazu open Jira issue plugin

[![Build Status](https://travis-ci.org/marco-streng/zazu-open-jira-issue.svg?branch=master)](https://travis-ci.org/marco-streng/zazu-open-jira-issue)

> Simple [Zazu](https://github.com/tinytacoteam/zazu) plugin to directly open Jira issues in your browser by issue key

## Usage

To open a Jira issue type `jira` followed by the key of the issue you want to open.
For example `jira bug-2341`.

## Install

Add `marco-streng/zazu-open-jira-issue` inside of `plugins` block of your `~/.zazurc.json` file.

```json
{
  "plugins": [
    "marco-streng/zazu-open-jira-issue"
  ]
}
```

## Jira Cloud vs. Self Hosted

By default the plugin uses the Jira cloud url 'https://jira.atlassian.com'. If you use the self hosted version of Jira you can set the url in your `~/.zazurc.json` file.

```json
{
  "plugins": [
    {
    "name": "marco-streng/zazu-open-jira-issue",
    "variables": {
        "jiraBaseUrl": "https://jira.your-company.com"
      }
    }
  ]
}
```

## License

Copyright (c) 2018 Marco Streng. See [LICENSE](./LICENSE.md) for details.
