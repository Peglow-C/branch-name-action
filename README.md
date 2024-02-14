# branch name action

This action takes the `github_ref` and splits the branch name off. Only works if the branch name does not contain slashes (/)

## Example usage

```yaml
uses: peglow-c/branch-name-action@v1.0
```
## update this action
after updating the index.js in the root directory, run `ncc build index.js --license licenses.txt`
