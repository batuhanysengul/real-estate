import React from 'react'
import {
DropdownContainer,
Icon,
CloseIcon,
DropdownWrapper,
BtnWrap,
DropdownLink,
DropdownMenu,
} from './DropdownEl'
import {menuData} from '../../data/MenuData'
import {Button} from '../Button' 


const Dropdown = ({isOpen, toggle}) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon  />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) =>(
            <DropdownLink to={item.link} key={index}>{item.title}</DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button primary='true' round='true' big='true' to='/contact'>Contact</Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  )
}

export default Dropdown