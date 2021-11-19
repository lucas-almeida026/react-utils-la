type JustifyContent = 
  'flex-start' |
  'center' |
  'flex-end' |
  'space-evenly' |
  'space-around' |
  'space-between'

type AlignItems =
  'flex-start' |
  'center' |
  'flex-end'

export const stackFlexColumn = (horizontalAlignment: AlignItems = 'center', verticalAlginment: JustifyContent = 'center'): any => ({
  direction: "column",
  justifyContent: verticalAlginment,
  alignItems: horizontalAlignment
})

export const stackFlexRow = (horizontalAlignment: JustifyContent = 'center', verticalAlginment: AlignItems = 'center'): any => ({
  direction: "row",
  justifyContent: horizontalAlignment,
  alignItems: verticalAlginment
})

export const flexColumn = (horizontalAlignment: AlignItems = 'center', verticalAlginment: JustifyContent = 'center'): any => ({
  display: 'flex',
  flexDirection: "column",
  justifyContent: verticalAlginment,
  alignItems: horizontalAlignment
})

export const flexRow = (horizontalAlignment: JustifyContent = 'center', verticalAlginment: AlignItems = 'center'): any => ({
  display: 'flex',
  flexDirection: "row",
  justifyContent: horizontalAlignment,
  alignItems: verticalAlginment
})