# climod-add-dep

CLI codemod to add a dependency to `package.json`.

```shell
climod-add-dep --name react-dom[ --version 14]
```

Now your `package.json` has this entry.

```json
{
  "dependencies": {
    "react-dom": "14"
  }
}
```
