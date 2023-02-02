import React from 'react'
import styled from 'styled-components'

function SidebarItem({ icon, text }) {

  const Button = styled.button`
    border: none;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgba(0,0,0,0);
    color: rgb(210,220,220);
    padding: 0.5rem 1.5rem;
    margin: 0 1rem;
    font: bold 1rem 'Hack', Helvetica, monospace;

    &:hover {
      color: rgb(150,160,160);
      background: rgba(0,0,0,30%);
    }
  `;

  return (
    <>
        <Button>{text}</Button>
    </>
  )
}

export default SidebarItem