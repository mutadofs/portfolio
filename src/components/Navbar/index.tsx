import { useState } from 'react';
import logo from '../../assets/logoproject.svg';
import { NavigationBar, NavLinks, Text, CustomLink, Img, Li, MenuIcon, CloseIcon } from './styles';

export const NavBar = () => {
  const [click, setClick] = useState(["flex", "none"]);
  const [bar, setBar] = useState(["translateX(0)", "translateX(100%)"]);

  function switcherIcon() {
    const newClick = click.map(clicked => {
      return clicked === "flex" ? "none" : "flex"
    });

    const newBar = click.map(clicked => {
      return clicked === "none" ?  "translateX(0)" : "translateX(100%)"
    });

    setBar(newBar);

    setClick(newClick);
  };
  

  return (
    <NavigationBar>

      <Img src={logo} alt="logoproject" />
      <MenuIcon SetDisplay={click[0]} onClick={switcherIcon}/>
      <CloseIcon SetDisplay={click[1]} onClick={switcherIcon}/>

      <NavLinks SetTransform={bar[1]} onClick={switcherIcon}>
        
        
          <Li>
            <Text href='#'>Início</Text>
          </Li>
        

        
          <Li>
            <Text href='#sobre'>Sobre</Text>
          </Li>
        
        
        
          <Li>
            <Text href='#habilidades'>Habilidades</Text>
          </Li>          
        

        
          <Li>
            <Text href='#projetos'>Projetos</Text>
          </Li> 
        

        
          <Li>
            <Text href='#contato'>Contato</Text> 
          </Li>  
        
        
      </NavLinks>
    </NavigationBar>
  )
}