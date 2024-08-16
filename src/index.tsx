import * as React from "react"
import { render } from "react-dom"
import { App } from "./App"
import { TestResults } from "./TestResults"

render(<App />, document.getElementById("app"))
render(<TestResults />, document.getElementById("test-results"))
