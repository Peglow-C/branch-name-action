const core = require('@actions/core');

try {
    core.exportVariable('BRANCH_NAME', process.env.GITHUB_REF.split('/')[2]);
} catch (error) {
    core.setFailed(error.message);
}
