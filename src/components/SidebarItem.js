import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const ItemWrapper = styled.div`
  width: 100%;

  & > a {
    width: 100%;
    text-decoration: none;
  }

  &:hover {
    color: rgb(210,220,220);
    background: rgba(0,0,0,30%);
    border-radius: 0.5rem;
  }
`

const Item = styled.button`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: center;
  border: none;
  color: rgb(150,160,160);
  background: rgba(0,0,0,0);
  padding: 0.75rem 1.5rem;
  font: bold 1rem 'Hack', Helvetica, monospace;
`;

const activeNavLink = {
  background: "red",
}

function SidebarItem({ text, icon, link }) {
  return (
    <ItemWrapper>
      {
        link
        ? <NavLink 
            to={link}
            children=<Item>{icon}{text}</Item>
            style={({ isActive }) => isActive ? activeNavLink : undefined }
          />
        : <Item>{icon}{text}</Item>
      }
    </ItemWrapper>
  )
}

export default SidebarItem