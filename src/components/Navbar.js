import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
    render() {
        return (
            <AuthContext>{(authContext) => {
                return (
                    <ThemeContext.Consumer>{(themeContext) => {
                        const { isAuthenticated, toggleAuth } = authContext
                        const { isLight, light, dark } = themeContext;
                        const theme = isLight ? light : dark;
                        return (
                            <nav style={{ background: theme.ui, color: theme.syntax }}>
                                <h1>Context App</h1>
                                <div onClick={toggleAuth}>
                                    {isAuthenticated ? 'Logged in' : 'Logged out'}
                                </div>
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                </ul>
                            </nav>
                        );
                    }}
                    </ThemeContext.Consumer>
                )
            }}
            </AuthContext>
        )
    }
}
 
export default Navbar;