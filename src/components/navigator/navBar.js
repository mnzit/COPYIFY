import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavWrapper = styled.div``

const Nav = styled.nav``

const List = styled.ul``

const ListItem = styled.li``

export default function NavBar() {
    return (
        <NavWrapper>
            <Nav>
                <List>
                    <ListItem>
                        <Link to='/'>Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/artiste/123'>Artiste</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/playlist/123'>Playlist</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/album/123'>Album</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/search'>Search</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/library'>Library</Link>
                    </ListItem>
                </List>
            </Nav>
        </NavWrapper>
    )
}
