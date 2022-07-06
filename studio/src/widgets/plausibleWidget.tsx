import React from 'react'
import {DashboardWidgetContainer, DashboardWidget} from '@sanity/dashboard'

// const root = 'https://plausible.io/share'
// const site = 'http://localhost:3333'
// const embed = 'true'
// const theme = 'system'
// const background = 'transparent'

function Plausible() {
  return (
    <DashboardWidgetContainer>
      <>
        <iframe
          plausible-embed
          src="https://plausible.io/share/midwalesarts.org.uk?auth=PMMQGDdcOOpjCFAWyfEoy&embed=true&theme=light"
          scrolling="no"
          frameBorder="0"
          loading="lazy"
          style={{width: '1px', minWidth: '100%', height: '1600px'}}
          title="Plausible Analytics"
        ></iframe>
        <script async src="https://plausible.io/js/embed.host.js"></script>
      </>
    </DashboardWidgetContainer>
  )
}

export function plausibleWidget(): DashboardWidget {
  return {
    name: 'plausible-widget',
    component: Plausible,
    layout: {width: 'full'},
  }
}
