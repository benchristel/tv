// @flow
import * as React from "react"
import {useState, useEffect} from "react"
import {getAllTests, runTests, formatTestResultsAsText} from "@benchristel/taste"
import "./TestResults.css"

export function TestResults(): React.Node {
    const [message, setMessage] = useState<string>("")
    useEffect(() => {
        runTests(getAllTests())
            .then(formatTestResultsAsText)
            .then(setMessage)
            .catch((e: Error) => setMessage(e.message))
    }, [])

    return /fail/i.test(message)
        ? <div class="TestResults">
            <code><pre>{message}</pre></code>
          </div>
        : null
}
