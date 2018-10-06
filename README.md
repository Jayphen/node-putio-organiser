# Put.io organiser

This will parse the file names in the root of your put.io account. If it finds what I think might be films or tv series, it will move them to nicely organised directories.

At the moment the parsing is pretty naive, and expects your files to be using typical 'release' naming.

1. Request an OAuth token from put.io @ https://app.put.io/settings/account/oauth/apps
2. Add the token to `env.sample` and rename the file to `.env`
3. `yarn`
4. Run `tsc` once to compile, then `yarn start` to execute. (I will streamline this later)

## Serverless

Instead of running this manually, it makes sense to create a Lambda function or similar to run it automatically (that's what I would do). Put.io allows you to set a callback URL that is POSTed to whenever a file has finished downloading (https://app.put.io/settings/preferences). Set this up as a Lambda function, create an API Gateway and set put.io to POST to it. The function will only ever run when a file completes downloading, so Amazon will charge you something like 1 cent/month for this.

There's already some basic config here to set this up. You'll need to install the Serverless cli (https://serverless.com/) and follow the instructions at https://serverless.com/framework/docs/providers/aws/guide/quick-start/.
