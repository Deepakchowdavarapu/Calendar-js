import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import DateCalendarValue from './DateCalendar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DateCalendarValue/>
  </StrictMode>,
)
