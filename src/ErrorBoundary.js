import React from "react"
import * as Sentry from "@sentry/browser"

Sentry.init({
  dsn: "your-dsn-here"
})

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key])
      })
      Sentry.captureException(error)
    })
  }
  render() {
    const { children } = this.props

    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong with our app!</h2>
          <p>We're aware of the problem and we're working hard to fix it.</p>
          <p>In the meantime, you can reach us by phone or email.</p>
          <a onClick={() => Sentry.showReportDialog()}>Report feedback</a>
        </div>
      )
    }
    return children
  }
}
