# React Hook Form + Conditional Controller Bug Reproduction

## The Bug

When using `react-hook-form` with:

- A `resolver` for validation
- `"react-hook-form": "^8.0.0-beta.0"`
- conditionally render a `Controller`

You get: `Cannot update a component (Controller) while rendering a different component (Controller)`

