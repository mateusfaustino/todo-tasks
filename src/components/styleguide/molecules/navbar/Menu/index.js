import React from 'react'
import Container from './styles'
import Item from './Item'
import {menu} from '../../../../../matt.settings'
import SignOutButton from '../../../../this-project/signOutButton'
const Menu = (props) => {
    return( 
        <Container active={props.isActive} >
            {menu.map((item,index)=>{
                return(
                    <Item to={item.link} key={index}>
                        {item.title}
                    </Item>
                )
            })}
            <SignOutButton/>
        </Container>
    )
}
export default Menu