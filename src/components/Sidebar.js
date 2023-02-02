import React from 'react'
import styled from 'styled-components'

import SidebarItem from './SidebarItem'
import { FiActivity } from 'react-icons/fi'
import { FiUsers } from 'react-icons/fi'
import { FiSearch } from 'react-icons/fi'
import { FiInfo } from 'react-icons/fi'
import { FiSettings } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 3.75rem);
  background: #282c34;
  width: fit-content;
  padding: 1rem;
`
const Section = styled.section`
`

const SubSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  border-bottom: 2px solid rgb(230, 230, 230);
  padding: 1rem 0;

  &:last-child {
    border-bottom: none;
  }
`

const Footer = styled.footer`
  background-color: rgba(30,30,30,10);
  border-radius: 20px;
  padding: 1rem;
`

function Sidebar() {
  return (
    <>
      <Main>
        <Section>
          <SubSection>
            <SidebarItem text="Overview" icon=<FiActivity/> />
            <SidebarItem text="Characters" icon=<FiUsers/> />
            <SidebarItem text="Search" icon=<FiSearch/> />
          </SubSection>
          <SubSection>
            <SidebarItem text="Source" icon=<FiGithub/> />
          </SubSection>
        </Section>
        <Footer>
          <SidebarItem text="About" icon=<FiInfo/> />
          <SidebarItem text="Settings" icon=<FiSettings/> />
        </Footer>
      </Main>
    </>
  )
}

export default Sidebar