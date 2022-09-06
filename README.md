# Overwatch

Application used to handle and monitor the deployment of applications & services to their cloud hosting provider (AWS, Azure, Google Cloud Platform)

# Development

This service is primarily written in [Node](https://nodejs.org/) using the [Express](https://expressjs.com/) framework

# Setup (Local)

1. Download DynamoDB zip file from [here] (https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html#DynamoDBLocal.DownloadingAndRunning.title)
2. Extract the contents of the zip file
3. Download the Java Development Kit (JDK) from [here] (https://www.oracle.com/java/technologies/downloads/#jdk18-windows)
    - Follow these instructions for verification of JRE on [Windows] (https://docs.oracle.com/goldengate/1212/gg-winux/GDRAD/java.htm#BGBFHBEA)
4. To start DynamoDB on your computer, open a command prompt window, navigate to the directory where you extracted DynamoDBLocal.jar, and enter the following command:
    - `java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb`
    - Once you `cd` into UserService - You can also use this command `yarn startDb`
5. Once the DB has started, you can use this command `yarn checkDb` to check the Tables

