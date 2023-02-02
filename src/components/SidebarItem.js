import React from 'react'
import styled from 'styled-components'

function SidebarItem({ icon, text }) {

  const Button = styled.button`
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgba(0,0,0,0);
    color: rgb(210,220,220);
    margin: 0 1.5rem;
    font: bold 1rem 'Hack', Helvetica, monospace;

    &:hover {
      
    }
  `;

  return (
    <>
        <Button>{text}</Button>
    </>
  )
}

export default SidebarItem