const jira = require('../src/jira')()

describe('Jira', () => {
  test('plugin does build a link and return a zazu object', () => {
    return jira('ISSUE-123', {jiraBaseUrl: 'http://jira.company.de'}).then((results) => {
      expect(results[0].title).toBe('Issue ISSUE-123')
      expect(results[0].subtitle).toBe('http://jira.company.de/browse/ISSUE-123')
      expect(results[0].value).toBe('http://jira.company.de/browse/ISSUE-123')
    })
  })

  test('plugin does build a link with default URL and return a zazu object', () => {
    return jira('ISSUE-123').then((results) => {
      expect(results[0].title).toBe('Issue ISSUE-123')
      expect(results[0].subtitle).toBe('https://jira.atlassian.com/browse/ISSUE-123')
      expect(results[0].value).toBe('https://jira.atlassian.com/browse/ISSUE-123')
    })
  })

  test('plugin does build a link with empty name and return a zazu object', () => {
    return jira().then((results) => {
      expect(results[0].title).toBe('Jira')
      expect(results[0].subtitle).toBe('https://jira.atlassian.com')
      expect(results[0].value).toBe('https://jira.atlassian.com')
    })
  })

  test('plugin does transform issue name to uppercase and return a zazu object', () => {
    return jira('issue-123', {}).then((results) => {
      expect(results[0].title).toBe('Issue ISSUE-123')
      expect(results[0].subtitle).toBe('https://jira.atlassian.com/browse/ISSUE-123')
      expect(results[0].value).toBe('https://jira.atlassian.com/browse/ISSUE-123')
    })
  })
})
