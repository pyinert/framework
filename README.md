# PyInert Framework Skeleton

This is the starter application skeleton used by `pyinert/installer`.

It is not published to PyPI. The installer copies this repository when a user runs:

```bash
pyinert new my-app
```

## Default route architecture

```text
app/routes/index.pi          -> /
app/routes/about.pi          -> /about
app/routes/users/index.pi    -> /users
app/routes/users/[id].pi     -> /users/<id>
templates/app.html           -> application shell/layout
```

Each `.pi` route file has a top `<?py ?>` controller/config block and a bottom Jinja/HTML view section.
