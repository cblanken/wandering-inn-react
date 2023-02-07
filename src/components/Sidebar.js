import React from 'react'
import styled from 'styled-components'

import SidebarItem from './SidebarItem'
import { FiActivity, FiExternalLink } from 'react-icons/fi'
import { FiUsers, FiSearch, FiInfo, FiSettings, FiGithub, FiStar, FiAward, FiFeather } from 'react-icons/fi'

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #13162A;
  padding: 1rem;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
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
    <Nav>
      <div>
        <Section>
          <SidebarItem text="Overview" link="/" left_icon=<FiActivity/> />
          <SidebarItem text="Characters" link="/characters" left_icon=<FiUsers/> />
          <SidebarItem text="Classes" link="/classes" left_icon=<FiStar/> />
          <SidebarItem text="Skills" link="/skills" left_icon=<FiAward/> />
          <SidebarItem text="Magic" link="/magic" left_icon=<FiFeather/> />
        </Section>
        <Section>
          <SidebarItem text="Search" link="/search" left_icon=<FiSearch/> />
        </Section>
      </div>
      <Footer>
        <SidebarItem
          text="Code"
          link="https://github.com/cblanken/wandering-inn-react"
          left_icon=<FiGithub/>
          right_icon=<FiExternalLink/>
        />
        <SidebarItem text="About" link="/about" left_icon=<FiInfo/> />
        <SidebarItem text="Settings" link="/settings" left_icon=<FiSettings/> />
      </Footer>
    </Nav>
  )
}

export default Sidebar