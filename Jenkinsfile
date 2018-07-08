#!groovy

node {
  // Define App details
  def appName = 'mf-react-app2'
  def groupName = 'somecompany'
  // Include and run remote common file
  def common = fileLoader.fromGit('node', 'git@bitbucket.org:somecompany/jenkins.git', 'master', null, '')
  common.start(appName, groupName);
}
