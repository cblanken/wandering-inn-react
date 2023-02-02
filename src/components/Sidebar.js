import React from 'react'
import styled from 'styled-components'

import SidebarItem from './SidebarItem'
import { FiActivity } from 'react-icons/fi'
import { FiUsers } from 'react-icons/fi'
import { FiSearch } from 'react-icons/fi'
import { FiInfo } from 'react-icons/fi'
import { FiSettings } from 'react-icons/fi'

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  background: #282c34;
  width: 10%;
  min-width: fit-content;
  max-width: 200px;
  height: calc(100% - 3.75rem);
  padding: 1rem 0;
`

function Sidebar() {
  return (
    <>
      <Section>
        <SidebarItem text="Overview" icon=<FiActivity/> />
        <SidebarItem text="Characters" icon=<FiUsers/> />
        <SidebarItem text="Search" icon=<FiSearch/> />
        <SidebarItem text="About" icon=<FiInfo/> />
        <SidebarItem text="Settings" icon=<FiSettings/> />
      </Section>
    </>
  )
}

export default Sidebar