import * as React from "react"
import { useState, useEffect } from "react"
import {
  getAllTests,
  runTests,
  formatTestResultsAsText,
} from "@benchristel/taste"
import "./TestResults.css"

export function TestResults() {
  const [message, setMessage] = useState/* FIXME <string> */("")
  useEffect(() => {
    runTests(getAllTests())
      .then(formatTestResultsAsText)
      .then(setMessage)
      .catch((e/* FIXME : Error */) => setMessage(e.message))
  }, [])

  return /fail/i.test(message) ? (
    <div className="TestResults">
      <code>
        <pre>{message}</pre>
      </code>
    </div>
  ) : null
}
