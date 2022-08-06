// @flow
import * as React from "react"
import "./App.css"
import {test, expect, is} from "@benchristel/taste"

export function App(): React.Node {
  return <div class="App">
    <h1>{greet("world")}</h1>
  </div>
}

function greet(name: string): string {
  return `Hello, ${name}!`
}

test("greet", {
    "returns a greeting for the given name"() {
        expect(greet("Alice"), is, "Hello, Alice!")
        expect(greet("Bob"), is, "Hello, Bob!")
    },
})
