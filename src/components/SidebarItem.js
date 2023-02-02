import React from 'react'
import styled from 'styled-components'

function SidebarItem({ text, icon, selected }) {

  const Button = styled.button`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: flex-start;
    align-items: center;
    border: none;
    border-radius: 0.5rem;
    color: rgb(150,160,160);
    background: rgba(0,0,0,0);
    width: 100%;
    padding: 0.5rem 1.5rem;
    font: bold 1rem 'Hack', Helvetica, monospace;

    &:hover {
      color: rgb(210,220,220);
      background: rgba(0,0,0,30%);
    }
  `;

  return (
    <>
        <Button>{icon}{text}</Button>
    </>
  )
}

export default SidebarItem