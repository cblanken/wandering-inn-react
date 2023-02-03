import React from 'react'
import styled from 'styled-components'

import SidebarItem from './SidebarItem'
import { FiActivity, FiExternalLink } from 'react-icons/fi'
import { FiUsers, FiSearch, FiInfo, FiSettings, FiGithub } from 'react-icons/fi'

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from '../pages/Home'
import Overview from '../pages/Overview'
import Characters from '../pages/Characters'
import Search from '../pages/Search'
import About from '../pages/About'
import Settings from '../pages/Settings'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 3.75rem);
  background: #13162A;
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
            <SidebarItem text="Overview" link="/" left_icon=<FiActivity/> />
            <SidebarItem text="Characters" link="/characters" left_icon=<FiUsers/> />
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
      </Main>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default Sidebar