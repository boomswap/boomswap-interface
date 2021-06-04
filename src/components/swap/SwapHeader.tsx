import React from 'react'
import styled from 'styled-components'
import Settings from '../Settings'
import { RowBetween } from '../Row'
import { TYPE } from '../../theme'

const StyledSwapHeader = styled.div`
  padding: 12px 1rem 0px 1.5rem;
  margin-bottom: -4px;
  width: 100%;
  max-width: 500px;
  color: ${({ theme }) => theme.text6};
  font-size: 20px;
  // background-color: #ffe4e1;
  // border-radius: 22px;
`

export default function SwapHeader() {
  return (
    <StyledSwapHeader>
      <RowBetween>
        <TYPE.white fontWeight={600}>Swap</TYPE.white>
        <Settings />
      </RowBetween>
    </StyledSwapHeader>
  )
}
