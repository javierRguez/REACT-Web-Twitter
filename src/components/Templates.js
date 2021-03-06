import styled from 'styled-components'
import { Grid, List } from '@material-ui/core'

const ScrollableItem = styled(Grid)`
  height: 100%;
  overflow-y: auto;
`
const ListWithoutPadding = styled(List)`
  padding: 0;
`

export { ScrollableItem, ListWithoutPadding }
