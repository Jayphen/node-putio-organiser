"use strict"

const init = require("./lib").init

module.exports.hello = async (event, context) => {
  const films = await init()

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: films,
      input: event
    })
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}
