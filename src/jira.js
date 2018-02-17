module.exports = (pluginContext) => {
  return (name, env = {}) => {
    return new Promise((resolve, reject) => {
      let title
      let url
      const jiraBaseUrl = env.jiraBaseUrl || 'https://jira.atlassian.com'

      if (name && name.length) {
        const formattedName = name.toUpperCase()
        title = `Issue ${formattedName}`
        url = `${jiraBaseUrl}/browse/${formattedName}`
      } else {
        title = 'Jira'
        url = jiraBaseUrl
      }

      resolve([
        {
          icon: 'fa-tag',
          title: title,
          subtitle: url,
          value: url
        }
      ])
    })
  }
}
