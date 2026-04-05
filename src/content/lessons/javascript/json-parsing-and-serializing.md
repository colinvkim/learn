---
title: "JSON: parsing and serializing"
description: "Learn how JSON represents data in JavaScript, how to convert between JSON strings and JavaScript objects, and the limitations of the format."
course: javascript
status: published
---

import Note from "../../../components/content/Note.astro";

JSON (JavaScript Object Notation) is the standard format for exchanging data between systems. It looks like JavaScript object syntax, but it is a text format — a string — that must be parsed to become usable data.

## What JSON can represent

JSON supports a limited set of types:

- strings
- numbers
- booleans
- `null`
- objects (key-value pairs with string keys)
- arrays

JSON does **not** support:

- functions
- `undefined`
- `Symbol`
- `Date` objects (serialized as strings)
- `RegExp` objects
- `Map` and `Set`
- class instances

```json
{
  "name": "Ada",
  "age": 36,
  "active": true,
  "role": null,
  "skills": ["math", "programming"],
  "address": {
    "city": "London"
  }
}
```

## `JSON.stringify` serializes to a string

`JSON.stringify` converts a JavaScript value to a JSON string:

```javascript
const user = { name: "Ada", age: 36, active: true };

const json = JSON.stringify(user);
// '{"name":"Ada","age":36,"active":true}'
```

### Formatting for readability

The third argument to `JSON.stringify` adds indentation:

```javascript
JSON.stringify(user, null, 2);
// {
//   "name": "Ada",
//   "age": 36,
//   "active": true
// }
```

This is useful for logging and debugging, not for transmission (which should be compact).

### What happens to unsupported types

```javascript
const data = {
  fn: function() {},       // omitted from output
  undef: undefined,         // omitted from output
  date: new Date(),         // converted to ISO string
  symbol: Symbol("id"),     // omitted from output
  map: new Map(),           // converted to empty object {}
};

JSON.stringify(data);
// '{"date":"2024-01-15T10:30:00.000Z","map":{}}'
```

Properties holding `undefined`, functions, and symbols are silently dropped from objects. In arrays, they become `null`.

### Custom serialization with `toJSON`

Objects can define a `toJSON` method to control their serialization:

```javascript
const user = {
  name: "Ada",
  password: "secret",
  toJSON() {
    return { name: this.name };  // exclude password
  },
};

JSON.stringify(user);  // '{"name":"Ada"}'
```

## `JSON.parse` deserializes from a string

`JSON.parse` converts a JSON string back into a JavaScript value:

```javascript
const json = '{"name":"Ada","age":36,"active":true}';

const user = JSON.parse(json);
// { name: "Ada", age: 36, active: true }
```

If the string is not valid JSON, `JSON.parse` throws a `SyntaxError`:

```javascript
JSON.parse("{ invalid json }");  // SyntaxError
```

Always wrap `JSON.parse` in `try/catch` when parsing data that might be malformed:

```javascript
try {
  const data = JSON.parse(maybeJson);
  // use data
} catch (error) {
  console.error("Invalid JSON:", error.message);
}
```

### Reviver function

`JSON.parse` accepts a reviver function to transform values during parsing:

```javascript
const json = '{"created":"2024-01-15T10:30:00.000Z","name":"Ada"}';

const data = JSON.parse(json, (key, value) => {
  if (key === "created") return new Date(value);
  return value;
});

data.created instanceof Date;  // true
```

The reviver is called for every property, including an empty string key for the root object.

## JSON files

`.json` files contain only JSON data — no comments, no trailing commas, no variables:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js"
  }
}
```

`package.json` is a JSON file. So are configuration files for many tools. JSON's strict syntax makes it reliable for machine reading.

<Note title="JSON files do not support comments">
  <p>Adding <code>// comments</code> or <code>/* comments */</code> to a JSON file makes it invalid. If you need comments, use a different format like JSONC (JSON with comments) for config files that support it, or keep documentation separate.</p>
</Note>

## What to carry forward

- JSON is a text format that represents a subset of JavaScript data types
- `JSON.stringify(value)` converts JavaScript data to a JSON string
- `JSON.parse(string)` converts a JSON string back to JavaScript data
- functions, `undefined`, and symbols are dropped during stringification
- dates become ISO strings and are not automatically parsed back as Date objects
- always wrap `JSON.parse` in `try/catch` for untrusted input
- reviver functions transform values during parsing
- JSON files do not support comments

JSON is the language of APIs and configuration files. The next lesson covers working with API responses in practice.
