import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, Card, Divider } from '@material-ui/core'

const SectionContainer = ({ children, sectionTitle }) => {
  return (
    <Grid container justify="space-around">
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Card variant="outlined">
              <Grid container direction="column">
                {sectionTitle && (
                  <Grid item>
                    <Typography variant="h6" align="center">
                      {sectionTitle}
                    </Typography>
                    <Divider />
                  </Grid>
                )}
                <Grid item>{children}</Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  sectionTitle: PropTypes.string,
}

export default SectionContainer
