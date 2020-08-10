#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import { CDKStack } from '../lib/lambda'

// App initailize
const app = new cdk.App()

// Bridge Api
const bridgeApi = new CDKStack(app, 'lambda-ping-cdn-POC')

