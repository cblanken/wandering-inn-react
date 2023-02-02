import React from 'react'
import SidebarItem from './SidebarItem'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-start;
  gap: 1rem;
  background: #282c34;
  width: 10%;
  min-width: fit-content;
  max-width: 200px;
  height: 100%;
  padding: 1rem 0;
`

function Sidebar() {
  return (
    <Div>
      <SidebarItem text="One" />
      <SidebarItem text="Two" />
      <SidebarItem text="Three" />
    </Div>
  )
}

export default Sidebar