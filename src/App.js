import React, { Suspense } from 'react'
import { CircularProgress } from '@material-ui/core'
import routes from './Routes'
import GlobalStyles from './globalStyles'

const App = () => (
  <React.Fragment>
    <Suspense
      fallback={
        <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </div>
      }
    >
      {routes}
      <GlobalStyles />
    </Suspense>
  </React.Fragment>
)

export default App
