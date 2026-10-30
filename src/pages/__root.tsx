import * as React from 'react'
import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router' 

export const Route = createRootRoute({
  component: RootComponent,
  head: () => ({
    meta: [
      { title: 'Início - A Voz que Vende' }
    ]
  })
})

function RootComponent() {
  return (
    <React.Fragment>
      <HeadContent />
      <Outlet />
    </React.Fragment>
  )
}
