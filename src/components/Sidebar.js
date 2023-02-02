import React from 'react'
import styled from 'styled-components'

import SidebarItem from './SidebarItem'
import { FiActivity } from 'react-icons/fi'
import { FiUsers } from 'react-icons/fi'
import { FiSearch } from 'react-icons/fi'
import { FiInfo } from 'react-icons/fi'
import { FiSettings } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi'

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from '../pages/Home'
import Overview from '../pages/Overview'
import Characters from '../pages/Characters'

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
    <Router>
      <Main>
        <div>
          <Section>
            <SidebarItem text="Overview" link="/" icon=<FiActivity/> />
            <SidebarItem text="Characters" link="characters" icon=<FiUsers/> />
            <SidebarItem text="Search" link="search" icon=<FiSearch/> />
          </Section>
          <Section>
            <SidebarItem text="Source" link="https://github.com/cblanken/wandering-inn-react" icon=<FiGithub/> />
          </Section>
        </div>
        <Footer>
          <SidebarItem text="About" icon=<FiInfo/> />
          <SidebarItem text="Settings" icon=<FiSettings/> />
        </Footer>
      </Main>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/search" element={<Characters />} />
      </Routes>
    </Router>
  )
}

export default Sidebar