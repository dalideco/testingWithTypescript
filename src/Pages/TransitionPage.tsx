import React from 'react';
import styled, { StyledComponent } from 'styled-components'
import { BrowserRouter as Router, NavLink , Switch, Route,useLocation } from "react-router-dom";
import { useTransition,animated } from "react-spring";
import { AnimatePresence, motion } from "framer-motion";


const FullPageDiv= styled.div`
    width: 100%;
    height: 100vh;
    background: #ccc;
    color: black;
    display:flex;
    & a {
        text-decoration: none;
        color: inherit;
    }
    & .green{
        background: green;
    }
    
`
const StyledNav = styled.nav`
    background: #282c34;
    display:flex;
    flex-direction: column ;
    color: white;
    width: 400px;
    padding-top: 20vh;
    &>a {
        padding :30px 0;
        transition: background 300ms ease-in-out;
        &:hover{
            background: black;
        }
    }
    
`

const StyledPage = styled.div`
    flex: 1;
    text-align: center;
    
`



//this is the little component


const transitionVariants= {
    in:{scaleX:1},
    out:{scaleX:0}
}

interface little {
    children?: React.ReactNode
    background?:String
}

const LittleComponent:React.FC<little> = ({children,background})=>{

    const LittleComponentDiv= styled(motion.div)`
    background:${props=> props.theme.background};
    border: 1px solid black;
    width: 500px;
    margin: 100px auto;
    padding: 50px 0;
    `

    return (
        <LittleComponentDiv
            initial="out"
            animate="in"
            exit="out"
            variants={transitionVariants}
            transition={{duration:0.3}}
            theme={{background:background}}
        >
            {children}
        </LittleComponentDiv>
    )
}

const MyRouter:React.FC= ()=>{

    const location = useLocation();

    return (

        
        <div style={{flex:'1',overflow:"hidden", position:"relative"}}>
            
            <StyledPage  >
            <AnimatePresence exitBeforeEnter={true}>
                <Switch location={location} key={location.pathname}>
                    <Route exact path="/">
                        <LittleComponent background="red">this is the home </LittleComponent>
                    </Route>
                    <Route exact path="/hello">
                        <LittleComponent background="blue">This is the hello part</LittleComponent>
                    </Route>
                    <Route exact path="/deco">
                        <LittleComponent background="green">This is DALIDECOCK</LittleComponent>
                    </Route>
                </Switch>
            </AnimatePresence>
            </StyledPage>
            
            
            
        </div>
    )
}

// this is the main component
const TransitionPage = () => {
    return (
        <Router>
        <FullPageDiv>
            <StyledNav>
                <NavLink exact to="/" activeClassName="green">home</NavLink>
                <NavLink exact to="/hello" activeClassName="green">hello</NavLink>
                <NavLink exact to="/deco" activeClassName="green">deco</NavLink>
            </StyledNav>
            <MyRouter/>
        </FullPageDiv>
        </Router>
    );
}

export default TransitionPage;
