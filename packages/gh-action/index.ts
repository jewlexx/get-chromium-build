import getBuildId from 'get-chromium-build';
import core from '@actions/core';
import gh from '@actions/github';

(async () => {
  const buildId = await getBuildId();

  core.setOutput('id', buildId);

  const payload = JSON.stringify(gh.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
})().catch((err) => core.setFailed(err.message));
